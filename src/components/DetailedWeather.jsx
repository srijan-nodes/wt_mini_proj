import React from 'react';

const DetailedWeather = () => {
  const weather = {
    current: {
      temp_c: 25,        
      humidity: 60,      
      wind_kph: 15,      
      uv: 5,              
      condition: {
        text: 'Partly cloudy'  
      }
    }
  };

  return (
    <div className="container">
      <h1>Detailed Weather</h1>
      
      <p><strong>Temperature:</strong> {weather.current.temp_c} °C</p>
      <p>
        Temperature refers to how hot or cold the air is. It is typically measured in degrees Celsius or Fahrenheit.
      </p>
      
      <p><strong>Humidity:</strong> {weather.current.humidity} %</p>
      <p>
        Humidity is the amount of water vapor in the air. Higher humidity makes the air feel warmer, while lower humidity makes it feel cooler.
      </p>
      
      <p><strong>Wind Speed:</strong> {weather.current.wind_kph} kph</p>
      <p>
        Wind speed refers to the rate at which the air is moving. It is measured in kilometers per hour (kph) or miles per hour (mph).
      </p>
      
      <p><strong>UV Index:</strong> {weather.current.uv}</p>
      <p>
        The UV Index measures the strength of ultraviolet (UV) radiation from the sun. A higher UV Index means a higher risk of skin damage.
      </p>
      
      <p><strong>Condition:</strong> {weather.current.condition.text}</p>
      <p>
        The condition refers to the general weather description, such as "clear," "cloudy," or "rainy," indicating the current weather conditions in your location.
      </p>
    </div>
  );
};

export default DetailedWeather;
