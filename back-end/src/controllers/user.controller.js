const userService = require('../services/user.service');

module.exports = {
  async create(req, res) {
    const { name, email, password } = req.body;
    const token = await userService.create({ name, email, password });
    return res.status(201).json({ token });
  },
};
