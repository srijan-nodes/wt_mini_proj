const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
    .connect("mongodb://localhost:27017/")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log(err);
    });

// Routes
const weatherRoutes = require('./routes/weather');
app.use('/api/weather', weatherRoutes);

const feedbackRoutes = require('./routes/feedback');
app.use('/api/feedback', feedbackRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to the Weather App Backend');
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
