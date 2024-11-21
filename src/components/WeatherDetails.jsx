import React from 'react';

const WeatherDetailsPage = () => (
  <div className="container">
    <h1>Weather Details</h1>
    
    <p><strong>Temperature:</strong> Measures how hot or cold the atmosphere is. It directly affects how comfortable or uncomfortable we feel in different weather conditions.</p>

    <p><strong>Condition:</strong> Describes the overall weather (e.g., sunny, cloudy, rainy, snowy). It's important for understanding the type of weather occurring.</p>

    <p><strong>Wind Speed:</strong> Indicates how fast the air is moving. It can influence how cold or warm we feel and is crucial for understanding storms or weather systems.</p>

    <p><strong>Humidity:</strong> Measures the amount of moisture in the air. High humidity makes the air feel warmer, while low humidity can make it feel cooler. Humidity is a key factor in comfort and weather prediction.</p>

    <p><strong>Pressure:</strong> Atmospheric pressure is the weight of the air above us. Low pressure generally brings stormy weather, while high pressure is usually linked to clear skies.</p>

    <p><strong>Visibility:</strong> The distance at which you can clearly see an object. Poor visibility is often caused by fog, rain, or snow.</p>

    <p><strong>Air Quality:</strong> Indicates the level of pollutants in the air. PM2.5 and PM10 are particulate matter that can be harmful to health. The Air Quality Index (AQI) is used to communicate the level of air pollution.</p>

    <p><strong>Astronomy Data:</strong> Information on sunrise and sunset times. These are important for understanding the length of the day and planning outdoor activities.</p>
  </div>
);

export default WeatherDetailsPage;
