const mongoose = require('mongoose');
const config = require('config');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongoURI2, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected...');
  } catch (error) {
    console.error(error.message);
    process.exit();
  }
}

module.exports = connectDB;