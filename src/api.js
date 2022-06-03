const express = require('express');

const loginController = require('./controllers/loginController');
const userController = require('./controllers/userController');
const categoryController = require('./controllers/categoryController');

const app = express();

app.use(express.json());

app.use('/login', loginController);

app.use('/user', userController);

app.use('/categories', categoryController);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
