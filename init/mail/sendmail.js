const nodemailer = require('nodemailer')
const marked = require('marked');
const DBhandle = require('../sql/dbhandle');
const Mail = require('./mail');
let data;
const date = new Date();
    async function fn1() {
        data = await DBhandle.getData('ofo');
        //return data;

        let day = date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日';

        data = JSON.parse(data);
        for (let key in data) {
            if (data[key].split('$$$$$$')[1] === day) {
                let emailData = {};
                emailData.content = marked(data[key].split('$$$$$$')[0]);
                emailData.date = data[key].split('$$$$$$')[1];
                console.log(emailData);
                Mail.sendMail('ofo', emailData);
            }
        }
    }
    fn1();
