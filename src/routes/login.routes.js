const express = require('express');

const controllerLogin = require('../controllers/login.controller');

const { login } = controllerLogin;

const router = express.Router();

router.post('/', login);

module.exports = router;