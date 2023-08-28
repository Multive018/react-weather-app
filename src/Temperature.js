import React, {useState} from "react";
import "./Weather.css";

export default function Temperature(props){
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event){
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius"){
  return (
    <h1 className="temp-main">
      {Math.round(props.celsius)}
      <span className="unit">
        °C | <a href="/" onClick={convertToFahrenheit}> °F </a>
      </span>
    </h1>
  );
  }else{
    let fahrenheit = (props.celsius * 9/5) + 32; 
    return (
      <h1 className="temp-main">
        {Math.round(fahrenheit)}
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            {" "}
            °C |
          </a>{" "}
          °F
        </span>
      </h1>
    );
  }

}