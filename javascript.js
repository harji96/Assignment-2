
const cityInput = document.getElementById("cityName")
function validateInput(){
    const regex = /^[a-zA-z]+$/
    if (!regex.test(cityInput.value)){
      alert("Invalid Name!.Please Re-enter")
      cityInput.value = "";
    }
  else {
    fetchData(cityInput.value)
  }
  }

function fetchData(city){
  const api = "cec6c0b9ca14d4da50f9928c53291ac2"
  const weather =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`
  
  fetch(weather)
    .then(response => {
          if (!response.ok){
          throw new Error("Invalid Value!Data Not Found.")
          }
          else {
            return response.json()
          }
          })  
     .then(data => {
    weatherDisplay(data)})
    .catch(error => {
            alert('Error fetching weather data: ' + error.message)})
 
 }

function weatherDisplay(data){
  const currentWeather = document.getElementById("current")
  currentWeather.innerHTML = `
  <h2>Current Weather Forecast</h2>
  <ul>
  <li>City Name : ${cityInput.value}</li>
  <li>Weather Condition : ${data.weather[0].main}</li>
  <li>Temperature : ${data.main.temp}C</li>
  <li>Feels Like : ${data.main.feels_like}C</li>
  <li>Minimum Temperature : ${data.main.temp_min}C</li>
  <li>Maximum Temperature : ${data.main.temp_max}C</li>
  <li>Humidity : ${data.main.humidity}</li>
  <li>Wind speed : ${data.wind.speed}</li>
  <li>Weather Icon : <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"></li>
  </ul>
  
  `
}