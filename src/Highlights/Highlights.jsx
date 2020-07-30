import React from "react";
import "./Highlights.css";

export default function Highlights({ todayWeather }) {
  const weather = todayWeather.consolidated_weather[0];

  return (
    <div className="today-highlight">
      <div className="wind">
        <div>Wind Status</div>
        <div className="hightlight-value">
          {weather.wind_speed.toFixed()}
          <span className="highlight-unit">mph</span>
        </div>
        <div className="compass">
          <span
            className="material-icons"
            style={{
              transform: `rotate(${180 + weather.wind_direction}deg)`,
            }}>
            navigation
          </span>
          {weather.wind_direction_compass}
        </div>
      </div>
      <div className="humidity">
        <div>Humidity</div>
        <div className="hightlight-value">
          {weather.humidity.toFixed()}
          <span className="highlight-unit">%</span>
        </div>
        <div className="progress-bar-scale">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill"
            style={{
              width: `${weather.humidity.toFixed()}%`,
            }}></div>
        </div>
      </div>
      <div className="visibility">
        <div>Visibility</div>
        <div className="hightlight-value">
          {weather.visibility.toFixed(1)}
          <span className="highlight-unit">miles</span>
        </div>
      </div>
      <div className="air-pressure">
        <div>Air Pressure</div>
        <div className="hightlight-value">
          {weather.air_pressure.toFixed()}
          <span className="highlight-unit">mb</span>
        </div>
      </div>
    </div>
  );
}
