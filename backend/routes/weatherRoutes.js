const express = require('express');
const { getWeather, getForecast } = require('../controllers/weatherController');

const router = express.Router();

router.get('/current', getWeather);
router.get('/forecast', getForecast);

module.exports = router;
