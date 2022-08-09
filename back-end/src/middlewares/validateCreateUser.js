const Joi = require('joi');

const JoiCreateUser = Joi.object({
    name: Joi.string().min(12).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().required(),
});

const validateCreateUser = (req, res, next) => {
    const { name, email, password, role } = req.body;
    const { error } = JoiCreateUser.validate({ name, email, password, role });
    if (error) next({ message: error.message, status: 400 });
    const validRoleOptions = ['administrator', 'seller', 'customer']; 
    if (validRoleOptions.every((r) => r !== role)) {
        next({ message: 'Invalid role option', status: 400 });
    }
    next(); 
};

module.exports = validateCreateUser;