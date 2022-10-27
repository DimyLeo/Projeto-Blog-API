const express = require('express');

const validateJWT = require('../middlewares/validateJWT');

const controllerCategories = require('../controllers/categories.controller');

const { getAll, create } = controllerCategories;

const router = express.Router();

router.get('/', validateJWT, getAll);

router.post('/', validateJWT, create);

module.exports = router;