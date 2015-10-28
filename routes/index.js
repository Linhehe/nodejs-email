var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// ******* 参考资料 *******
// www.lillansin.com/node-js-使用-qq邮箱发送邮件.html (主要)
// blog.fens.me/nodejs-email-nodemailer (次要)

var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer/node_modules/nodemailer-smtp-transport');

// 开启一个 SMTP 连接池
var transport = nodemailer.createTransport(smtpTransport({
  host: "smtp.qq.com", // 主机
  secure: true, // 使用 SSL
  port: 465, // SMTP 端口
  auth: {
    user: "2109820036@qq.com", // 账号
    pass: "*******" // 此处必须是qq邮箱的独立密码，否则链接失败
  }
}));

// 设置邮件内容
var mailOptions = {
  from: "2109820036@qq.com", // 此处必须是发件邮箱的地址，否则报错
  to: "1215634430@qq.com", // 收件列表
  subject: "Hello world", // 标题
  html: "<b>thanks a for visiting!</b> 世界，你好！" // html 内容
};

// 发送邮件
transport.sendMail(mailOptions, function(error, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(response);
  }
  transport.close(); // 如果没用，关闭连接池
});

module.exports = router;
