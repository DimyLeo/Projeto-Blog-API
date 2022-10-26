const { User } = require('../models');
const { validateUser } = require('../middlewares/validadeUser');

const getAllService = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

const getByIdService = async (id) => {
  const user = await User.findOne({ 
    where: { id },
    attributes: { exclude: ['password'] },
   });

  return user;
};

const create = async (newUser) => {
  const validation = await validateUser(newUser);
  if (validation.type) return validation;

  const createdUser = await User.create({ ...newUser });
  return { type: null, message: createdUser };
};

module.exports = {
  create,
  getAllService,
  getByIdService,
};