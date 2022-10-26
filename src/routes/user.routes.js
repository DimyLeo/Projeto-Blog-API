const express = require('express');

const controllerUser = require('../controllers/user.controller');

const validateJWT = require('../middlewares/validateJWT');

const { user, getAll } = controllerUser;

const router = express.Router();

router.post('/', user);

router.get('/', validateJWT, getAll);

module.exports = router;