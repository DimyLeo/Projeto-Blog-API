const { Category } = require('../models');

const getAllService = async () => {
  const category = await Category.findAll();

  return category;
};

const createService = async (name) => {
  const createdCategory = await Category.create({ name });
  return createdCategory;
};

module.exports = {
  getAllService,
  createService,
};