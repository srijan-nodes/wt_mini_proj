const mongoose = require('mongoose');

const connectDB = (uri) => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB connected successfully');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
      process.exit(1); 
    });
};

module.exports = connectDB;
