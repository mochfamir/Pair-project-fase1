const { Admin, Video } = require('../models')

class AdminController {
    static renderAddVideo(req, res) {
        res.render('admin/addVideo')
    }
    static postAddVideo(req, res) {
        Video.create({
            title: req.body.title,
            link: req.body.link,
            price: req.body.price,
            rating: req.body.rating,
            popularity: req.body.popularity,
            description: req.body.description
        })
            .then(data => {
                res.redirect('/admin/list-video')
            })
            .catch(err => {
                res.send(err.message)
            })
    }
    static renderListVideo(req, res) {
        Video.findAll()
            .then(data => {
                res.render('admin/readAllVideo', { data })
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }
    static renderFormUpdate(req, res) {
        Video.findById(req.params.id)
            .then(video => {
                res.render('admin/updateVideo', { video })
            })
            .catch(err => {
                res.send(err.message)
            })
    }
    static postUpdateVideo(req, res) {
        Video.update({
            title: req.body.title,
            link: req.body.link,
            price: req.body.price,
            rating: req.body.rating,
            popularity: req.body.popularity,
            description: req.body.description
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.redirect('/admin/list-video')
            })
            .catch(err => {
                res.send(err.message)
            })
    }
    static deleteVideo(req, res) {
        Video.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('/admin/list-video')
        })
        .catch(err => {
            res.send(err.message)
        })
    }
}

module.exports = AdminController