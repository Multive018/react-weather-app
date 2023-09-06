import React, {useState} from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

import "./Weather.css";

export default function Forecast(props){
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response){
    setForecastData(response.data.daily);
    setLoaded(true);
  }
  
  if (loaded) {
    return (
      <div className="Forecast">
        <ul className="week-days">
          <li className="active">
            <ForecastDay data={forecastData[0]}/>
          </li>
        </ul>
      </div>
    );
  }else{
    let apiKey = "34ae1065362d42545661451bda2b8a1f";
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);

    return "Loading Forecast...";
  }
}