import React from 'react';
import styled from 'styled-components';
import Clouds from './Clouds'
import MapMap from './Map';
import LocalWeather from './LocalWeather';

const Homepage = () => {

  return(
    <StyledSkyWrap>
      <Clouds/>
      <StyledTitle>Where <span>is</span> my Balloon?</StyledTitle>
      <StyledContent>
        <MapMap/>
        <LocalWeather/>
      </StyledContent>
    </StyledSkyWrap>
  )
}

const StyledSkyWrap = styled.div`
  /* background: #87ceeb; */
  /* opacity:80%; */
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

const StyledTitle = styled.h1`
  font-family: 'Trade Winds', cursive;
  /* font-family: 'Lobster', cursive; */
  /* font-family: 'Dancing Script', cursive; */
  /* font-family: 'Kaushan Script', cursive; */
  /* font-family: 'Rochester', cursive; */
  /* font-family: 'Pinyon Script', cursive; */
  /* font-family: 'Fredericka the Great', cursive; */
  padding: 1rem;
  background: rgba(0,0,0,.5);
  margin-bottom: 1rem;
  span {
    font-family: 'Trade Winds', cursive;
  /* font-family: 'Lobster', cursive; */
  /* font-family: 'Dancing Script', cursive; */
  /* font-family: 'Kaushan Script', cursive; */
  /* font-family: 'Rochester', cursive; */
  /* font-family: 'Pinyon Script', cursive; */
  /* font-family: 'Fredericka the Great', cursive; */
    font-style: italic;
  }
`;

const StyledContent= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;


export default Homepage;