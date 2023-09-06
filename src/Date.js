import React from "react";
import "./Weather.css";

export default function Date(props){
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = months[props.date.getMonth()];
  let hours = props.date.getHours();
  if (hours < 10){
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10){
    minutes = `0${minutes}`;
  }
  return (
    <div className="date">
      <h2> {day} </h2>
      <div className="date-data">
        <h5>{month}</h5>
        <div>
          <span>
            Last Updated: {hours}:{minutes}{" "}
          </span>
        </div>
      </div>
    </div>
  );
} 