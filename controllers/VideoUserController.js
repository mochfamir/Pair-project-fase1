const { VideoUser, Video, User } = require('../models')

class VideoUserController {
    static postBuyLink(req, res) {
        VideoUser.create({
            UserId: req.session.user.id,
            VideoId: req.params.id
        })
        .then(data => {
            res.redirect('/user/home')
        })
        .catch(err => {
            res.send(err)
        })
    }
    static renderListVideo(req, res) {
        VideoUser.findAll({
            where: {
                UserId: req.session.user.id
            },
            include: [{
                model: Video
            }]
        })
        .then(data => {
            // res.send(data)
            User.findById(req.session.user.id)
            .then(user => {
                res.render('user/userVideo', { data, user })
            }) 
        })
        .catch(err => {
            res.send(err)
        })
        
    }
}

module.exports = VideoUserController