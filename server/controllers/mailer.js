import * as nodemailer from 'nodemailer';

export const sendMail = async(req, res) => {
    console.log(req.body)
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            proxy: 'http://proxy.ilimbratskdok.local:3128',
            requireTLS: true,
            secure: false,
            tls: {
                rejectUnauthorized: false
            },
            auth: {
                user: process.env.MAIL_ADDR,
                pass: process.env.GOOGLE_PWD
            },
            logger: true,
            debug: true
        });
        let result = await transporter.sendMail({
            from: req.body.email,
            to: 'mikeber000@gmail.com',
            subject: 'Test message for portfolio',
            text: req.body.message + `\nОтправитель: ${req.body.name} ${req.body.email}`
        })
            // .then(() => res.json({message: {"ru": "Письмо отправлено. Скоро я с вами свяжусь", "en": "The letter has been sent. I'll contact you soon"}, res: result.messageId}))
            // .catch(() => {res.json({message: {"ru": "Ошибка при отправке письма", "en": "Error occured while sending email"}})})
        
        return res.json({message: {"ru": "Письмо отправлено. Скоро я с вами свяжусь", "en": "The letter has been sent. I'll contact you soon"}, res: result.messageId})
    } catch (error) {
        res.json({message: {"ru": "Ошибка при отправке письма", "en": "Error occured while sending email"}, error})
    }
}