require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'your_secret';

module.exports = {
  async validateJWT(req, res, next) {
    const token = req.headers.authorization;
  
    try {
      if (!token) {
        return res.status(401).json({ message: 'Token not found' });
      }
  
      const { data } = jwt.verify(token, secret);
      req.role = data.role;
  
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  },
};
