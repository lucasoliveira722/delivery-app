const { Sale } = require('../database/models');

module.exports = {
    async create(sale) {
        const newSale = await Sale.create(sale);
        return newSale;
    },
};