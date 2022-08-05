const express = require('express');

const loginRouter = express.Router();

const login = require('../../controllers/login.controller');

loginRouter.post('/', login);

module.exports = loginRouter;
