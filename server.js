const express = require('express');
const path = require('path');
const request = require('request-promise');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


const darkGet = async (lat, long) => {
  try{
    let darkData = await request(`https://api.darksky.net/forecast/***REMOVED***/${lat},${long}?units=si&exclude=minutely,daily,alerts,flags`);
    darkData = JSON.parse(darkData);
    // console.log('darkdata', darkData);
    return darkData;
  } catch(err) {console.log('error', err)}
}

const conditionsHandle = async (req, res) => {
  let position = req.body.currentPosition;
  // console.log('position ',position);
  let lat = position[0];
  let long = position[1];
  // let elevation = position.elevation;
  let conditions = await darkGet(lat, long);
  res.status(200).send({
    status:'200',
    conditions:conditions,
  })
}
app.post('/conditions', conditionsHandle);


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`listening on ${port}`);