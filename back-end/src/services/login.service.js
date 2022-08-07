const { User } = require('../database/models');
const errorObj = require('../helpers/errorObj');
const { generateToken } = require('../helpers/generateToken');
const emailValidation = require('../validations/emailValidation');
const passwordValidation = require('../validations/passwordValidation');

const login = async (email, password) => {
  emailValidation(email);

  if (password.toString().length < 6) {
    throw errorObj(400, 'Senha deve ter ao menos 06 caracteres');
  }

  const userExists = await User.findOne({ where: { email } });

  if (!userExists) throw errorObj(404, 'E-mail não cadastrado');

  const { dataValues: user } = userExists;
  const correctPassword = await passwordValidation(password, user.password);

  if (!correctPassword) {
    throw errorObj(401, 'E-mail ou senha incorretos');
  }

  delete user.password;
  const token = generateToken(user);
  return token;
};

module.exports = { login };
