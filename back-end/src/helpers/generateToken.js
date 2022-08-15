require('dotenv/config');
const fs = require('fs');
const jwt = require('jsonwebtoken');

const key = fs.readFileSync('jwt.evaluation.key', 'utf8');
const secret = key.substring(key.indexOf('=') + 1);

const generateToken = (user) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, secret, jwtConfig);

  return token;
};

module.exports = { generateToken };
