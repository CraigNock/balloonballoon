import React from 'react';


export const PositionContext = React.createContext(null);


const initialState = {
  lat: 45.50,
  long: -73.60,
  elevation: 850,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE-POSITION':
      return {
        ...state,
        lat: action.newlat,
        long: action.newLong,
      };
    case 'CHANGE-ELEVATION':
      return {
        ...state,
        elevation: action.elevation,
      };
  
    default:
      return;
  }
};



export const PositionProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const changePosition = (newlat, newLong) => {
    dispatch({
      type: 'CHANGE-POSITION',
      newlat: newlat,
      newLong: newLong
    })
    // console.log(newlat, newLong)
  };

  const changeElevation = (newElevation) => {
    dispatch({
      type: 'CHANGE-ELEVATION',
      elevation: newElevation,
    })
  };


  return (
    <PositionContext.Provider
      value={{
        state,
        actions:{
          changePosition,
          changeElevation,
        },
      }}
    >
      {children}
    </PositionContext.Provider>
  )
};

