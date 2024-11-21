
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const cors = require('cors');
const chalk=require('chalk');

const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/login';

connectDB(mongoURI);

app.use('/api/login', require('./backend/routes/login'));
app.use('/api/register', require('./backend/routes/register'));
app.use('/api/delete', require('./backend/routes/delete')); // Add this route

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use((req, res, next) => {
  const error = new Error('successful login');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.status) err.status = 500;
  res.status(err.status).json({
    message: err.message,
    stack: err.stack,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
