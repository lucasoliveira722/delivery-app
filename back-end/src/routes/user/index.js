const express = require('express');

const userRouter = express.Router();

const userController = require('../../controllers/user.controller');

userRouter.post('/', () => console.log('oi'));

module.exports = userRouter;
