const { Category } = require('../database/models');

const newCategory = async ({ name }) => {
    const addCategory = await Category.create({ name });
    return addCategory;
};

const allCategories = async () => {
    const Categories = await Category.findAll();
    return Categories;
};

module.exports = {
    newCategory,
    allCategories,
};