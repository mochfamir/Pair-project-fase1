const { User } = require('../models')
const passwordEncrypt = require('../helper/passwordEncrypt')
const topUp = require('../helper/topUp')
const sms = require('../helper/sendSms')
class UserController {
  static renderRegisterUser(req, res) {
    res.render('user/register')
  }
  static postRegisterUser(req, res) {
    User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: passwordEncrypt(req.body.first_name, req.body.password).password,
      phone: req.body.phone,
      birthday: req.body.birthday,
      salt: passwordEncrypt(req.body.first_name, req.body.password).salt
    })
      .then(data => {
        res.redirect('/user/login')
      })
      .catch(err => {
        res.send(err.message)
      })
  }
  static renderLoginUser(req, res) {
    res.render('user/login')
  }
  static postLoginUser(req, res) {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(data => {
        if (!data) {
          throw new Error('Email is wrong!')
        } else {
          return User.findById(data.id)
        }
      })
      .then(data => {
        if (data.password == passwordEncrypt(data.first_name, req.body.password).password) {
          req.session.user = {
            id: data.id,
            username: data.first_name
          }
          // res.send(data)
          res.redirect('/user/home')
        } else {
          throw new Error('Password is wrong!')
        }
      })
      .catch(err => {
        res.send(err)
      })
  }
  static renderTopup(req, res) {
    res.render('user/topupbalance')
  }
  static postTopup(req, res) {
    User.findById(req.session.user.id)
      .then(data => {
        // res.send(data)
        data.balance += Number(req.body.balance)
        sms(req.body.phone, `Topup berhasil!`)
        return data.save()
      })
      .then(() => {
        res.redirect('/user/home')
      })
      .catch(err => {
        res.send(err)
      })
  }



}

module.exports = UserController