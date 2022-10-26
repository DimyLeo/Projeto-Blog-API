const { Category } = require('../models');

const getAllService = async () => {
  const category = await Category.findAll();

  return category;
};

module.exports = {
  getAllService,
};