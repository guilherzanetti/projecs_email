// const express = require('express');
// const nodemailer = require('nodemailer');

async function sendMail({ from, to, subject, text }) {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = { from, to, subject, text };

    const info = await transporter.sendMail(mailOptions);

    console.log(`Message sent: ${info.messageId}`);
  } catch (error) {
    console.log(`Error occurred: ${error.message}`);
  }
}

module.exports = sendMail;