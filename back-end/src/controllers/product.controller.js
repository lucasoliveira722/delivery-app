const ProductService = require('../services/product.service');

const getAll = async (_req, res, _next) => {
  const products = await ProductService.getAll();
  console.log(_req.role);
  return res.status(200).json(products);
};

const getById = async (req, res, _next) => {
  const { id } = req.params;
  const products = await ProductService.getById(id);
  return res.status(200).json(products);
};

module.exports = { getAll, getById };
