const express = require('express');

const loginController = require('./controllers/loginController');
const userController = require('./controllers/userController');

const app = express();

app.use(express.json());

app.use('/login', loginController);

app.use('/user', userController);

app.post('/alo', (req, res) => {
    res.status(200).json({ deu: 'certo' });// tomar cuidado pq validateToken nao foi testado
});

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
