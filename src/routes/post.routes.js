const express = require('express');

const validateJWT = require('../middlewares/validateJWT');

const controllerPost = require('../controllers/post.controller');

const { getAll, getById } = controllerPost;

const router = express.Router();

router.get('/', validateJWT, getAll);

router.get('/:id', validateJWT, getById);

module.exports = router;