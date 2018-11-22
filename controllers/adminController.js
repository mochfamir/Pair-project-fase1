const { Admin } = require('../models')
const passwordEncrypt = require('../helper/passwordEncrypt')
class AdminController {
    static renderRegisterAdmin(req, res) {
        res.render('admin/register')
    }
    static postRegisterAdmin(req, res) {
        Admin.create({
            username: req.body.username,
            email: req.body.email,
            password: passwordEncrypt(req.body.username, req.body.password).password,
            salt: passwordEncrypt(req.body.username, req.body.password).salt
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
                if (data.password == passwordEncrypt(data.username, req.body.password).password) {
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
    
}

module.exports = AdminController