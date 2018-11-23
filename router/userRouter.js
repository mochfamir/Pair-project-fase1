const routes = require('express').Router()
const isLogin = require('../middleware/session')
const UserController = require('../controllers/userController')
const VideoController = require('../controllers/VideoController')
const VideoUserController = require('../controllers/VideoUserController')

// reagister
routes.get('/register', UserController.renderRegisterUser)
routes.post('/register', UserController.postRegisterUser)

//login
routes.get('/login', UserController.renderLoginUser)
routes.post('/login', UserController.postLoginUser)

// homepage
routes.get('/home', isLogin, VideoController.renderHomeUser)

// buy link video
routes.post('/my-video/:id', isLogin, VideoUserController.postBuyLink)

// list video yang sudah dibeli
routes.get('/my-video/list', isLogin, VideoUserController.renderListVideo)

//topup
routes.get('/topup', isLogin, UserController.renderTopup)
routes.post('/topup', isLogin, UserController.postTopup)

module.exports = routes