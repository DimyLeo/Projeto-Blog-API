require('dotenv/config');
const jwt = require('jsonwebtoken');
const { userService } = require('../services');
const errorMap = require('../middlewares/errorMap');

const secret = process.env.JWT_SECRET || 'secrettoken';

const user = async (req, res) => {
  const newUser = req.body;

  const { type, message } = await userService.create(newUser);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

    const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };

    const token = jwt.sign({ data: { email: message.email } }, secret, jwtConfig);

    res.status(201).json({ token });
};

const getAll = async (_req, res) => {
  const users = await userService.getAllService();
  return res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const userId = await userService.getByIdService(id);

  if (!userId) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(userId);
};

module.exports = {
  user,
  getAll,
  getById,
};