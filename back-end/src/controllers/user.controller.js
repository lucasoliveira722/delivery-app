const userService = require('../services/user.service');

module.exports = {
    async create(req, res) {
        const { name, email, password, role } = req.body;
        const newUser = await userService.create({ name, email, password, role });
        return res.status(201).json(newUser);
    },

    async getAll(_req, res) {
        const users = await userService.getAll();
        return res.status(200).json(users);
    },
};
