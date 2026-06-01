/**
 * statsController.js
 * Controller handling statistics retrieval.
 */

const getStats = (_req, res) => {
  const stats = {
    womenEmpowered: 5000,
    programs: 25,
    volunteers: 300,
    countries: 12,
  };

  res.json({
    success: true,
    data: stats,
  });
};

module.exports = {
  getStats,
};
