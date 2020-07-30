import React, { useEffect, useState } from "react";
import axios from "axios";
import Forecast from "./Forecast/Forecast";
import SearchPage from "./SearchPage/SearchPage";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import Highlights from "./Highlights/Highlights";
import Header from "./Header/Header";
import BounceLoader from "./BounceLoader";

export default function HomePage({ isDark, toggleDark }) {
  const [todayWeather, setTodayWeather] = useState({
    consolidated_weather: [
      {
        id: 6642255035105280,
        weather_state_name: "Heavy Rain",
        weather_state_abbr: "hr",
        wind_direction_compass: "SSW",
        created: "2020-07-22T19:00:11.969947Z",
        applicable_date: "2020-07-23",
        min_temp: 21.64,
        max_temp: 27.66,
        the_temp: 28.17,
        wind_speed: 2.8225931120151646,
        wind_direction: 275.02479300353485,
        air_pressure: 1007.5,
        humidity: 71,
        visibility: 10.827703710331662,
        predictability: 77,
      },
      {
        id: 5503460831133696,
        weather_state_name: "Heavy Rain",
        weather_state_abbr: "hr",
        wind_direction_compass: "S",
        created: "2020-07-22T19:00:14.280701Z",
        applicable_date: "2020-07-24",
        min_temp: 20.28,
        max_temp: 27.225,
        the_temp: 27.37,
        wind_speed: 4.422349187215992,
        wind_direction: 190.11736490002653,
        air_pressure: 1008.5,
        humidity: 74,
        visibility: 10.741333114610674,
        predictability: 77,
      },
      {
        id: 5379313526374400,
        weather_state_name: "Heavy Rain",
        weather_state_abbr: "hr",
        wind_direction_compass: "WSW",
        created: "2020-07-22T19:00:17.364258Z",
        applicable_date: "2020-07-25",
        min_temp: 19.72,
        max_temp: 27.14,
        the_temp: 26.705,
        wind_speed: 6.101861738572073,
        wind_direction: 241.01241222105557,
        air_pressure: 1010.0,
        humidity: 73,
        visibility: 10.135496202179272,
        predictability: 77,
      },
      {
        id: 5380335728590848,
        weather_state_name: "Light Rain",
        weather_state_abbr: "lr",
        wind_direction_compass: "W",
        created: "2020-07-22T19:00:20.883036Z",
        applicable_date: "2020-07-26",
        min_temp: 19.155,
        max_temp: 28.189999999999998,
        the_temp: 28.125,
        wind_speed: 5.343479980007423,
        wind_direction: 261.66024690574216,
        air_pressure: 1010.5,
        humidity: 71,
        visibility: 10.879588204883479,
        predictability: 75,
      },
      {
        id: 5010490256261120,
        weather_state_name: "Showers",
        weather_state_abbr: "s",
        wind_direction_compass: "W",
        created: "2020-07-22T19:00:23.487909Z",
        applicable_date: "2020-07-27",
        min_temp: 19.869999999999997,
        max_temp: 29.495,
        the_temp: 27.39,
        wind_speed: 6.618573132903841,
        wind_direction: 270.5,
        air_pressure: 1010.0,
        humidity: 69,
        visibility: 9.999726596675416,
        predictability: 73,
      },
      {
        id: 5911162078101504,
        weather_state_name: "Showers",
        weather_state_abbr: "s",
        wind_direction_compass: "WNW",
        created: "2020-07-22T19:00:26.224740Z",
        applicable_date: "2020-07-28",
        min_temp: 20.345,
        max_temp: 29.384999999999998,
        the_temp: 27.33,
        wind_speed: 6.602986359659588,
        wind_direction: 287.5,
        air_pressure: 1008.0,
        humidity: 70,
        visibility: 9.999726596675416,
        predictability: 73,
      },
    ],
    time: "2020-07-23T00:32:18.728032+05:30",
    sun_rise: "2020-07-23T06:03:09.272804+05:30",
    sun_set: "2020-07-23T18:48:48.468264+05:30",
    timezone_name: "LMT",
    parent: {
      title: "India",
      location_type: "Country",
      woeid: 23424848,
      latt_long: "21.786600,82.794762",
    },
    sources: [
      {
        title: "BBC",
        slug: "bbc",
        url: "http://www.bbc.co.uk/weather/",
        crawl_rate: 360,
      },
      {
        title: "Forecast.io",
        slug: "forecast-io",
        url: "http://forecast.io/",
        crawl_rate: 480,
      },
      {
        title: "Met Office",
        slug: "met-office",
        url: "http://www.metoffice.gov.uk/",
        crawl_rate: 180,
      },
      {
        title: "OpenWeatherMap",
        slug: "openweathermap",
        url: "http://openweathermap.org/",
        crawl_rate: 360,
      },
      {
        title: "Weather Underground",
        slug: "wunderground",
        url: "https://www.wunderground.com/?apiref=fc30dc3cd224e19b",
        crawl_rate: 720,
      },
      {
        title: "World Weather Online",
        slug: "world-weather-online",
        url: "http://www.worldweatheronline.com/",
        crawl_rate: 360,
      },
    ],
    title: "Bangalore",
    location_type: "City",
    woeid: 2295420,
    latt_long: "12.955800,77.620979",
    timezone: "Asia/Kolkata",
  });

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2295420/"
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       setTodayWeather(res.data);
  //     });
  // }, []);

  const baseUrl = "https://www.metaweather.com/static/img/weather";

  const [showSearch, setShowSearch] = useState(false);
  const onSearchPlaces = () => {
    setShowSearch(true);
  };

  const [weatherLoading, setWeatherLoading] = useState(false);

  const fetchWeather = (woeid) => {
    setShowSearch(false);
    setWeatherLoading(true);
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/" +
          woeid
      )
      .then(
        (res) => {
          console.log(res.data);
          setTodayWeather(res.data);
          setLocationError("");
          setWeatherLoading(false);
        },
        (err) => {
          setLocationError("Error fetching weather data");
          setWeatherLoading(false);
        }
      );
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          axios
            .get(
              `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${pos.coords.latitude},${pos.coords.longitude}`
            )
            .then(
              (res) => {
                fetchWeather(res.data[0].woeid);
                setLocationError("");
              },
              (err) => {
                setLocationError("Error fetching weather data");
              }
            );
        },
        (err) => {
          setLocationError("Error fetching location");
        }
      );
    }
  };

  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [searchError, setSearchError] = useState("");
  const [loading, setLoading] = useState(false);
  const [locationError, setLocationError] = useState("");
  const [tempFormat, setTempFormat] = useState("c");

  const searchLocation = () => {
    setLoading(true);
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=" +
          query
      )
      .then(
        (res) => {
          if (res.data && res.data.length > 0) {
            setSearchResult(res.data);
            setLoading(false);
            setSearchError("");
          } else {
            setLoading(false);
            setSearchError("No Result found");
          }
        },
        (err) => {
          setSearchError("Error fetching location");
          setLoading(false);
        }
      );
  };

  const toFahrenheit = (num) => {
    return ((num * 9) / 5 + 32).toFixed();
  };

  return (
    <>
      {todayWeather && todayWeather.consolidated_weather && (
        <div className="page-container">
          <div className="left-panel">
            <SearchPage
              fetchWeather={fetchWeather}
              showSearch={showSearch}
              setShowSearch={setShowSearch}
              query={query}
              setQuery={setQuery}
              searchResult={searchResult}
              searchLocation={searchLocation}
              searchError={searchError}
              loading={loading}
            />
            {weatherLoading ? (
              <BounceLoader />
            ) : (
              <CurrentWeather
                todayWeather={todayWeather}
                tempFormat={tempFormat}
                toFahrenheit={toFahrenheit}
                baseUrl={baseUrl}
                onSearchPlaces={onSearchPlaces}
                getLocation={getLocation}
                showSearch={showSearch}
                locationError={locationError}
              />
            )}
          </div>
          <div className="right-panel">
            <Header
              isDark={isDark}
              toggleDark={toggleDark}
              tempFormat={tempFormat}
              setTempFormat={setTempFormat}
            />
            {locationError ? (
              <div className="location-error">{locationError}</div>
            ) : (
              <>
                <div className="forcase-list">
                  {todayWeather.consolidated_weather.map((weather, i) =>
                    i > 0 ? (
                      <Forecast
                        key={i}
                        weather={weather}
                        baseUrl={baseUrl}
                        tempFormat={tempFormat}
                        toFahrenheit={toFahrenheit}
                      />
                    ) : null
                  )}
                </div>
                <h3>Today's Highlights</h3>
                <Highlights todayWeather={todayWeather} />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
