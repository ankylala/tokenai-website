const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  port: 587,
  secure: false,
  auth: {
    user: 'anky_85@qq.com',
    pass: 'yatpbjelgdnmdjcd'
  }
});

transporter.verify(function(error, success) {
  if (error) {
    console.log('SMTP连接失败:', error);
  } else {
    console.log('SMTP连接成功');
  }
});

app.post('/api/contact', (req, res) => {
  const { name, company, phone, email, industry, message } = req.body;

  console.log('收到请求:', req.body);

  const mailOptions = {
    from: '"TokenAI官网" <anky_85@qq.com>',
    to: 'linliang@token-ai.com.cn',
    subject: `新咨询：${name} - ${company}`,
    html: `
      <h2>新客户咨询</h2>
      <p><strong>姓名：</strong>${name}</p>
      <p><strong>公司：</strong>${company}</p>
      <p><strong>电话：</strong>${phone}</p>
      <p><strong>邮箱：</strong>${email}</p>
      <p><strong>行业：</strong>${industry || '未填写'}</p>
      <p><strong>留言：</strong>${message || '未填写'}</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('发送失败:', error);
      res.status(500).json({ success: false, message: '提交失败，请稍后重试。' });
    } else {
      console.log('发送成功:', info.messageId);
      res.json({ success: true, message: '提交成功！我们会尽快与您联系。' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
