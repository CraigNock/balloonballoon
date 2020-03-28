import React, { useEffect } from 'react';
import styled from 'styled-components';

import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import Overlay from 'pigeon-overlay';
//tippy for on click marker?
import balloon from './assets/balloon.svg'


import getWind from './Wind';

import {PositionContext} from './PositionContext';
import {ConditionsContext} from './ConditionsContext'; 


const provider = (x, y, z, dpr) =>  {
  return `https://tile.thunderforest.com/pioneer/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?apikey=***REMOVED***`;
};
const StamenAttribution = () => (
  <span className='map-attribution'>
    Map tiles by <a href="http://https://www.thunderforest.com/">Thunderforest</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.
  </span>
)


// const provider = (x, y, z, dpr) =>  {
//   return `https://stamen-tiles.a.ssl.fastly.net/terrain/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.jpg`;
// };
// const StamenAttribution = () => (
//   <span className='map-attribution'>
//     Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.
//   </span>
// )


const MapMap = () => {
  const {state, actions: {changePosition}} = React.useContext(PositionContext);
  const {lat, long,} = state;

  const { stateCond, actions: {changeConditions}} = React.useContext(ConditionsContext);
  const {windSpeed,windGust,windBearing,} = stateCond;


  const [focus, setFocus] = React.useState(0);
  useEffect(() => {
    let posInt = setInterval(()=>{
      setFocus(n => n + 0.00001);
      // console.log(focus);
    }, 600000);
    return () => clearInterval(posInt);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getWind([state.lat, state.long], changeConditions);
  // eslint-disable-next-line
  }, [focus]);


  const [x, setX] = React.useState(1);
  const [y, setY] = React.useState(1);
  useEffect(() => {
    let posInt = setInterval(()=>{
    changePosition(state.lat - (0.00001 * y), state.long - (0.00001 * x));
}, 100);
    // console.log(lat, long);
    return () => clearInterval(posInt);
  // eslint-disable-next-line
  }, [state]);

  useEffect(() => {
    // console.log('sc ',stateCond);
    let windSum = (windGust-windSpeed)/2 + windSpeed;
    // console.log('windsum ',windSum);
    console.log('windbearing ', windBearing);
    setY(windSum * Math.cos((-(windBearing -180)) * Math.PI / 180));
    setX(windSum * Math.sin((-(windBearing )) * Math.PI / 180));
    // console.log('x ',x,'y ', y);
// eslint-disable-next-line
  }, [stateCond]);


  return (
    <MapWrap>
      <Map
      center={[lat, long]}
      defaultZoom={13}
      minZoom={5}
      maxZoom={16}//12
      provider={provider}
      dprs={[1, 2]}
      // width={800}
      // height={700}
      attribution={<StamenAttribution/>}
      onClick={ ({ event, latLng, pixel }) => {
          // console.log('click', latLng, pixel);
          getWind(latLng, changeConditions);
        } }
      >
        <Overlay 
        anchor={[lat, long]} 
        offset={[5, 15]}>
          {/* <span role="img" aria-label='balloon'>🎈</span> */}
          <StyledBalloon src={balloon} />
        </Overlay>

        <Marker
        anchor={[45.5, -73.59]} 
        payload={'Montreal'}
        onClick={({ event, anchor, payload }) => {
          console.log('marker', anchor, payload);
        }}
        />
      </Map>
      <StyledForm>
        <input name='lat' placeholder='lat'></input>
        <input name='long' placeholder='long'></input>
        <button type='submit'>Submit</button>
      </StyledForm>
    </MapWrap>
  )
}

const MapWrap = styled.div`
  width: 70vw;
  height: 60vh;
  margin: 0 auto;
  border: 10px ridge goldenrod;
  border-radius: 10px;
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.53);
  /* opacity:50%; */
`;

const StyledBalloon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;

const StyledForm = styled.form`
  display:none;
  input {
    background-color: gray;
    color: white;
    margin: .5rem;
    width: 4rem;
    height: 2rem;
    border-radius: 5px
  }
  button {
    background-color: black;
    color: white;
    height: 2rem;
    border-radius: 5px
  }
`;




export default MapMap;