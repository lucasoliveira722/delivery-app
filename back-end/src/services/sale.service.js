const Sequelize = require('sequelize');
const { Sale } = require('../database/models');
const saleProductService = require('./salesProduct.service');
const config = require('../database/config/config');
const errorObj = require('../helpers/errorObj');

const sequelize = new Sequelize(config.development);

module.exports = {
    async create(sale) {
        // Aqui pensei em fazer uma função que verifica se o totalPrice
        // enviado pela requisição é consistente.
        // Futuramente será implementado, pois acredito que não seja um requisito.
        const transaction = await sequelize.transaction();
        try {
            const newSale = await Sale.create(sale, { transaction });
            await saleProductService.create({ 
                saleId: newSale.id, 
                saleProduct: sale.itemsSold }, 
                transaction);
            await transaction.commit();
            return newSale;
        } catch (err) {
            await transaction.rollback();
            throw errorObj(400, err.message);
        }
    }, 
};