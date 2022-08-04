const express = require('express');

const userRouter = express.Router();

const userController = require('../../controllers/user.controller');

userRouter.post('/create', userController.create);

module.exports = userRouter;
