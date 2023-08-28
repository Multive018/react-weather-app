import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import WeatherIcon from "./WeatherIcon";
import Forecast from "./Forecast";
import Date from "./Date";

import "./Weather.css";

export default function WeatherData(props){
  return (
    <div className="row">
      <div className="col-6">
        <div className="weather-data">
          <header>
            <div className="date-container">
              <span className="date">
                <Date date={props.data.Date} />
              </span>
              <div className="location">{props.data.city}</div>
            </div>
            <div className="weather-container">
              <h1 className="temp-main">
                {Math.round(props.data.temp)}
                <span className="unit">°C</span>
              </h1>
              <WeatherIcon code={props.data.icon} size={70} />
              <h3 className="weather-description">{props.data.description}</h3>
              <ul>
                <li>
                  Feels Like: {Math.round(props.data.feels_like)}{" "}
                  <span className="celsius">°C</span>
                </li>
                <li>
                  Max Temp: {Math.round(props.data.temp_max)}
                  <span className="celsius">°C</span>
                </li>
                <li>
                  Min Temp: {Math.round(props.data.temp_min)}
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
              <span className="value">{props.data.pressure}hPa</span>
            </li>
            <li>
              <span className="title">HUMIDITY</span>
              <span className="value">{props.data.humidity}%</span>
            </li>
            <li>
              <span className="title">WIND SPEED</span>
              <span className="value">{props.data.wind}M/S</span>
            </li>
          </ul>
          <div className="forecast">
            <Forecast coordinates={props.data.coordinates} />
          </div>
          <div className="current-location-btn">
            <button>Current Location</button>
          </div>
        </div>
      </div>
    </div>
  );
}