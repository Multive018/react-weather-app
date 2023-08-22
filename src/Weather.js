import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from 'react-animated-weather';
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(){
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  
  
  function handleResponse(response){
    setWeatherData({
      temp : Math.round(response.data.main.temp),
      temp_max : Math.round(response.data.main.temp_max),
      temp_min : Math.round(response.data.main.temp_min),
      feels_like : Math.round(response.data.main.feels_like),
      wind : Math.round(response.data.wind.speed),
      humidity : response.data.main.humidity,
      pressure : response.data.main.pressure,
      description : response.data.weather[0].description,
      city : response.data.name,
      time: "3:06 PM",
      day : "Tuesday",
      month : "August",
      date : 22,
    })
    setLoaded(true);
  }

if (loaded){
  return (
    <div className="container-fluid body">
      <div className="row head">
        <div className="col-3">
          <div className="time">13:05</div>
        </div>
        <div className="col-9">
          <div className="search-form">
            <form>
              <input type="search" required />
              <input className="search-btn" type="submit" value="Search" />
            </form>
          </div>
        </div>
      </div>
      <div className="Weather container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="weather-data">
              <header>
                <div className="date-container">
                  <h2>{weatherData.day}</h2>
                  <span className="date">
                    {weatherData.month}, {weatherData.date} {weatherData.time}
                  </span>
                  <div className="location">{weatherData.city}</div>
                </div>
                <div className="weather-container">
                  <ReactAnimatedWeather
                    icon={"CLEAR_DAY"}
                    color={"goldenrod"}
                    size={64}
                    animate={true}
                  />
                  <h1 className="temp-main">
                    {weatherData.temp}
                    <span className="unit">°C</span>
                  </h1>
                  <h3 className="weather-description">
                    {weatherData.description}
                  </h3>
                  <ul>
                    <li>
                      Feels Like: {weatherData.feels_like}{" "}
                      <span className="celsius">°C</span>
                    </li>
                    <li>
                      Max Temp: {weatherData.temp_max}
                      <span className="celsius">°C</span>
                    </li>
                    <li>
                      Min Temp: {weatherData.temp_min}
                      <span className="celsius">°C</span>
                    </li>
                  </ul>
                </div>
              </header>
            </div>
          </div>
          <div className="col-6">
            <div className="weather-data-specific">
              <ul>
                <li>
                  <span className="title">PRESSURE</span>
                  <span className="value">{weatherData.pressure}hPa</span>
                </li>
                <li>
                  <span className="title">HUMIDITY</span>
                  <span className="value">{weatherData.humidity}%</span>
                </li>
                <li>
                  <span className="title">WIND SPEED</span>
                  <span className="value">{weatherData.wind}M/S</span>
                </li>
              </ul>
              <div className="forecast">
                <Forecast />
              </div>
              <div className="current-location-btn">
                <button>Current Location</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} else{
  const apiKey = "203fa770242fcd2b9555d832a88ea567";
  let city = "New York";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading Weather Data...";
}

}