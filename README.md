---BEM VINDO à Blogs-API---

Este é um projeto desenvolvido por Vitor Campos

Esta API simula o back-end e o banco de dados de um blog,
onde o usuário pode fazer login, posts e vincular estes posts
a categorias.



----Para inicializar o projeto----

escreva os seguintes comandos no terminal:

$ docker-compose up -d --build

$ docker exec -it blogs_api bash

$ npm install

$ npm run prestart

$ npm start


Então o banco de dados estará preenchido e os sequintes
endpoints estaram disponiveis:

http://localhost:3000

POST /login - valida o login do usuario e retorna um token
  para o front-end.

  body: {
    "email": "lewishamilton@gmail.com",
    "password": "123456"
  }

*coloque esse token no headers.authorization para usa-lo em algumas das proximas nas requisições*

POST /user - cria um novo usuario.

  body: {
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }

GET /user - traz todos os users do banco de dados.

GET /user/:id - traz o usuario correspondente ao id de :id

POST /categories - adiciona uma nova categoria de post

  body: {
    "name": "Praia"
  }

GET /categories - traz todas as categorias do banco de dados

GET /post - traz todos os posts, com usuario que o fez e categorias


*Neste projeto o .env está no github para facilitação de processos*