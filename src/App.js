import React from "react";
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="container-fluid App">
      <Weather defaultCity="Mombasa" />
      <footer>
        This project was coded by <a href="/">Sharon Mbeneka</a> and is{" "}
        <a
          href="https://github.com/Multive018/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://hilarious-faloodeh-cf953c.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
