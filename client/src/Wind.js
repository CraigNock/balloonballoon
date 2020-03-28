// import React from 'react';
// import styled from 'styled-components';

// import {ConditionsContext} from './ConditionsContext';
// const { state, actions: changeConditions} = React.useContext(ConditionsContext);
// const {windSpeed,windGust,windBearing,} = state


const getWind = (pos, changeConditions) => {

  let currentPosition = [...pos];
  // console.log('position at fetch ', currentPosition);

  fetch('/api/conditions', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json"
    },
    body:JSON.stringify({currentPosition})
})
    .then(data => data.json())
    .then(data => {
      // console.log('current conditions ', data.conditions.currently);
      // console.log('windSpeed ', data.conditions.currently.windSpeed);
      let currentConditions = data.conditions.currently;
      changeConditions(currentConditions);
    });
}

export default getWind;



// "currently": {
//   "time": 1584816805, -->sort out a local time conversion
//   "summary": "Clear",
//   "icon": "clear-day", --> sort out icon display skycons
//   "nearestStormDistance": 375,
//   "nearestStormBearing": 147,
//   "precipIntensity": 0,
//   "precipProbability": 0,
//   "temperature": -3.41,
//   "apparentTemperature": -8.28, --> 'feels like'
//   "dewPoint": -15.53,
//   "humidity": 0.39,
//   "pressure": 1032.6,
//   "windSpeed": 13.53, kph
//   "windGust": 20.32, kph
//   "windBearing": 338,
//   "cloudCover": 0.05, -->ie 5%
//   "uvIndex": 3,
//   "visibility": 16.093, -->(km)
//   "ozone": 405.9
// }