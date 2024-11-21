import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailedWeather from './components/DetailedWeather';  

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/weather/${location}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <Router>
      <div className="app">
        <h1>Weather App</h1>

        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={fetchWeather}>Get Weather</button>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2>Weather Information</h2>
                {weatherData ? (
                  <WeatherDisplay data={weatherData} />
                ) : (
                  <p>No weather data available</p>
                )}
              </div>
            }
          />
          <Route
            path="/details"
            element={
              <DetailedWeather weather={weatherData} /> 
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
