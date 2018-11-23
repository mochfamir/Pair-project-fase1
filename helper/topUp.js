let nodemailer = require('nodemailer');
function topup(email, topup) {
console.log(email, topup)
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }
});

var mailOptions = {
  from: 'faishalkings@gmail.com',
  to: email,
  subject: `Anda telah melakukan top up sebesar Rp.${topup}`,
  text: 'mail'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

module.exports = topup