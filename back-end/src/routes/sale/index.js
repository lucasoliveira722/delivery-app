const express = require('express');

const saleRouter = express.Router();

const saleController = require('../../controllers/sale.controller');
const { validateJWT } = require('../../middlewares/validateJWT');
const { validateCreateSale } = require('../../middlewares/validateCreateSale');

saleRouter.post('/', validateJWT, validateCreateSale, saleController.create);

module.exports = saleRouter;
