import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function ForecastDay(props){
  function day(){
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-day">{day()}</div>
      <div className="forecast-temps">
        <span className="forecast-temp-max">Math.round({props.data.temp.max})°</span>
        <span className="forecast-temp-min">Math.round({props.data.temp.min})°</span>
      </div>
    </div>
  );
}