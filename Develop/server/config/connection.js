const mongoose = require('mongoose');

// Load environment variables if they exist
require('dotenv').config();

// Connect to the URI provided by Render (Production) or .env (Local)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
