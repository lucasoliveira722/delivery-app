const { User } = require('../database/models');
const { cryptoPassword } = require('../helpers/cryptoPassword');
const errorObj = require('../helpers/errorObj');

module.exports = {
    async create({ name, email, password, role }) {
        await this.verifyUserAlreadyExists(email);
        const hash = cryptoPassword(password);
        await User.create({ name, email, password: hash, role });
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
