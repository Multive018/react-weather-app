import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import "./Weather.css";

export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ loaded: false});
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response){
    setWeatherData({
      loaded: true,
      coordinates: response.data.coord,
      temp : response.data.main.temp,
      temp_max: response.data.main.temp_max,
      temp_min : response.data.main.temp_min,
      feels_like : response.data.main.feels_like,
      Date : new Date(response.data.dt * 1000),
      wind : response.data.wind.speed,
      humidity : response.data.main.humidity,
      pressure : response.data.main.pressure,
      description : response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city : response.data.name,
    });
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  
  function changeCity(event){
    setCity(event.target.value);
  }

  function search(){
    const apiKey = "57b2c40fdae71a6ba41d72685e3226e2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }


if (weatherData.loaded){
  return (
    <div className="container-fluid body">
      <div className="row head">
        <div className="col">
          <div className="search-form">
            <form action="" onSubmit={handleSubmit}>
              <input type="search" onChange={changeCity} required />
              <i class="fa fa-search"></i>
            </form>
          </div>
        </div>
      </div>
      <div className="Weather container-fluid">
        <WeatherData data={weatherData}/>
      </div>
    </div>
  );
} else{
  search();
  return "Loading Weather Data...";
}

}