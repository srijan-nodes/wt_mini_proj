import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../api/weatherAPI';  
import { fetchAirQuality } from '../api/fetchAirQuality';
import { fetchForecast } from '../api/fetchForecast';
import { fetchAstronomy } from '../api/fetchAstronomy';

const HomePage = () => {
  const [location, setLocation] = useState('Ranchi');
  const [weather, setWeather] = useState(null);
  const [hourly, setHourly] = useState(null);
  const [daily, setDaily] = useState(null);
  const [airQuality, setAirQuality] = useState(null);
  const [astronomy, setAstronomy] = useState(null);
  const [unit, setUnit] = useState('C'); 
  const [theme, setTheme] = useState('light'); 

  const fetchData = (location, unit) => {
    fetchWeather(location, unit)
      .then(data => {
        if (data) {
          setWeather(data);
        } else {
          setWeather(null);
        }
      })
      .catch(err => {
        console.error('Error fetching weather:', err);
        setWeather(null);
      });

    fetchForecast(location, unit)
      .then(data => {
        if (data?.forecast?.forecastday) {
          setHourly(data.forecast.forecastday[0]?.hour || []);
          setDaily(data.forecast.forecastday || []);
        } else {
          setHourly([]);
          setDaily([]);
        }
      })
      .catch(err => {
        console.error('Error fetching forecast:', err);
      });

    fetchAirQuality(location)
      .then(data => setAirQuality(data || null))
      .catch(err => console.error('Error fetching air quality:', err));

    fetchAstronomy(location)
      .then(data => setAstronomy(data?.astronomy || null))
      .catch(err => console.error('Error fetching astronomy:', err));
  };

  useEffect(() => {
    fetchData(location, unit);
  }, [location, unit]);

  const handleSearch = () => {
    if (!location.trim()) {
      alert('Please enter a location to search!');
      return;
    }
    fetchData(location, unit);
  };

  const toggleUnit = () => {
    setUnit(unit === 'C' ? 'F' : 'C');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`container ${theme}`}>
      <h1>Weather App</h1>

      
      <div>
        <input 
          type="text" 
          placeholder="Enter location" 
          value={location} 
          onChange={e => setLocation(e.target.value)} 
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="settings">
        <h3>Settings</h3>
        <button onClick={toggleUnit}>
          Switch to {unit === 'C' ? 'Fahrenheit' : 'Celsius'}
        </button>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>

      {weather ? (
        <div className="current-weather">
          <h2>{weather?.location?.name || 'Unknown Location'}</h2>
          <p>Temperature: {unit === 'C' ? weather?.current?.temp_c : weather?.current?.temp_f} °{unit}</p>
          <p>Condition: {weather?.current?.condition?.text || 'No Data'}</p>
          <p>Wind Speed: {weather?.current?.wind_kph || 0} km/h</p>
          <p>Humidity: {weather?.current?.humidity || 0}%</p>
          <p>Pressure: {weather?.current?.pressure_mb || 'N/A'} mb</p>
          <p>Visibility: {weather?.current?.vis_km || 0} km</p>
        </div>
      ) : (
        <p>No weather data available. Please search for a valid location.</p>
      )}
    </div>
  );
};

export default HomePage;
