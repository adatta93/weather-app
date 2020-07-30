import axios from "axios";
import React, { useState } from "react";
import BounceLoader from "../BounceLoader";
import "./SearchPage.css";

export default function SearchPage({
  fetchWeather,
  showSearch,
  setShowSearch,
  query,
  setQuery,
  searchResult,
  searchLocation,
  searchError,
  loading,
}) {
  return (
    <div className={`search-page ${showSearch ? "open" : "close"}`}>
      <div className="back-section">
        <span
          className="material-icons back-btn"
          onClick={() => setShowSearch(false)}>
          close
        </span>
      </div>
      <div className="search-section">
        <input
          type="text"
          placeholder="Search location"
          className="search-box"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-btn" onClick={searchLocation}>
          Search
        </button>
      </div>
      {loading ? (
        <BounceLoader />
      ) : searchError ? (
        <div className="location-error">{searchError}</div>
      ) : (
        <div className="search-result">
          <div className="search-list">
            {searchResult &&
              searchResult.map((search) => (
                <div
                  className="search-list-item"
                  key={search.woeid}
                  onClick={() => fetchWeather(search.woeid)}>
                  <span>{search.title}</span>
                  <span className="material-icons">keyboard_arrow_right</span>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
