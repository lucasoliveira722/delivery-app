const ProductService = require('../services/product.service');

const getAll = async (_req, res, _next) => {
  const products = await ProductService.getAll();
  return res.status(200).json(products);
};

module.exports = { getAll };
