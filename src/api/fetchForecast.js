// src/api/fetchForecast.js
export const fetchForecast = async (location) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=${location}&days=7`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };
  