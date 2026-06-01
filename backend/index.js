/**
 * She Can Foundation — Express.js Backend Server
 *
 * Boots the server, sets up middlewares, and delegates routes to the MVC modules.
 */

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const apiRoutes = require('./routes/api');

// ──────────────────────────────────────────────
// App Initialisation
// ──────────────────────────────────────────────
const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

// ──────────────────────────────────────────────
// Middleware
// ──────────────────────────────────────────────
app.use(cors({ origin: CLIENT_URL }));
app.use(express.json());

// ──────────────────────────────────────────────
// Routes
// ──────────────────────────────────────────────
app.use('/api', apiRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: 'Internal Server Error' });
});

// ──────────────────────────────────────────────
// Start Server
// ──────────────────────────────────────────────
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`✨  She Can Foundation API running on http://localhost:${PORT}`);
    console.log(`   CORS origin: ${CLIENT_URL}`);
  });
}

module.exports = app;
