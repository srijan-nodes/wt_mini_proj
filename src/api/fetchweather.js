// src/api/fetchWeather.js
export const fetchWeather = async (location) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${location}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  