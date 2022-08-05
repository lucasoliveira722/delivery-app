const { Users } = require('../database/models');
const errorObj = require('../helpers/errorObj');
const emailValidation = require('../validations/emailValidation');

const login = async (email, password) => {
  const validEmail = emailValidation(email);

  if (!validEmail) throw errorObj(400, 'Formatação do e-mail inválida');

  if (password.toString().length < 6) {
    throw errorObj(400, 'Senha deve ter ao menos 06 caracteres');
  }

  const user = await Users.findOne({ where: { email } });

  if (!user) throw errorObj(404, 'E-mail e/ou senha inválidos');

  return user;
};

module.exports = login;
