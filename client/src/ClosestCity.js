// api key: 35f6bd1548f84ae2bcb8e99a4fae585f

import React from 'react';
import styled from 'styled-components';

import {PositionContext} from './PositionContext';
import {ConditionsContext} from './ConditionsContext'; 



const ClosestCity = () => {
  const { state } = React.useContext(PositionContext);
  const { stateCond } = React.useContext(ConditionsContext);


  useEffect(() => {

  }, [stateCond])

  return (
    <>
    </>
  )
};



export default ClosestCity;