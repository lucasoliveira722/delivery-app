require('dotenv').config();
const jwt = require('jsonwebtoken');
const fs = require('fs');

const key = fs.readFileSync('jwt.evaluation.key', 'utf8');
const secret = key.substring(key.indexOf('=') + 1);

module.exports = {
  async validateJWT(req, res, next) {
    const token = req.headers.authorization;

    try {
      if (!token) {
        return res.status(401).json({ message: 'Token not found' });
      }

      const { data } = jwt.verify(token, secret);
      req.data = data;

      next();
    } catch (err) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  },
};
