/**
 * @license MIT
 * @copyright David Miguel 2023 All rights reserved
 * @author David Miguel <davidmturiel99@gmail.com>
 */

"use strict";

const api_key = "9baac9e3f2c5eaaa4b5d1968d4746e7c";

/**
 * Fetch data from server
 *@param {string} URL API URL
 *@param {function} callback callback
 */

export const fetchData = function (URL, callback) {
  fetch(`${URL}&appid=${api_key}`)
    .then((res) => res.json())
    .then((data) => callback(data));
};

export const url = {
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
  },
  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
  },
  airPollution(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
  },
  reverseGeo(lat, lon) {
    return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
  },
  /**
   *
   * @param {string} query Search query e.g. : "London", "New York",
   * @returns
   */
  geo(query) {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
  },
};
