import * as nodemailer from 'nodemailer';

export const sendMail = async(req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_ADDR,
                pass: process.env.GOOGLE_PWD
            },
            debug: true,
            logger: true,
        });
        transporter.sendMail({
            from: req.body.email,
            to: 'mikeber000@gmail.com',
            subject: 'Message from portfolio',
            text: req.body.message + `\nОтправитель: ${req.body.name} ${req.body.email}`
        })
        .then((result) => res.json({message: {"ru": "Письмо отправлено. Скоро я с вами свяжусь", "en": "The letter has been sent. I'll contact you soon"}, success: result.messageId}))
        .catch((error) => res.json({message: {"ru": "Ошибка при отправке письма", "en": "Error occured while sending email"}, error}))
    } catch (error) {
        res.json({message: {"ru": "Ошибка при отправке письма", "en": "Error occured while sending email"}, error})
    }
}