import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import Date from "./Date";
import Forecast from "./Forecast";

import "./Weather.css";

export default function WeatherData(props){
  return (
    <div className="container-fluid">
      <div className="weather-data">
        <header>
          <div className="date-container">
            <span className="date ps-5">
              <Date date={props.data.Date} />
            </span>
            <div className="location">
              {props.data.city}, {props.data.country}
            </div>
          </div>
          <div className="weather-container">
            <Temperature celsius={props.data.temp} />
            <WeatherIcon code={props.data.icon} size={70} />
            <h3 className="weather-description">{props.data.description}</h3>
            <div className="temp-info mt-4 mb-3">
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
      <div className="weather-info mt-5">
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
        </div>
        <div className="mt-5">
          <Forecast coords={props.data.coordinates} />
        </div>
      </div>
    </div>
  );
}