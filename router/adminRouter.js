const routes = require('express').Router()
const AdminController = require('../controllers/adminController')
const isLogin = require('../middleware/session')
// register
routes.get('/register', AdminController.renderRegisterAdmin)
routes.post('/register', AdminController.postRegisterAdmin)

//login
routes.get('/login', AdminController.renderLoginAdmin)
routes.post('/login', AdminController.postLoginAdmin)
// routes.post('/login/:id', postLoginAdmin)
// add Video
routes.get('/add-video', AdminController.renderAddVideo)
routes.post('/add-video', AdminController.postAddVideo)

// read Video
routes.get('/list-video', isLogin, AdminController.renderListVideo)

// update Vid
routes.get('/update-video/:id',  AdminController.renderFormUpdate)
routes.post('/update-video/:id', AdminController.postUpdateVideo)

// delete video
routes.get('/delete-video/:id', AdminController.deleteVideo)

module.exports = routes
