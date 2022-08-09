const express = require('express');
const validateCreateUser = require('../../middlewares/validateCreateUser');

const userRouter = express.Router();

const userController = require('../../controllers/user.controller');

userRouter.post('/create', validateCreateUser, userController.create);
userRouter.get('/', userController.getAll);

module.exports = userRouter;
