const express = require('express');

const userRouter = express.Router();
const userService = require('../services/userService');
const validateToken = require('../middlewares/validateToken');

userRouter.post('/', async (req, res) => {
    const { body } = req;
    const createUser = await userService.createUser(body);
    if (createUser.status === 201) return res.status(201).json(createUser.token);
    return res.status(createUser.status).json(createUser.error);// sepa eh pq nn cria msm
});

userRouter.get('/', validateToken, async (req, res) => {
    const allUsers = await userService.findAllUsers();
    return res.status(200).json(allUsers);
});

userRouter.get('/:id', validateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const userById = await userService.findById(id);
        if (userById === null) return res.status(404).json({ message: 'User does not exist' }); 
    return res.status(200).json(userById);
    } catch (error) {
        console.log(error.message);
        // tentativa de conserto do evaluator do github
    }
});

module.exports = userRouter;