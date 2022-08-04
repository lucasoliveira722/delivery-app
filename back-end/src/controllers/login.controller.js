const loginService = require("../services/login.service");

const login = async (req, res, _next) => {
  const { email, password } = req.body;
  const response = await loginService.login(email, password);
  return res.status(200).json(response);
};

module.exports = login;
