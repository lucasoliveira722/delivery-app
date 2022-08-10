const { User } = require('../database/models');
const { cryptoPassword } = require('../helpers/cryptoPassword');
const errorObj = require('../helpers/errorObj');
const { generateToken } = require('../helpers/generateToken');

module.exports = {
  async create({ name, email, password, role }) {
    await this.verifyUserAlreadyExists(email);
    const hash = cryptoPassword(password);
    const { dataValues: newUser } = await User.create({
      name,
      email,
      password: hash,
      role,
    });

    delete newUser.password;

    return generateToken(newUser);
  },

  async verifyUserAlreadyExists(email) {
    const user = await User.findAll({
      where: { email },
    });
    if (user.length > 0) throw errorObj(409, 'Usuário já cadastrado');
  },

  async getAll() {
    const users = await User.findAll();
    return users;
  },
};
