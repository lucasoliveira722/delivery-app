const saleService = require('../services/sale.service');

module.exports = {
    async create(req, res) {
        const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber } = req.body;
        const newSale = await saleService.create({ 
            userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, 
        });
        return res.status(201).json({ saleId: newSale.id });
    },
};