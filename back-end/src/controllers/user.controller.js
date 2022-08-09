const userService = require('../services/user.service');

module.exports = {
    async create(req, res) {
        const { name, email, password, role } = req.body;
        const newUser = await userService.create({ name, email, password, role });
        return res.status(201).json(newUser);
    },

    async getAll(req, res) {
        const { role } = req.data;
        const users = await userService.getAll(role);
        return res.status(200).json(users);
    },
};
