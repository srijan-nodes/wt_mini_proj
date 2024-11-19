import React from 'react';

const DetailedWeather = ({ weather }) => {
  if (!weather) {
    return <div className="container">No weather data available</div>;
  }

  return (
    <div className="container">
      <h1>Detailed Weather</h1>
      <p><strong>Temperature:</strong> {weather.current.temp_c} °C</p>
      <p><strong>Humidity:</strong> {weather.current.humidity} %</p>
      <p><strong>Wind Speed:</strong> {weather.current.wind_kph} kph</p>
      <p><strong>UV Index:</strong> {weather.current.uv}</p>
      <p><strong>Condition:</strong> {weather.current.condition.text}</p>
    </div>
  );
};

export default DetailedWeather;
