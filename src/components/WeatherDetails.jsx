import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../api/weatherAPI'; // Assuming fetchWeather is defined in your API module
import { fetchForecast } from '../api/fetchForecast';
import { fetchAirQuality } from '../api/fetchAirQuality';
import { fetchAstronomy } from '../api/fetchAstronomy';

const WeatherDetailsPage = ({ location }) => {
  const [weather, setWeather] = useState(null);
  const [hourly, setHourly] = useState(null);
  const [daily, setDaily] = useState(null);
  const [airQuality, setAirQuality] = useState(null);
  const [astronomy, setAstronomy] = useState(null);

  useEffect(() => {
    fetchWeather(location)
      .then((data) => {
        setWeather(data);
      })
      .catch((error) => console.error('Error fetching weather:', error));

    fetchForecast(location)
      .then((data) => {
        setHourly(data.forecast.forecastday[0].hour);
        setDaily(data.forecast.forecastday);
      })
      .catch((error) => console.error('Error fetching forecast:', error));

    fetchAirQuality(location)
      .then((data) => {
        setAirQuality(data);
      })
      .catch((error) => console.error('Error fetching air quality:', error));

    fetchAstronomy(location)
      .then((data) => {
        setAstronomy(data);
      })
      .catch((error) => console.error('Error fetching astronomy:', error));
  }, [location]);

  if (!weather) return <div>Loading...</div>;

  return (
    <div className="weather-details-page">
      <h1>Weather Details for {location}</h1>

      {/* Current Weather */}
      {weather && (
        <div className="current-weather">
          <h2>Current Weather</h2>
          <p>Temperature: {weather.current.temp_c} °C</p>
          <p>
            <strong>Explanation:</strong> Temperature is the measure of how hot or cold the atmosphere is. It is typically measured in Celsius or Fahrenheit.
          </p>
          <p>Condition: {weather.current.condition.text}</p>
          <p>
            <strong>Explanation:</strong> The condition describes the current weather state, such as sunny, cloudy, rainy, or snowy.
          </p>
          <p>Wind Speed: {weather.current.wind_kph} km/h</p>
          <p>
            <strong>Explanation:</strong> Wind speed indicates how fast the air is moving. It is important for understanding weather patterns, including storms and heat dissipation.
          </p>
          <p>Humidity: {weather.current.humidity}%</p>
          <p>
            <strong>Explanation:</strong> Humidity is the amount of moisture in the air. High humidity levels can make the air feel warmer than it actually is.
          </p>
          <p>Pressure: {weather.current.pressure_mb} mb</p>
          <p>
            <strong>Explanation:</strong> Atmospheric pressure is the weight of the air above us. It can affect weather patterns, with lower pressure generally indicating stormy conditions.
          </p>
          <p>Visibility: {weather.current.vis_km} km</p>
          <p>
            <strong>Explanation:</strong> Visibility is the distance at which you can clearly see an object. Poor visibility can be caused by fog, rain, or other weather conditions.
          </p>
        </div>
      )}

      {/* Hourly Forecast */}
      {hourly ? (
        <div className="hourly-forecast">
          <h3>Hourly Forecast</h3>
          {hourly.map((hour, index) => (
            <div key={index}>
              <p>{hour.time} - Temp: {hour.temp_c} °C</p>
              <p>
                <strong>Explanation:</strong> The hourly temperature shows the forecasted temperature at specific times of the day.
              </p>
              <p>Condition: {hour.condition.text}</p>
              <p>
                <strong>Explanation:</strong> This indicates the expected weather conditions, like clear skies, clouds, or rain, for each hour.
              </p>
              <p>Wind Speed: {hour.wind_kph} km/h</p>
              <p>
                <strong>Explanation:</strong> The hourly wind speed gives you an idea of how windy it will be throughout the day.
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading hourly forecast...</p>
      )}

      {/* Daily Forecast */}
      {daily ? (
        <div className="daily-forecast">
          <h3>15-Day Forecast</h3>
          {daily.map((day, index) => (
            <div key={index}>
              <p>{day.date} - Min Temp: {day.mintemp_c} °C | Max Temp: {day.maxtemp_c} °C</p>
              <p>
                <strong>Explanation:</strong> This provides the minimum and maximum temperatures expected for each day.
              </p>
              <p>Condition: {day.condition.text}</p>
              <p>
                <strong>Explanation:</strong> The daily weather condition gives an overview of the weather for that specific day, such as sunny, rainy, or cloudy.
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading daily forecast...</p>
      )}

      {/* Air Quality */}
      {airQuality ? (
        <div className="air-quality">
          <h3>Air Quality</h3>
          <p>PM2.5: {airQuality.data.current.air_quality.pm25}</p>
          <p>
            <strong>Explanation:</strong> PM2.5 refers to tiny particles suspended in the air that can be harmful when inhaled. A high PM2.5 level indicates poor air quality.
          </p>
          <p>PM10: {airQuality.data.current.air_quality.pm10}</p>
          <p>
            <strong>Explanation:</strong> PM10 are larger particles than PM2.5, still harmful, especially in areas with heavy pollution.
          </p>
          <p>NO2: {airQuality.data.current.air_quality.no2}</p>
          <p>
            <strong>Explanation:</strong> Nitrogen dioxide (NO2) is a pollutant that can irritate the lungs and worsen respiratory conditions.
          </p>
          <p>AQI: {airQuality.data.current.air_quality.aqi}</p>
          <p>
            <strong>Explanation:</strong> The Air Quality Index (AQI) is a scale used to communicate how polluted the air is. Higher values indicate worse air quality.
          </p>
        </div>
      ) : (
        <p>Loading air quality...</p>
      )}

      {/* Astronomy Data */}
      {astronomy ? (
        <div className="astronomy">
          <h3>Astronomy Data</h3>
          <p>Sunrise: {astronomy.astronomy.sunrise}</p>
          <p>
            <strong>Explanation:</strong> Sunrise time tells you when the sun will first appear above the horizon for the given location.
          </p>
          <p>Sunset: {astronomy.astronomy.sunset}</p>
          <p>
            <strong>Explanation:</strong> Sunset time indicates when the sun will disappear below the horizon, marking the end of the day.
          </p>
        </div>
      ) : (
        <p>Loading astronomy data...</p>
      )}
    </div>
  );
};

export default WeatherDetailsPage;
