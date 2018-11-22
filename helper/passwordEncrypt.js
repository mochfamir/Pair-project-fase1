const crypto = require('crypto')
function passwordEncryption(username, password) {
    let salt = username
    salt = salt.slice(1, 5)
    let passwordHash = crypto.createHmac("sha256", salt)
        .update(password)
        .digest("hex")
    return passwordHash
}
module.exports = passwordEncryption