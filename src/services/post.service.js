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

const getByIdService = async (id) => {
  const post = await BlogPost.findOne({ 
    where: { id },
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

  return post;
};

module.exports = {
  getAllService,
  getByIdService,
};