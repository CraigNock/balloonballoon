import React from 'react';
import styled from 'styled-components';

import paper from './assets/paper.jpg'

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
    // pressure,
    windSpeed,
    windGust,
    windBearing,
    cloudCover,
    uvIndex,
    visibility,
    // ozone,
    closestCity,
  } = stateCond;

  // let dateObj = new Date(time * 1000); 
  // let utcString = dateObj.toUTCString(); 
  // let convertedTime = utcString.slice(-12, -10);
  // let convertedTime = new Date(time * 1000).toUTCString().slice(-12, -10);

  return(
    <StyledBox>
    <StyledH2>Conditions at Balloon</StyledH2>
    <StyledDiv>
      <StyledSubDiv>
        <p>Nearest City: <a href={`https://en.wikipedia.org/wiki/${closestCity}`} target="_blank"> {closestCity}</a>
        </p>
        <p>Balloon Time: <span>{time}</span></p>
        <p>Conditions: <span>{summary}</span></p>
        <p>Visibility: <span>{visibility.toFixed(1)} km</span></p>
      </StyledSubDiv>
      <StyledSubDiv>
        <p>Temperature: <span>{temperature.toFixed(1)}°C</span></p>
        <p>Feels Like: <span>{apparentTemperature.toFixed(1)}°C</span></p>
        <p>UV Index: <span>{uvIndex}</span></p>
        <p>Humidity: <span>{humidity.toFixed(1)}</span></p>
      </StyledSubDiv>
      <StyledSubDiv>
        <p>Wind Speed: <span>{windSpeed.toFixed(1)} m/s</span></p>
        <p>Wind Gust: <span>{windGust.toFixed(1)} m/s</span></p>
        <p>Wind Bearing: <span>{windBearing}°</span></p>
        <p>Cloud Cover: <span>{cloudCover.toFixed(1)}</span></p>
      </StyledSubDiv>
      <StyledSubDiv>
        <p>Rain Intensity: <span>{precipIntensity.toFixed(1)} mm/hr</span></p>
        <p>Chance of Rain: <span>{precipProbability}%</span></p>
        <p>Nearest Storm: <span>{nearestStormDistance? `${nearestStormDistance}km`: 'n/a'} </span></p>
        <p>Storm Bearing: <span>{nearestStormBearing? `${nearestStormBearing}°`: 'n/a'}</span></p>
      </StyledSubDiv>
    </StyledDiv>
    </StyledBox>
  )
}

const StyledBox = styled.div`
  /* background: skyblue; */
  /* width: 50vw; */
  margin: 1rem auto;
  /* padding: 2rem 1rem 2rem; */
  /* background: radial-gradient(circle, rgba(255,232,159,1) 0%, rgba(196,169,92,1) 100%); */
  background-image: url(${paper});
  background-size: cover;
  box-shadow: 5px 5px 20px 5px rgba(0,0,0,0.53);
  border: 3px solid gray;
  border-radius: 5px;
  opacity: 0.9;
`;

const StyledDiv = styled.div`
  display: flex;
  width: fit-content;
  /* background: rgba(0,0,0,.5); */
  /* background: radial-gradient(circle, rgba(255,232,159,1) 0%, rgba(196,169,92,1) 100%); */
  /* border: 3px solid darkgray; */
  /* border-radius: 0 5px 5px 5px; */
  /* box-shadow: 5px 5px 20px 5px rgba(0,0,0,0.53); */
  color: black;

`;

const StyledSubDiv = styled.div`
  padding: 0.5rem 1rem;
  p{
    /* font-family: 'Trade Winds', cursive; */
    font-family: 'Rye', cursive;

  }
  span, a {
    /* font-family: 'Trade Winds', cursive; */
    font-family: 'Rye', cursive;
    color: maroon;
  }
`;

const StyledH2 = styled.h2`
  /* font-family: 'Trade Winds', cursive; */
  /* font-family: 'Rye', cursive; */
  font-family: 'Fredericka the Great', cursive;


  width: fit-content;
  /* background: rgba(0,0,0,.5); */
  /* background: radial-gradient(circle, rgba(255,232,159,1) 0%, rgba(196,169,92,1) 100%); */
  /* border-radius: 5px 5px 0 0; */
  /* border: 3px solid darkgray; */
  padding: .5rem 1rem 0;
  color: black;
`;


//background: radial-gradient(circle, rgba(255,232,159,1) 0%, rgba(196,169,92,1) 100%);


export default LocalWeather;