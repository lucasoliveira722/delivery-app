const Joi = require('joi');

const JoiCreateSale = Joi.object({
    userId: Joi.number().required(), 
    sellerId: Joi.number().required(), 
    totalPrice: Joi.number().required(), 
    deliveryAddress: Joi.string().required(), 
    deliveryNumber: Joi.string().required(),
});

module.exports = {
    validateCreateSale(req, res, next) {
        const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber } = req.body;
        const { error } = JoiCreateSale.validate({ 
            userId, 
            sellerId,
            totalPrice,
            deliveryAddress,
            deliveryNumber, 
        });
        if (error) next({ message: error.message, status: 400 });
        next();
    },
};