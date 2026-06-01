/**
 * newsletterRoutes.js
 * Routing for newsletter signups.
 */

const express = require('express');
const { createNewsletterSubscriber } = require('../controllers/newsletterController');
const router = express.Router();

router.post('/newsletter', createNewsletterSubscriber);

module.exports = router;
