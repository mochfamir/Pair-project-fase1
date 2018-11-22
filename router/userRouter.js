const routes = require('express').Router()
const UserController = require('../controllers/userController')
const VideoController = require('../controllers/VideoController')

// reagister
routes.get('/register', UserController.renderRegisterUser)
routes.post('/register', UserController.postRegisterUser)

//login
routes.get('/login', UserController.renderLoginUser)
routes.post('/login', UserController.postLoginUser)

module.exports = routes