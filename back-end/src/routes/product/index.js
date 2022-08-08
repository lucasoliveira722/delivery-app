const express = require('express');

const userRouter = express.Router();

const productController = require('../../controllers/product.controller');

userRouter.get('/', productController.getAll);

module.exports = userRouter;
