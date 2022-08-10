const { SalesProduct } = require('../database/models');
const ProductService = require('./product.service');

module.exports = {
    async create({ saleId, saleProduct }, transaction) {
        await this.verifyProductsIds(saleProduct);
        const createSaleProducts = await saleProduct.map(({ productId, quantity }) => 
        SalesProduct.create({ saleId, productId, quantity }, { transaction }));
        await Promise.all(createSaleProducts);
    },

    async verifyProductsIds(saleProduct) {
        const verifyProductId = saleProduct.map(({ productId }) => 
        ProductService.getById(productId));
        await Promise.all(verifyProductId);
    },
};