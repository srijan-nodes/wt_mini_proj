import React, { useEffect, useState } from 'react';

const Forecast = ({ location }) => {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const fetchForecast = async () => {
      const API_KEY = '6023cf15ac2840d6afd163612241711';
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=15`
      );
      const data = await response.json();
      setForecast(data.forecast.forecastday);
    };

    fetchForecast();
  }, [location]);

  return (
    <div className="container">
      <h1>15-Day Forecast</h1>
      {forecast ? (
        forecast.map((day, index) => (
          <div key={index} className="forecast-card">
            <h2>{day.date}</h2>
            <p>Max Temp: {day.day.maxtemp_c} °C</p>
            <p>Min Temp: {day.day.mintemp_c} °C</p>
            <p>Condition: {day.day.condition.text}</p>
          </div>
        ))
      ) : (
        <p>Loading forecast...</p>
      )}
    </div>
  );
};

export default Forecast;
