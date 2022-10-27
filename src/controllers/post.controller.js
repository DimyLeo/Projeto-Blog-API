const { postService } = require('../services');

const getAll = async (_req, res) => {
  const post = await postService.getAllService();
  return res.status(200).json(post);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const postId = await postService.getByIdService(id);

  if (!postId) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  return res.status(200).json(postId);
};

module.exports = {
  getAll,
  getById,
};