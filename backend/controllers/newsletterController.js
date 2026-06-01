/**
 * newsletterController.js
 * Controller handling newsletter sign-ups.
 */

const NewsletterSubscriber = require('../models/newsletterSubscriber');

const createNewsletterSubscriber = (req, res) => {
  const { email } = req.body;

  // --- Validation ---
  if (!email) {
    return res.status(400).json({
      success: false,
      error: 'Email is required',
    });
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address',
    });
  }

  // Prevent duplicate subscriptions
  if (NewsletterSubscriber.findByEmail(email)) {
    return res.status(409).json({
      success: false,
      error: 'This email is already subscribed to our newsletter',
    });
  }

  // --- Store subscriber ---
  NewsletterSubscriber.create({ email });
  console.log(`[Newsletter] New subscriber: ${email}`);

  return res.status(201).json({
    success: true,
    message: 'Successfully subscribed to the newsletter!',
  });
};

module.exports = {
  createNewsletterSubscriber,
};
