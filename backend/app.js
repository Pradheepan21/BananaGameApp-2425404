// app.js
const express = require('express');
const app = express();
const gameRoutes = require('./routes/gameRoutes');

// Middleware to parse JSON
app.use(express.json());

// Set up routes
app.use('/api/game', gameRoutes);

module.exports = app;
