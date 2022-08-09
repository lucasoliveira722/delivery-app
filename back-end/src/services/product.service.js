const { Product } = require('../database/models');
const errorObj = require('../helpers/errorObj');

const getAll = async () => {
  const products = await Product.findAll();
  return products;
};

const getById = async (id) => {
  const product = await Product.findOne({ where: { id } });
  if (!product) throw errorObj(404, 'Product not found');
  return product;
};

module.exports = { getAll, getById };
