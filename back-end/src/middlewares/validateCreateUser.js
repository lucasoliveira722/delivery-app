const Joi = require('joi');

const JoiCreateUser = Joi.object({
  name: Joi.string().min(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const validateCreateUser = (req, _res, next) => {
  const { name, email, password } = req.body;
  const { error } = JoiCreateUser.validate({ name, email, password });
  if (error) next({ message: error.message, status: 400 });
  next();
};

module.exports = validateCreateUser;
