const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (info) => {
    const passwordJWT = process.env.JWT_SECRET;
    const jwtConfig = {
        algorithm: 'HS256',
      };
    return jwt.sign({ data: info }, passwordJWT, jwtConfig);
};

module.exports = {
    generateToken,
};