// src/api/fetchAirQuality.js
export const fetchAirQuality = async (location) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/airquality.json?key=YOUR_API_KEY&q=${location}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching air quality data:", error);
    }
  };
  