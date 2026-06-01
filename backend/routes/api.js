/**
 * api.js
 * Combines all API routing modules under a single router.
 */

const express = require('express');
const healthRoutes = require('./healthRoutes');
const contactRoutes = require('./contactRoutes');
const newsletterRoutes = require('./newsletterRoutes');
const statsRoutes = require('./statsRoutes');

const router = express.Router();

router.use(healthRoutes);
router.use(contactRoutes);
router.use(newsletterRoutes);
router.use(statsRoutes);

module.exports = router;
