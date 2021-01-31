function isLogin(req, res, next) {
    if (req.session.user) {
        next()
    } else {
        throw new Error("You must login!")
    }
}

module.exports = isLogin