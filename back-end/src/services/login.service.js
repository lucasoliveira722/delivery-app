const { User } = require('../database/models');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email }});

  // if (!user) 

  return user;
};


module.exports = { login };
