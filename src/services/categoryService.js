const { Category } = require('../database/models');

const newCategory = async ({ name }) => {
    const addCategory = await Category.create({ name });
    return addCategory;
};

module.exports = {
    newCategory,
};