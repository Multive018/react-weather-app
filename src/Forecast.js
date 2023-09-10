import React, {useState, useEffect} from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

import "./Weather.css";

export default function Forecast(props){
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  //onload(after coords change), set var setload to false ("refreshes" with new coords then updates data) 
  useEffect (()=> {
    setLoaded(false);
  }, [props.coords]
  );

  function handleResponse(response){
    setForecastData(response.data.daily);
    setLoaded(true);
  }
  
  if (loaded) {
    return (
      <div className="Forecast">
        <div className="week-days row">
          {forecastData.map(function(dailyForecast, index){
            if(index < 5){
              return(
              <div className="col days">
                <ForecastDay data={dailyForecast} />
              </div>
              );
            } else{
              return null;
            }
          })}
        </div>
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