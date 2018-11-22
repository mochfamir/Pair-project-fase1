const crypto = require('crypto')
function passwordEncryption(username, password) {
    let salt = username.slice(1,3)
    console.log(salt)
    let passwordHash = crypto.createHmac("sha256", salt)
        .update(password)
        .digest("hex")
    return {password: passwordHash, salt: salt}
}
module.exports = passwordEncryption