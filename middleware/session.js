function isLogin(req, res, next) {
    console.log(req.session.user)
    if (req.session.user) {
        next()
    } else {
        throw new Error("You must login!")
    }
}

module.exports = isLogin