let nodemailer = require('nodemailer');
function topup(email, topup) {
console.log(email, topup)
var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'solderpanas@hotmail.com',
    pass: 'zxc130997'
  }
});

var mailOptions = {
  from: 'solderpanas@hotmail.com',
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