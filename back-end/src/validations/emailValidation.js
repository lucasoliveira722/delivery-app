const { z } = require('zod');
const errorObj = require('../helpers/errorObj');

const emailValidation = (email) => {
  const emailSchema = z.string().email();
  const validEmail = emailSchema.safeParse(email);

  if (validEmail.error) throw errorObj(400, 'Formatação do e-mail inválida');
};

module.exports = emailValidation;
