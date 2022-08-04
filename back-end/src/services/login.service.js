const { Users } = require('../database/models/User');
const errorObj = require('../helpers/errorObj');
const emailValidation = require('../validations/emailValidation');

const login = async (email, password) => {
  const validEmail = emailValidation(email);
  if (password.length < 6) {
    throw errorObj(400, 'Senha deve ter ao menos 06 caracteres');
  }
  if (!validEmail) throw errorObj(400, 'E-mail inválido');

  const user = await Users.findOne({ where: { email } });

  if (!user) throw errorObj(404, 'E-mail do usuário não encontrado');
  email;

  console.log(user);

  return user;
};

module.exports = login;
