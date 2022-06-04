const express = require('express');
const validateToken = require('../middlewares/validateToken');
const categoryService = require('../services/categoryService');

const categoryRouter = express.Router();

categoryRouter.post('/', validateToken, async (req, res) => {
    const { body } = req;
    if (!body.name) return res.status(400).json({ message: '"name" is required' });
    const newCategory = await categoryService.newCategory(body);
    return res.status(201).json(newCategory);
});

categoryRouter.get('/', validateToken, async (req, res) => {
    const allCategories = await categoryService.allCategories();
    return res.status(200).json(allCategories);
});

module.exports = categoryRouter;