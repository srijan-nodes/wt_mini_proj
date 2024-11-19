import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../api/weatherAPI';  // Assuming fetchWeather is defined in your api module
import { fetchAirQuality } from '../api/fetchAirQuality';
import { fetchForecast } from '../api/fetchForecast';
import { fetchAstronomy } from '../api/fetchAstronomy';

const HomePage = () => {
  const [location, setLocation] = useState('New York');
  const [weather, setWeather] = useState(null);
  const [hourly, setHourly] = useState(null);
  const [daily, setDaily] = useState(null);
  const [airQuality, setAirQuality] = useState(null);
  const [astronomy, setAstronomy] = useState(null);
  const [unit, setUnit] = useState('C'); // 'C' for Celsius, 'F' for Fahrenheit
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  const fetchData = (location, unit) => {
    // Fetching data for weather, forecast, air quality, and astronomy
    fetchWeather(location, unit).then(data => {
      if (data) {
        setWeather(data);
      }
    });
    fetchForecast(location, unit).then(data => {
      if (data && data.forecast && data.forecast.forecastday) {
        setHourly(data.forecast.forecastday[0].hour);
        setDaily(data.forecast.forecastday);
      }
    });
    fetchAirQuality(location).then(data => {
      if (data) {
        setAirQuality(data);
      }
    });
    fetchAstronomy(location).then(data => {
      if (data && data.astronomy) {
        setAstronomy(data);
      }
    });
  };

  useEffect(() => {
    fetchData(location, unit); // Re-fetch data whenever location or unit changes
  }, [location, unit]); // Unit change triggers a data re-fetch

  const handleSearch = () => {
    fetchData(location, unit); // Re-fetch data when a new location is searched
  };

  const toggleUnit = () => {
    setUnit(unit === 'C' ? 'F' : 'C'); // Toggle between Celsius and Fahrenheit
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light'); // Toggle between light and dark theme
  };

  return (
    <div className={`container ${theme}`}>
      <h1>Weather App</h1>

      {/* Search Bar */}
      <div>
        <input 
          type="text" 
          placeholder="Enter location" 
          value={location} 
          onChange={e => setLocation(e.target.value)} 
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Settings Section */}
      <div className="settings">
        <h3>Settings</h3>
        <button onClick={toggleUnit}>
          Switch to {unit === 'C' ? 'Fahrenheit' : 'Celsius'}
        </button>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>

      {/* Current Weather */}
      {weather && (
        <div className="current-weather">
          <h2>{weather.location.name}</h2>
          <p>Temperature: {unit === 'C' ? weather.current.temp_c : weather.current.temp_f} °{unit}</p>
          <p>Condition: {weather.current.condition.text}</p>
          <p>Wind Speed: {weather.current.wind_kph} km/h</p>
          <p>Humidity: {weather.current.humidity}%</p>
          <p>Pressure: {weather.current.pressure_mb} mb</p>
          <p>Visibility: {weather.current.vis_km} km</p>
        </div>
      )}

      {/* Hourly Forecast */}
      {hourly && (
        <div className="hourly-forecast">
          <h3>Hourly Forecast</h3>
          {hourly.map((hour, index) => (
            <div key={index}>
              <p>{hour.time} - Temp: {unit === 'C' ? hour.temp_c : hour.temp_f} °{unit}</p>
              <p>Condition: {hour.condition.text}</p>
              <p>Wind Speed: {hour.wind_kph} km/h</p>
            </div>
          ))}
        </div>
      )}

      {/* Daily Forecast */}
      {daily && (
        <div className="daily-forecast">
          <h3>Daily Forecast</h3>
          {daily.map((day, index) => (
            <div key={index}>
              <p>{day.date} - Min Temp: {unit === 'C' ? day.mintemp_c : day.mintemp_f} °{unit} | Max Temp: {unit === 'C' ? day.maxtemp_c : day.maxtemp_f} °{unit}</p>
              <p>Condition: {day.condition.text}</p>
            </div>
          ))}
        </div>
      )}

      {/* Air Quality */}
      {airQuality && (
        <div className="air-quality">
          <h3>Air Quality</h3>
          <p>PM2.5: {airQuality.data.current.air_quality.pm25}</p>
          <p>PM10: {airQuality.data.current.air_quality.pm10}</p>
          <p>NO2: {airQuality.data.current.air_quality.no2}</p>
          <p>AQI: {airQuality.data.current.air_quality.aqi}</p>
        </div>
      )}

      {/* Astronomy */}
      {astronomy && (
        <div className="astronomy">
          <h3>Astronomy Data</h3>
          <p>Sunrise: {astronomy.astronomy.sunrise}</p>
          <p>Sunset: {astronomy.astronomy.sunset}</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
