const { Category, BlogPost, User } = require('../models');

const getAllService = async () => {
  const posts = await BlogPost.findAll({
    include: [
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
    ],
  });

  return posts;
};

module.exports = {
  getAllService,
};