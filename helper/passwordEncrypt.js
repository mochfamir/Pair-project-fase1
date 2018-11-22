const crypto = require('crypto')
function passwordEncryption(username, password) {
    let salt = crypto.randomBytes(256).toString('hex')
    let passwordHash = crypto.createHmac("sha256", salt)
        .update(password)
        .digest("hex")
    return {password: passwordHash, salt: salt}
}
module.exports = passwordEncryption