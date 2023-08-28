import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import Date from "./Date";

import "./Weather.css";

export default function WeatherData(props){
  return (
    <div className="row">
      <div className="col-6">
        <div className="container-fluid weather-data">
          <header>
            <div className="date-container">
              <span className="date">
                <Date date={props.data.Date} />
              </span>
              <div className="location">{props.data.city}</div>
            </div>
            <div className="weather-container">
              <Temperature celsius={props.data.temp} />
              <WeatherIcon code={props.data.icon} size={70} />
              <h3 className="weather-description">{props.data.description}</h3>
              <div className="temp-info">
                <ul>
                  <li>
                    Feels Like: {Math.round(props.data.feels_like)}{" "}
                    <span className="celsius">°C</span>
                  </li>
                  <li className="max-temp">
                    Max Temp: {Math.round(props.data.temp_max)}
                    <span className="celsius">°C</span>
                  </li>
                  <li className="min-temp">
                    Min Temp: {Math.round(props.data.temp_min)}
                    <span className="celsius">°C</span>
                  </li>
                </ul>
              </div>
            </div>
          </header>
        </div>
      </div>
      <div className="col-6">
        <div className="container-fluid weather-data-specific">
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
          <div className="forecast"></div>
          <div className="current-location-btn">
            <button>Current Location</button>
          </div>
        </div>
      </div>
    </div>
  );
}