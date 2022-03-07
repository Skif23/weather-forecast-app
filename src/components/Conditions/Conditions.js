import React from "react";
import "./Conditions.css";
import moment from "moment";
const Conditions = (props) => {
  let code = props.responseObj.weather[0].icon;
  let icon = `http://openweathermap.org/img/w/${code}.png`;
  let cityName = props.responseObj.name;
  let country = props.responseObj.sys.country;
  let temperature = props.responseObj.main.temp;
  let weatherDescription = props.responseObj.weather[0].description;
  let currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");

  return (
    <div className="Wrapper">
      {props.error && (
        <strong className="Small">Please enter a valid city.</strong>
      )}
      {props.loading && <div className="Loader" />}
      {props.responseObj.cod === 200 ? (
        <div className="conditionsContainer">
          <div className="topBanner">
            <strong className="cityName">
              {cityName}, {country}
            </strong>
            <br></br>
            <strong className="currentTime">{currentTime}</strong>
          </div>
          <p className="temperature">
            {Math.round(temperature)}
            {props.radioIsSelected === "Celsius" ? "°c" : "°F"}
          </p>
          <div className="iconContainer">
            <img className="icon" src={icon} alt={props.responseObj.main} />
            <p className="weatherDescription">
              {weatherDescription.charAt(0).toUpperCase() +
                weatherDescription.slice(1)}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Conditions;
