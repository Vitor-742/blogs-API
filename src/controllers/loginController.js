const express = require('express');
const loginService = require('../services/loginService');

const loginRouter = express.Router();

loginRouter.post('/', async (req, res) => {
    const { body } = req;
    const response = await loginService.doLogin(body);
    if (response.status === 400) return res.status(400).json(response.error);

    return res.status(200).json(response.token);
});

module.exports = loginRouter;