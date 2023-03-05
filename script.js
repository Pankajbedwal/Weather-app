const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2a78fb8a66mshabebf9ec36daa81p19233ejsn3694f5b7199c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
 const weather=(city)=>{
	cityName.textContent=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
	.then(response => response.json())
	.then((response) => {
		// console.log(response)
  cloud_pct.innerHTML= response.cloud_pct
  temp.innerHTML=response.temp
  temp2.innerHTML=response.temp
  feels_like.innerHTML =response.feels_like
  humidity.innerHTML= response.humidity
  humidity2.innerHTML= response.humidity
  min_temp.innerHTML= response.min_temp
  max_temp.innerHTML= response.max_temp
  wind_speed.innerHTML= response.wind_speed
  wind_speed2.innerHTML= response.wind_speed
  wind_degrees.innerHTML= response.wind_degrees
  sunrise.innerHTML =response.sunrise
  sunset.innerHTML=response.sunset
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
	weather(city.value)
})
weather("uttarakhand")

const uttarakhand=(city)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
	.then(response => response.json())
	.then((response) => {
		// console.log(response)
  tempuk.innerHTML=response.temp
  humidityuk.innerHTML= response.humidity
  wind_speeduk.innerHTML= response.wind_speed
	})
	.catch(err => console.error(err));
}
uttarakhand("uttarakhand")

const delhi=(city)=>{
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
    .then(response => response.json())
    .then((response) => {
      // console.log(response)
    tempdelhi.innerHTML=response.temp
    humiditydelhi.innerHTML= response.humidity
    wind_speeddelhi.innerHTML= response.wind_speed
    })
    .catch(err => console.error(err));
  }
  delhi("delhi")

  const jaipur=(city)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
      .then(response => response.json())
      .then((response) => {
        // console.log(response)
      tempj.innerHTML=response.temp
      humidityj.innerHTML= response.humidity
      wind_speedj.innerHTML= response.wind_speed
      })
      .catch(err => console.error(err));
    }
    jaipur("jaipur")

    const bihar=(city)=>{
      fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
        .then(response => response.json())
        .then((response) => {
          // console.log(response)
        tempb.innerHTML=response.temp
        humidityb.innerHTML= response.humidity
        wind_speedb.innerHTML= response.wind_speed
        })
        .catch(err => console.error(err));
      }
      bihar("bihar")

      const shimla=(city)=>{
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
          .then(response => response.json())
          .then((response) => {
            // console.log(response)
          temps.innerHTML=response.temp
          humiditys.innerHTML= response.humidity
          wind_speeds.innerHTML= response.wind_speed
          })
          .catch(err => console.error(err));
        }
        shimla("shimla")
