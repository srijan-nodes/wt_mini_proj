export const fetchWeather = async (location) => {
    const API_KEY = '6023cf15ac2840d6afd163612241711';
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`
    );
    const data = await response.json();
    return data;
  };
  