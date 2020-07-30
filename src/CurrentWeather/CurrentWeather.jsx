import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather({
  todayWeather,
  tempFormat,
  toFahrenheit,
  baseUrl,
  onSearchPlaces,
  getLocation,
  showSearch,
  locationError,
}) {
  const weather = todayWeather.consolidated_weather[0];

  const dateFormatter = () => {
    console.log("Weather", new Date(weather.applicable_date));
    return new Intl.DateTimeFormat("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
    }).format(new Date(weather.applicable_date));
  };

  return (
    <div className={`current-temp ${showSearch ? "close" : "open"}`}>
      <div className="change-location">
        <button className="location-btn" onClick={onSearchPlaces}>
          Search for places
        </button>
        <span className="material-icons current-location" onClick={getLocation}>
          my_location
        </span>
      </div>
      {locationError ? (
        <div className="location-error">{locationError}</div>
      ) : (
        <>
          <img
            alt={weather.id}
            src={`${baseUrl}/${weather.weather_state_abbr}.svg`}
            class="current-weather-img"
          />
          <div className="today-temp">
            {tempFormat === "c" ? (
              <>
                {weather.max_temp.toFixed()}
                <span style={{ fontSize: "3rem" }}>&#176;C</span>
              </>
            ) : (
              <>
                {toFahrenheit(weather.max_temp.toFixed())}
                <span style={{ fontSize: "3rem" }}>&#176;F</span>
              </>
            )}
          </div>
          <div className="today-weather">{weather.weather_state_name}</div>
          <div className="today-date">
            Today<span style={{ padding: "0 15px" }}>-</span>
            {dateFormatter()}
          </div>
          <div className="chosen-location">
            <span className="material-icons">place</span>
            {todayWeather.title}
          </div>
        </>
      )}
    </div>
  );
}
