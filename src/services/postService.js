// const jwt = require('jsonwebtoken');
const { BlogPost, Category, User/* , PostCategory  */ } = require('../database/models');
require('dotenv').config();

const createPost = async (_body, _token) => false;
    // const jwtPassword = process.env.JWT_SECRET
    // const { title, content, categoryIds } = body;
    // const user = jwt.verify(token, jwtPassword);
    // console.log(user);
    // const { dataValues: { id } } = await User.findOne({ where: { email: user.data.email } });
    // const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    // const newPost = await BlogPost
    //     .create({ title, content, userId: id, published: date, updated: date });
    // categoryIds.forEach(async (catId) => {
    //     await PostCategory.create({ postId: newPost.id, categoryId: catId });
    //     console.log(catId);
    // });

const haveCategory = async (categoryIds) => {
    const someCategoryExist = categoryIds.some(async (id) => {
        const find = await Category.findOne({ where: { id } });
        if (find) return true;
        return false;
    });
    return someCategoryExist;
};

const allBlogPosts = async () => {
    try {
        const allPosts = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });
    console.log(allPosts);
    return allPosts;
    } catch (error) {
        console.log(error.message);
    }
    
    // const posts = allPosts.map((post) => post.dataValues);
    // console.log(posts);
    // const obj = await posts.map(async (post) => {
    //     const user = await User.findOne({ where: { id: post.id } });
    //     const categories = await PostCategory.findAll();
    //     return user;
    // });
    // console.log(obj);
};

module.exports = {
    haveCategory,
    createPost,
    allBlogPosts,
};