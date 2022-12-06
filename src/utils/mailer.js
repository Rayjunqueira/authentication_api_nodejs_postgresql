const nodemailer = require('nodemailer');

const port = process.env.EMAIL_PORT;

const sendEmail = async ({from, to, subject, text, html}) => {
    try {
        const transport = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: port,
            auth: {
                user: process.env.EMAIL_AUTH_USER,
                pass: process.env.EMAIL_AUTH_PASS,
            }
        });

        await transport.sendMail({
            from: from,
            to: to,
            subject: subject,
            text: text,
            html: html,
        });

        console.log('Email send succesfully');
 
    } catch (err) {
        console.log(err);
    }
}

module.exports = sendEmail; 