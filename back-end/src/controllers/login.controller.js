const loginService = require('../services/login.service');

const login = async (req, res, _next) => {
  const { email, password } = req.body;
  const token = await loginService(email, password);
  return res.status(200).json({ token });
};

module.exports = login;
