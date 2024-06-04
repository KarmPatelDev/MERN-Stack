const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {

    //connect with smtp server
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'jordan.reilly72@ethereal.email',
            pass: 'KZMpcMKkAZAFwEbQf5'
        }
    });

    const info = await transporter.sendMail({
        from: '"Karm Patel" <karm@gmail.com>', // sender address
        to: "karmpatel@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b><i>Hello world?</i></b>", // html body
    });

    console.log("Message Sent: %s", info.messageId)
    res.send(info);
    
}

module.exports = sendMail;