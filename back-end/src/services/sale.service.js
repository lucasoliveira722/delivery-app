const Sequelize = require('sequelize');
const { Op } = require('sequelize');
const { Sale, SalesProduct } = require('../database/models');
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
    
    async readOne(id) {
        // Verificar pq está retornando os valores seller_id e user_id em snake_case;
        // Usei o exclude ali, mas n faz mt sentido...
        const sale = await Sale.findOne({
            where: { id },
            attributes: {
              exclude: ['seller_id', 'user_id'],  
            },
            include: [
                { model: SalesProduct, as: 'saleProducts', attributes: ['productId', 'quantity'] },
            ],
        });
        if (!sale) throw errorObj(404, 'Sale id not found');
        return sale;
    },

    async readAll(id) {
        const sales = await Sale.findAll({
            where: 
            { [Op.or]: [
                { userId: id },
                { sellerId: id },            
            ] },
            attributes: {
                exclude: ['seller_id', 'user_id'],
            },
            include: [
                { model: SalesProduct, as: 'saleProducts', attributes: ['productId', 'quantity'] },
            ],
        });
        return sales;
    }, 

    async updateStatus(status, id) {
        const existSale = await Sale.findOne({ where: { id } });
        if (!existSale) throw errorObj(404, 'Sale not found');
        await Sale.update({ status }, { where: { id } });
    },
};