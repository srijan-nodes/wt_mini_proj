// src/api/fetchAstronomy.js
export const fetchAstronomy = async (location) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/astronomy.json?key=YOUR_API_KEY&q=${location}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching astronomy data:", error);
    }
  };
  