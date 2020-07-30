import React from "react";
import "./Forecast.css";

export default function Forecast({
  weather,
  baseUrl,
  tempFormat,
  toFahrenheit,
}) {
  const formatDate = (dateString) => {
    if (new Date(dateString).getDate() - new Date().getDate() === 1) {
      return "Tomorrow";
    }
    return new Intl.DateTimeFormat("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
    }).format(new Date(dateString));
  };

  return (
    <div className="forecast-item">
      <div className="forecast-date">{formatDate(weather.applicable_date)}</div>
      <img
        alt={weather.id}
        src={`${baseUrl}/${weather.weather_state_abbr}.svg`}
        style={{ width: "50px" }}
      />
      <div className="forecast-temp">
        <div>
          {tempFormat === "c" ? (
            <>
              {weather.max_temp.toFixed()}
              <span>&#176;C</span>
            </>
          ) : (
            <>
              {toFahrenheit(weather.max_temp.toFixed())}
              <span>&#176;F</span>
            </>
          )}
        </div>
        <div>
          {tempFormat === "c"
            ? weather.min_temp.toFixed()
            : toFahrenheit(weather.min_temp.toFixed())}
          <span>&#176;C</span>
        </div>
      </div>
    </div>
  );
}
