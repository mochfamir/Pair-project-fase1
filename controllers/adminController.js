const { Admin, Video } = require('../models')
const passwordEncrypt = require('../helper/passwordEncrypt')
class AdminController {
    static renderRegisterAdmin(req, res) {
        res.render('admin/register')
    }
    static postRegisterAdmin(req, res) {
        Admin.create({
            username: req.body.username,
            email: req.body.email,
            password: passwordEncrypt(req.body.username, req.body.password),
            salt: salt
        })
            .then(data => {
                res.redirect('/admin/login')
            })
            .catch(err => {
                res.send(err.message)
            })
    }
    static renderLoginAdmin(req, res) {
        res.render('admin/login')
    }
    static postLoginAdmin(req, res) {
        Admin.findOne({
            where: {
                username: req.body.username
            }
        })
            .then(data => {
                if (!data) {
                    throw new Error('Username is wrong!')
                } else {
                    return Admin.findById(data.id)
                }
            })
            .then(data => {
                if (data.password == passwordEncrypt(data.username, req.body.password)) {
                    req.session.user = {
                        username: data.username
                    }
                    res.redirect('/admin/list-video')
                } else {
                    throw new Error('Password is wrong!')
                }
            })
            .catch(err => {
                res.send(err.message)
            })
    }
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
        Video.findOne({
            where: {
                id: req.params.id
            }
        })    
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