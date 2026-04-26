require('dotenv').config({ path: require('path').join(__dirname, '.env') });
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: { success: false, message: '提交过于频繁，请稍后再试。' },
});
app.use('/api/contact', limiter);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.qq.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify(function (error) {
  if (error) {
    console.log('SMTP连接失败:', error);
  } else {
    console.log('SMTP连接成功，服务器就绪');
  }
});

app.post('/api/contact', (req, res) => {
  const { name, company, phone, email, industry, message, requirement } = req.body;

  const mailOptions = {
    from: `"${process.env.MAIL_FROM_NAME || 'TokenAI官网'}" <${process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO || 'linliang@token-ai.com.cn',
    subject: `新咨询：${name} - ${company}`,
    html: `
      <h2>新客户咨询</h2>
      <p><strong>姓名：</strong>${name}</p>
      <p><strong>公司：</strong>${company}</p>
      <p><strong>电话：</strong>${phone}</p>
      <p><strong>邮箱：</strong>${email}</p>
      <p><strong>行业：</strong>${industry || requirement || '未填写'}</p>
      <p><strong>留言：</strong>${message || requirement || '未填写'}</p>
    `,
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