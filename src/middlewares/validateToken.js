const jwt = require('jsonwebtoken');
require('dotenv').config();

const validateToken = (req, res, next) => {
    const jwtPassword = process.env.JWT_SECRET;
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token not found' });
    jwt.verify(token, jwtPassword, (error, _decoded) => {
    if (error) return res.status(401).json({ message: 'Expired or invalid token' });
    // req.body.user = decoded;
    });
    next();
};

module.exports = validateToken;