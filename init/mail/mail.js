const nodemailer = require('nodemailer')
const marked = require('marked');


const Mail  = module.exports = {};

Mail.sendMail=(username,obj)=>{

    let transporter = nodemailer.createTransport({
        host: 'smtp.qq.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: '847901578@qq.com', // generated ethereal user
            pass: 'yuqansprpzxobdce'  // generated ethereal password
        }
    });
    let mailOptions = {
        from: '847901578@qq.com', // sender address
        to: 'wurongliang@ofo.com', // list of receivers
        subject: 'weekly', // Subject line
        //text: obj, // plain text body
        html: marked('#### '+obj.date)+marked(obj.content), // html body
    };
    //console.log(marked(obj.content));
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
// Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))


})
};