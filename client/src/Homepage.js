import React from 'react';
import styled from 'styled-components';
import Clouds from './Clouds'
import MapMap from './Map';
import LocalWeather from './LocalWeather';
import AddressToPosition from './AddressToPosition';

import gentleman from './assets/gentleman.svg'



const Homepage = () => {

  return(
    <StyledSkyWrap>
      <Clouds/>
      <StyledTopBar>
        <StyledTitle>
          <img src={gentleman} alt='gentleman'/>
          Where <span>is</span> my Balloon? 
        </StyledTitle>
        <AddressToPosition/>
      </StyledTopBar>
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

const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: rgba(0,0,0,.5);
  margin-bottom: 1rem;
`;

const StyledTitle = styled.h1`
  /* font-family: 'Trade Winds', cursive; */
  /* font-family: 'Rye', cursive; */
  /* font-family: 'Pinyon Script', cursive; */
  font-family: 'Fredericka the Great', cursive;
  color: whitesmoke;
  
  span {
    /* font-family: 'Trade Winds', cursive; */
    /* font-family: 'Pinyon Script', cursive; */
    font-family: 'Fredericka the Great', cursive;
    font-style: italic;
    color: whitesmoke;
  }
  img {
    height: 3rem;
    vertical-align: -50%;
    margin-right: 1rem;
  }
`;

const StyledContent= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;


export default Homepage;