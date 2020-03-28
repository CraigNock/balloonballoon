// api key: 35f6bd1548f84ae2bcb8e99a4fae585f

import React from 'react';
import styled from 'styled-components';

import getWind from './Wind';

import {PositionContext} from './PositionContext';
import {ConditionsContext} from './ConditionsContext'; 



const AddressToPosition = () => {
  const { actions: {changePosition} } = React.useContext(PositionContext);
  const { actions: {changeConditions}} = React.useContext(ConditionsContext);

  const [input, setInput] = React.useState('montreal');

  const getPosition = () => {
    const address = input;
    console.log('address ', address);
    fetch('/api/address', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
          "Accept" : "application/json"
      },
      body:JSON.stringify({address})
    })
      .then(data => data.json())
      .then(data => {
        console.log(data);
        let newLat = data.data.lat;
        let newLong = data.data.lng;
        let latLng = [newLat, newLong]
        // console.log(newLat, newLong, latLng);
        changePosition(newLat, newLong);
        getWind(latLng, changeConditions);
      });
  };
  

  return (
    <StyledForm 
    onSubmit={(ev) =>{ 
      ev.preventDefault();
      getPosition();
    }}
    >
        <label htmlFor='address'>New starting location</label>
        <input 
        type='text' 
        name='address' 
        id='address' 
        placeholder='Location'
        onChange={(ev)=> setInput(ev.target.value)}
        ></input>
        <button type='submit'>
          Submit
        </button>
    </StyledForm>
  )
};

const StyledForm = styled.form`
  display:inline-block;
  label {
    font-family: 'Fredericka the Great', cursive;
    font-size: 1rem;
    color: lightgray;
  }
  input {
    font-family: 'Fredericka the Great', cursive;
    background-color: darkgray;
    color: white;
    margin: .5rem;
    /* width: 4rem; */
    height: 2rem;
    border-radius: 5px
  }
  button {  
    font-family: 'Fredericka the Great', cursive;
    background-color: slategray;
    color: white;
    height: 2rem;
    border-radius: 5px;
    border-color: goldenrod;
  }
`;


export default AddressToPosition;