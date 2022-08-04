require('dotenv').config();
const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET || 'fraseSecreta';

const createToken = (payload) => {
  const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
}

module.exports = createToken;
