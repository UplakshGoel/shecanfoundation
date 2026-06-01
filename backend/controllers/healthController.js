/**
 * healthController.js
 * Controller handling health checks.
 */

const getHealth = (_req, res) => {
  res.json({
    status: 'ok',
    message: 'She Can Foundation API is running',
    timestamp: new Date().toISOString(),
  });
};

module.exports = {
  getHealth,
};
