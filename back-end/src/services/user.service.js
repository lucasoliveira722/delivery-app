const { User } = require('../database/models');
const errorObj = require('../helpers/errorObj');

module.exports = {
  async create({ name, email, password }) {
    const user = await this.verifyUser(email);
    return user;
  },

  async verifyUser(email) {
    const user = await User.findAll();
    if (user.length > 0) throw errorObj(409, 'Usuário já cadastrado');
  },
};
