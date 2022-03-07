import React, { useState } from "react";
import Conditions from "../Conditions/Conditions";
import "./Forecast.css";

const Forecast = () => {
  let [responseObj, setResponseObj] = useState({});
  let [city, setCity] = useState("");
  let [unit, setUnit] = useState("metric");
  let [radioIsSelected, setRadioIdSelected] = useState("Celsius");
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);
  let [isVisible, setIsVisible] = useState(false);

  function setRadio(e, radioId) {
    setUnit(e.target.value);
    setRadioIdSelected(radioId);
  }

  function getForecast(e) {
    e.preventDefault();
    if (city.length === 0) {
      return setError(true);
    }
    
    setIsVisible(false);
    setError(false);
    setResponseObj({});
    setLoading(true);

    const uriEncodedCity = encodeURIComponent(city);
    fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key":
            "8d5593579fmsh6ef0f51dfe84f91p1f6592jsn1d1005ebe902",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.cod !== 200) {
          throw new Error();
        }
        setResponseObj(response);
        setIsVisible(true);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        console.log(err.message);
      });
  }

  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <form onSubmit={getForecast}>
        <div className="cityInput">
          <input
            className="textInput"
            type="text"
            placeholder="Enter City"
            maxLength="50"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <label className="radio">
          <input
            id="Celsius"
            type="radio"
            name="units"
            checked={unit === "metric"}
            value="metric"
            onChange={(e) => setRadio(e, "Celsius")}
          />
          Celcius
        </label>
        <label className="radio">
          <input
            id="Fahrenheit"
            type="radio"
            name="units"
            checked={unit === "imperial"}
            value="imperial"
            onChange={(e) => setRadio(e, "Fahrenheit")}
          />
          Fahrenheit
        </label>
        
        <button className="button" type="submit">
          Get Forecast
        </button>
      </form>
      {isVisible && <Conditions responseObj={responseObj} error={error} loading={loading} radioIsSelected={radioIsSelected} />}
    </div>
  );
};

export default Forecast;
