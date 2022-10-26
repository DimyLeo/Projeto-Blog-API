const express = require('express');

const validateJWT = require('../middlewares/validateJWT');

const controllerCategories = require('../controllers/categories.controller');

const { getAll } = controllerCategories;

const router = express.Router();

router.get('/', validateJWT, getAll);

module.exports = router;