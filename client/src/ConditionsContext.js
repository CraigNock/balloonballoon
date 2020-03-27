import React from 'react';


export const ConditionsContext = React.createContext(null);


const initialStateCond = {
  time: 1584832063,
  summary: "Clear",
  icon: "clear-night",
  nearestStormDistance: 154,
  nearestStormBearing: 162,
  precipIntensity: 0,
  precipProbability: 0,
  temperature: -4.01,
  apparentTemperature: -6.55,
  dewPoint: -16.86,
  humidity: 0.36,
  pressure: 1034,
  windSpeed: 0,
  windGust: 0,
  windBearing: 90,
  cloudCover: 0.25,
  uvIndex: 0,
  visibility: 16.093,
  ozone: 400.3,
}

const reducer = (stateCond, action) => {
  switch (action.type) {
    case 'CHANGE-CONDITIONS':
      return {
        ...stateCond,
        time: action.conditions.time,
        summary: action.conditions.summary,
        icon: action.conditions.icon,
        nearestStormDistance: action.conditions.nearestStormDistance,
        nearestStormBearing: action.conditions.nearestStormBearing,
        precipIntensity: action.conditions.precipIntensity,
        precipProbability: action.conditions.precipProbability,
        temperature: action.conditions.temperature,
        apparentTemperature: action.conditions.apparentTemperature,
        dewPoint: action.conditions.dewPoint,
        humidity: action.conditions.humidity,
        pressure: action.conditions.pressure,
        windSpeed: action.conditions.windSpeed,
        windGust: action.conditions.windGust,
        windBearing: action.conditions.windBearing,
        cloudCover: action.conditions.cloudCover,
        uvIndex: action.conditions.uvIndex,
        visibility: action.conditions.visibility,
        ozone: action.conditions.ozone,
      };
  
    default:
      return;
  }
};

export const ConditionsProvider = ({children}) => {
  const [stateCond, dispatch] = React.useReducer(reducer, initialStateCond);

  const changeConditions = (newConditions) => {
    dispatch({
      type: 'CHANGE-CONDITIONS',
      conditions: newConditions,
    })
    console.log('newconditions ', newConditions);
  };

  // const changeConditions = (newElevation) => {
  //   dispatch({
  //     type: 'CHANGE-ELEVATION',
  //     elevation: newElevation,
  //   })
  // };


  return (
    <ConditionsContext.Provider
      value={{
        stateCond,
        actions:{
          changeConditions,
          
        },
      }}
    >
      {children}
    </ConditionsContext.Provider>
  )
};