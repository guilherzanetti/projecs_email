// const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'seuemail@gmail.com',
    pass: 'suasenha'
  }
});

const sendEmail = (to, subject, message) => {
  const mailOptions = {
    from: 'seuemail@gmail.com',
    to: to,
    subject: subject,
    text: message
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });
}

module.exports = { sendEmail };

function enviarOsEmails (){
  addEventListener('click', () => {
    innerWidth = d
  })
}
