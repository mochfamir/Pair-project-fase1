const routes = require('express').Router()
const AdminController = require('../controller/adminController')

// login
routes.get('/admin', (req, res) => {
    res.render('admin/login')
})
// add Video
routes.get('/admin/add-video', AdminController.renderAddVideo)
routes.post('/admin/add-video', AdminController.postAddVideo)

// read Video
routes.get('/admin/list-video', AdminController.renderListVideo)

// update Vid
routes.get('/admin/update-video/:id', AdminController.renderFormUpdate)
routes.post('/admin/update-video/:id', AdminController.postUpdateVideo)

// delete video
routes.get('/admin/delete-video/:id', AdminController.deleteVideo)

module.exports = routes