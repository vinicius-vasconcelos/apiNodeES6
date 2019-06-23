const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index); //pesquisar
routes.get('products/:id', ProductController.show);
routes.post('/products', ProductController.store); //criação
routes.put('products/:id', ProductController.update);//atualizar
routes.delete('products/:id', ProductController.destroy);//deleção

module.exports = routes;