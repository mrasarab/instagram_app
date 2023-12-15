var nodemailer = require('nodemailer');
const dotenv = require('dotenv')
dotenv.config()

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});


const verificationEmail = async (client, subject, text) => {
    const mailOptions = {
        from: EMAIL_USER,
        to: client,
        subject: subject,
        text: text
      };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

}