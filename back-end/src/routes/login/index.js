const express = require('express');

const loginRouter = express.Router();

const LoginController = require('../../controllers/login.controller');

loginRouter.post('/', LoginController.login);

module.exports = loginRouter;
