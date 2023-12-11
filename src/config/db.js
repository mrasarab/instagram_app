// db.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { logger } = require('../utils/logger');

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    logger.log('info', 'MongoDB connected');
    console.log('MongoDB connected');
  } catch (error) {
    logger.error('MongoDB connection error:', error);
    console.error('MongoDB connection error:', error);
    }
};

module.exports = connectDB;
