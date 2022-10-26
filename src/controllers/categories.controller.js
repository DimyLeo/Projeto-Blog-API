const { categoriesService } = require('../services');

const getAll = async (_req, res) => {
  const category = await categoriesService.getAllService();
  return res.status(200).json(category);
};

module.exports = {
  getAll,
};