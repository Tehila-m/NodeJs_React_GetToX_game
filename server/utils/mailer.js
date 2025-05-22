const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: process.env.EMAIL_USER, // your Office365 email
    pass: process.env.EMAIL_PASS, // your Office365 password or app password
  },
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false, // Sometimes required with Office365
  },
});

async function sendWinnerMail(to, subject, html) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,
  };

  return transporter.sendMail(mailOptions);
}

module.exports = sendWinnerMail;