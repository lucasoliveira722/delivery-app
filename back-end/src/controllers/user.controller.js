const userService = require('../services/user.service');

module.exports = {
    async create(req, res, next) {
        const { name, email, password } = req.body; 
        const newUser = await userService.create({name, email, password});
        return res.status(200).json(newUser);
        
    }
}

