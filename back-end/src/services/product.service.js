const { Product } = require('../database/models');

const getAll = async () => {
  const products = await Product.findAll();
  return products;
};

const getById = async (id) => {
  const product = await Product.findOne({ where: { id } });
  return product;
};

module.exports = { getAll, getById };
