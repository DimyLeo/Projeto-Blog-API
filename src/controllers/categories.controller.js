const { categoriesService } = require('../services');

const getAll = async (_req, res) => {
  const category = await categoriesService.getAllService();
  return res.status(200).json(category);
};

const create = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  const newCategory = await categoriesService.createService(name);

  res.status(201).json(newCategory);
};

module.exports = {
  getAll,
  create,
};