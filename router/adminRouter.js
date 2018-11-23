const routes = require('express').Router()
const AdminController = require('../controllers/adminController')
const VideoController = require('../controllers/VideoController')
const isLogin = require('../middleware/session')
// register
routes.get('/register', AdminController.renderRegisterAdmin)
routes.post('/register', AdminController.postRegisterAdmin)

//login
routes.get('/login', AdminController.renderLoginAdmin)
routes.post('/login', AdminController.postLoginAdmin)
// routes.post('/login/:id', postLoginAdmin)
// add Video
routes.get('/add-video', isLogin, VideoController.renderAddVideo)
routes.post('/add-video', isLogin, VideoController.postAddVideo)

// read Video
routes.get('/list-video', isLogin, VideoController.renderListVideo)

// update Vid
routes.get('/update-video/:id', isLogin, VideoController.renderFormUpdate)
routes.post('/update-video/:id', isLogin, VideoController.postUpdateVideo)

// delete video
routes.get('/delete-video/:id', isLogin, VideoController.deleteVideo)

module.exports = routes
