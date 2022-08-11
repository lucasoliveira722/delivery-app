const express = require('express');

const saleRouter = express.Router();

const saleController = require('../../controllers/sale.controller');
const { validateJWT } = require('../../middlewares/validateJWT');
const { validateCreateSale } = require('../../middlewares/validateCreateSale');

saleRouter.post('/', validateJWT, validateCreateSale, saleController.create);

saleRouter.get('/:id', validateJWT, saleController.readOne);

saleRouter.get('/user/:id', validateJWT, saleController.getByRoleId);

module.exports = saleRouter;
