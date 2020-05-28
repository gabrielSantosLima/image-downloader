const express = require('express')
const robots = require('./robot/robots')
const ImageController = require('./controller/ImageController')

const routes = express.Router();

routes.post('/pesquisar', ImageController.pesquisar)

module.exports = routes;