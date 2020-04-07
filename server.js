const express = require('express');
const path = require('path');
const request = require('request-promise');
const bodyParser = require('body-parser');
const opencage = require('opencage-api-client');
const moment = require('moment-timezone');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());



const cityGet = async (lat, lon) => {
  try{
    let cityData = await request(`http://overpass-api.de/api/interpreter?data=[out:json];node(around:10000,${lat},${lon})["place"="city"];out;`);
    cityData = JSON.parse(cityData);
    return cityData;
  } catch(err) {console.log('error', err)};
};
const nearestHandle = async (req, res) => {
  let position = req.body.currentPosition;
  let lat = position[0];
  let lon = position[1];
  let cities = await cityGet(lat, lon);
  let cityList = [...cities.elements];
  cityList.sort((elementA, elementB) => {
    let a = Math.abs( (lat - elementA.lat) + (lon - elementA.lon) );
    let b = Math.abs( (lat - elementB.lat) + (lon - elementB.lon) );
    return a - b;
  });
  const cityName = cityList[0].tags.name;
  res.status(200).send({
    status:'200',
    cityName:cityName,
  })
};

//data.elements[0].tags.name
//data.elements[0].tags.population
//data.elements[0].lat //use for distance?
//data.elements[0].lon


const darkGet = async (lat, long) => {
  try{
    let darkData = await request(`https://api.darksky.net/forecast/API_KEY/${lat},${long}?units=si&exclude=minutely,daily,alerts,flags`);
    darkData = JSON.parse(darkData);
    // console.log('darkdata', darkData);
    return darkData;
  } catch(err) {console.log('error', err)}
};
const conditionsHandle = async (req, res) => {
  let position = req.body.currentPosition;
  // console.log('position ',position);
  let lat = position[0];
  let long = position[1];
  let conditions = await darkGet(lat, long);
  let timey = moment.unix(conditions.currently.time).tz(conditions.timezone).format('ha z');
  // console.log('timey ', timey);
  conditions.currently.time = timey;
  res.status(200).send({
    status:'200',
    conditions:conditions,
  })
};

const addressGet = async (addresso) => {
  const requestObj = {
    key: 'API KEY',
    q: addresso
  };
  return opencage.geocode(requestObj)
    .then(data => {
        if (data.status.code == 200) {
            if (data.results.length > 0) {
                const place = data.results[0];
                // console.log(place.geometry);
                return place.geometry;
            }
        } else {
            console.log('error', data.status.message);
        }
    })
    .catch(error => console.log('error', error.message));
}
const addressHandle = async (req, res) => {
  let addresso = req.body.address;
  // console.log('address ', addresso);
  let data = await addressGet(addresso);
  res.status(200).send({
    status:'200',
    data: data,
  })
};

app.post('/api/conditions', conditionsHandle);
app.post('/api/address', addressHandle);
app.post('/api/nearest', nearestHandle);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`listening on ${port}`);
