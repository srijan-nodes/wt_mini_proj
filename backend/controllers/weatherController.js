const axios = require('axios');

const getWeather = async (req, res) => {
  const { location } = req.query;

  try {
    const API_KEY = process.env.WEATHER_API_KEY;
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Error fetching weather data' });
  }
};

const getForecast = async (req, res) => {
  const { location } = req.query;

  try {
    const API_KEY = process.env.WEATHER_API_KEY;
    const response = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=15`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Error fetching forecast data' });
  }
};

module.exports = { getWeather, getForecast };
