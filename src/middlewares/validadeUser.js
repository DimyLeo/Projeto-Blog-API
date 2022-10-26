const Joi = require('joi');
const { User } = require('../models');

const schema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const validateUser = async (user) => {
  const { error } = schema.validate(user);
  if (error) return { type: 'USER_INVALID', message: error.message };

  const emailExisting = await User.findOne({ where: { email: user.email } });
  if (emailExisting !== null) {
    return { type: 'EMAIL_REGISTERED', message: 'User already registered' };
  }

  return { type: null, message: '' };
};

module.exports = {
  validateUser,
};