const express = require('express');

const validateJWT = require('../middlewares/validateJWT');

const controllerPost = require('../controllers/post.controller');

const { getAll } = controllerPost;

const router = express.Router();

router.get('/', validateJWT, getAll);

module.exports = router;