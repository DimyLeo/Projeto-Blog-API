const { postService } = require('../services');

const getAll = async (_req, res) => {
  const post = await postService.getAllService();
  return res.status(200).json(post);
};

module.exports = {
  getAll,
};