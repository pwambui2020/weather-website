import React, { useState } from "react";
import axios from "axios";
import "./index.css";

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=ad60cad3ba4fc7dac876d50671f313bc`;

  const searchLocation = (event) => {
    if (event.key = "Enter") {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data);
      })
    }
  }


  return (
    <>
      <div className="app">
        <div className="container">
          <div className="search">
            <input
              type="text"
              value={location}
              onChange={event => setLocation(event.target.value)}
              // onKeyUp={searchLocation => {console.log(searchLocation)} }
              onKeyUp={searchLocation}
              placeholder="Enter your location" />
          </div>

          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()} °F</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].description}</p> : null}
            </div>
          </div>

          {data.name != undefined &&
            <div className="bottom">
              <div className="feels">
                {data.main ? <p>{data.main.feels_like.toFixed()} °F</p> : null}
                <p>Feels like</p>
              </div>

              <div className="humidity">
                {data.main ? <p className="bold">{data.main.humidity} %</p> : null}
                <p>Humidity</p>
              </div>

              <div className="wind">
                {data.wind ? <p className="bold">{data.wind.speed.toFixed()} MPH</p> : null}
                <p>Winds</p>
              </div>
            </div>
          }

        </div>
      </div>
    </>
  );
}

export default App;
