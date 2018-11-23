const accountSid = 'ACbeb6590a0c301aeb38a23e9358bfdd9c'; 
const authToken = 'c6c2132f06742eb3a8a970db28e4fbe4'; 
const client = require('twilio')(accountSid, authToken); 
function sms(number, msg) {
    client.messages 
          .create({ 
             body: msg, 
             from: '+18302153894',       
             to: number 
           }) 
          .then(message => console.log(message.sid)) 
          .done();
}
// sms(089628100755, 1)
module.exports = sms