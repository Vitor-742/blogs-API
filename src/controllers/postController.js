const express = require('express');
const validateToken = require('../middlewares/validateToken');
const postService = require('../services/postService');

const postRouter = express.Router();

postRouter.post('/', validateToken, async (req, res) => {
//     const { title, content, categoryIds } = req.body;
//     const token = req.headers.authorization;
//     if (!title || !content || !categoryIds) {
//     return res.status(400).json({ message: 'Some required fields are missing' }); 
// }
//     const haveCategory = await postService.haveCategory(categoryIds);
//         if (!haveCategory) return res.status(400).json({ message: '"categoryIds" not found' });

//     const createPost = await postService.createPost(req.body, token);
//     return res.status(201).json(createPost);
});

postRouter.get('/', validateToken, async (req, res) => {
    try {
        const allBlogPosts = await postService.allBlogPosts();
    return res.status(200).json(allBlogPosts);
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = postRouter;// pd ser q tenha q colocar trycacth