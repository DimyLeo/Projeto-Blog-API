const express = require('express');

const controllerUser = require('../controllers/user.controller');

const validateJWT = require('../middlewares/validateJWT');

const { user, getAll, getById } = controllerUser;

const router = express.Router();

router.post('/', user);

router.get('/', validateJWT, getAll);

router.get('/:id', validateJWT, getById);

module.exports = router;