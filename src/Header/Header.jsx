import React from "react";
import "./Header.css";

export default function Header({
  isDark,
  toggleDark,
  tempFormat,
  setTempFormat,
}) {
  return (
    <div className="header">
      <div className="dark-mode">
        <img
          src="https://cdn0.iconfinder.com/data/icons/multimedia-solid-30px/30/moon_dark_mode_night-128.png"
          title={`${isDark ? "Show Light Mode" : "Show Dark Mode"}`}
          alt="toggle mode"
          onClick={() => toggleDark(!isDark)}
          height="30"
          width="30"
          style={
            isDark
              ? { filter: "invert(1) contrast(1.5)" }
              : { filter: "invert(0) contrast(1.5)" }
          }
        />
      </div>
      <div className="change-temp-format">
        <div
          className={`temp-format ${tempFormat === "c" && "selected"}`}
          onClick={() => setTempFormat("c")}>
          &#176;C
        </div>
        <div
          className={`temp-format ${tempFormat === "f" && "selected"}`}
          onClick={() => setTempFormat("f")}>
          &#176;F
        </div>
      </div>
    </div>
  );
}
