/**
 * contactRoutes.js
 * Routing for contact and volunteer forms.
 */

const express = require('express');
const { createContactSubmission } = require('../controllers/contactController');
const router = express.Router();

router.post('/contact', createContactSubmission);

module.exports = router;
