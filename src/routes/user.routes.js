const express = require('express');

const controllerLogin = require('../controllers/user.controller');

const { user } = controllerLogin;

const router = express.Router();

router.post('/', user);

module.exports = router;