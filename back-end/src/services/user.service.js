const { User } = require('../database/models');
const errorObj = require('../helpers/errorObj');

module.exports = {
    async create({ name, email, password }) {
        await this.verifyUser(email);
    },

    async verifyUser(email) {
        console.log(email);
        const user = await User.findAll();
        if (user.length > 0) throw errorObj(409, 'Usuário já cadastrado');
    },
};

