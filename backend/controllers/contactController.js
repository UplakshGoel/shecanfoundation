/**
 * contactController.js
 * Controller handling contact and volunteer submissions.
 */

const ContactSubmission = require('../models/contactSubmission');

const createContactSubmission = (req, res) => {
  const { name, email, message, type } = req.body;

  // --- Validation ---
  if (!name || !email || !message || !type) {
    return res.status(400).json({
      success: false,
      error: 'All fields are required: name, email, message, type',
    });
  }

  const allowedTypes = ['volunteer', 'contact'];
  if (!allowedTypes.includes(type)) {
    return res.status(400).json({
      success: false,
      error: `Invalid type. Must be one of: ${allowedTypes.join(', ')}`,
    });
  }

  // --- Store submission ---
  const submission = ContactSubmission.create({ name, email, message, type });

  const label = type === 'volunteer' ? 'Volunteer application' : 'Contact message';
  console.log(`[${label}] from ${name} <${email}>`);

  return res.status(201).json({
    success: true,
    message: `${label} received successfully. We'll be in touch!`,
    data: { id: submission.id },
  });
};

module.exports = {
  createContactSubmission,
};
