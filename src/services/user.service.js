const { User } = require('../models');
const { validateUser } = require('../middlewares/validadeUser');

const create = async (newUser) => {
  const validation = await validateUser(newUser);
  if (validation.type) return validation;

  const createdUser = await User.create({ ...newUser });
  return { type: null, message: createdUser };
};

module.exports = {
  create,
};