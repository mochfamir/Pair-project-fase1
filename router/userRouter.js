const routes = require('express').Router()
const Controller = require('../controllers/userController')

// login
routes.get('/', (req, res) => {
    res.render('user/MoviesToBuy',)
})
// // add Video
// routes.get('/admin/add-video', AdminController.renderAddVideo)
// routes.post('/admin/add-video', AdminController.postAddVideo)
//
// // read Video
// routes.get('/admin/list-video', AdminController.renderListVideo)
//
// // update Vid
// routes.get('/admin/update-video/:id', AdminController.renderFormUpdate)
// routes.post('/admin/update-video/:id', AdminController.postUpdateVideo)
//
// // delete video
// routes.get('/admin/delete-video/:id', AdminController.deleteVideo)

module.exports = routes

// {data:[{id:1,title:'dota',link:'https://www.youtube.com/embed/l2PDjG8q23Y'},
// {id:2,title:'dota',link:'https://www.youtube.com/embed/TgO0IReY3-U'},{id:3,title:'dota',link:'https://www.youtube.com/embed/l2PDjG8q23Y'}
