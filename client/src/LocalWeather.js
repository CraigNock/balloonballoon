import React from 'react';
import styled from 'styled-components';

import {ConditionsContext} from './ConditionsContext'

const LocalWeather = () => {
  const {stateCond} = React.useContext(ConditionsContext);
  const {
    time,
    summary,
    // icon,
    nearestStormDistance,
    nearestStormBearing,
    precipIntensity,
    precipProbability,
    temperature,
    apparentTemperature,
    // dewPoint,
    humidity,
    pressure,
    windSpeed,
    windGust,
    windBearing,
    cloudCover,
    uvIndex,
    visibility,
    // ozone,
  } = stateCond;

  // let dateObj = new Date(time * 1000); 
  // let utcString = dateObj.toUTCString(); 
  // let convertedTime = utcString.slice(-12, -10);
  let convertedTime = new Date(time * 1000).toUTCString().slice(-12, -10);

  return(
    <StyledBox>
    <StyledH2>Conditions at Balloon</StyledH2>
    <StyledDiv>
      <StyledSubDiv>
        <p>Balloon Time: <span>{convertedTime} hrs</span></p>
        <p>Conditions: <span>{summary}</span></p>
        <p>Temperature: <span>{temperature}°C</span></p>
        <p>Feels Like: <span>{apparentTemperature}°C</span></p>
      </StyledSubDiv>
      <StyledSubDiv>
        <p>UV Index: <span>{uvIndex}</span></p>
        <p>Visibility: <span>{visibility} km</span></p>
        <p>Cloud Cover: <span>{cloudCover}</span></p>
        <p>Humidity: <span>{humidity}</span></p>
      </StyledSubDiv>
      <StyledSubDiv>
        <p>Wind Speed: <span>{windSpeed} m/s</span></p>
        <p>Wind Gust: <span>{windGust} m/s</span></p>
        <p>Wind Bearing: <span>{windBearing}°</span></p>
        <p>Pressure: <span>{pressure}</span></p>
      </StyledSubDiv>
      <StyledSubDiv>
        <p>Rain Intensity: <span>{precipIntensity} mm/hr</span></p>
        <p>Chance of Rain: <span>{precipProbability}%</span></p>
        <p>Nearest Storm: <span>{nearestStormDistance} km</span></p>
        <p>Nearest Storm Bearing: <span>{nearestStormBearing}°</span></p>
      </StyledSubDiv>
    </StyledDiv>
    </StyledBox>
  )
}

const StyledBox = styled.div`
  /* background: skyblue; */
  /* width: 50vw; */
  margin: 1rem auto;
  padding: 2rem 1rem 2rem;
`;

const StyledDiv = styled.div`
  display: flex;
  width: fit-content;
  background: rgba(0,0,0,.5);
  border-radius: 0 5px 5px 5px;

`;

const StyledSubDiv = styled.div`
  padding: 0.5rem 1rem;
  p{
    font-family: 'Trade Winds', cursive;
  }
  span {
    font-family: 'Trade Winds', cursive;
    color: lime;
  }
`;

const StyledH2 = styled.h2`
  font-family: 'Trade Winds', cursive;
  width: fit-content;
  background: rgba(0,0,0,.5);
  border-radius: 5px 5px 0 0;
  padding: .5rem 1rem 0;
`;
export default LocalWeather;