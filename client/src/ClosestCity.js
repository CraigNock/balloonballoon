


const getClosestCity = (pos, changeClosestCity) => {
  
  let currentPosition = [...pos];
  // console.log('position at fetch ', currentPosition);

  fetch('/api/nearest', {
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
      let closestCity = data.cityName;
      changeClosestCity(closestCity);
    });

};



export default getClosestCity;