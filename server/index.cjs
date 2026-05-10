require('dotenv').config({ path: require('path').join(__dirname, '.env') });
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// 联系表单限流
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

// ==================== 访问统计 ====================
const STATS_FILE = path.join(__dirname, 'stats.json');

function readStats() {
  try {
    if (fs.existsSync(STATS_FILE)) {
      return JSON.parse(fs.readFileSync(STATS_FILE, 'utf-8'));
    }
  } catch (e) { /* ignore */ }
  return [];
}

function appendStat(record) {
  const stats = readStats();
  stats.push(record);
  // 只保留最近 30 天的数据，避免文件过大
  const cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000;
  const filtered = stats.filter(s => s.time >= cutoff);
  fs.writeFileSync(STATS_FILE, JSON.stringify(filtered));
}

// 上报页面访问
app.post('/api/stats/track', (req, res) => {
  const { page } = req.body;
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  const ua = req.headers['user-agent'] || '';

  // 简单指纹：IP + UA 前缀（浏览器类型）用作 UV 估计
  const visitorId = ip + '|' + (ua.split(' ').slice(0, 2).join(' ') || '');

  const record = {
    time: Date.now(),
    page: page || '/',
    ip: ip,
    visitorId: visitorId,
    referrer: req.body.referrer || '',
    ua: ua.substring(0, 200),
  };

  appendStat(record);
  res.json({ success: true });
});

// 查询统计数据
app.get('/api/stats/overview', (req, res) => {
  const stats = readStats();
  const now = Date.now();
  const todayStart = new Date(new Date().toDateString()).getTime();

  // 总 PV
  const totalPV = stats.length;

  // 今日 PV
  const todayRecords = stats.filter(s => s.time >= todayStart);
  const todayPV = todayRecords.length;

  // 总 UV（去重 visitorId）
  const allVisitors = new Set(stats.map(s => s.visitorId));
  const totalUV = allVisitors.size;

  // 今日 UV
  const todayVisitors = new Set(todayRecords.map(s => s.visitorId));
  const todayUV = todayVisitors.size;

  // 最近 7 天每日 PV/UV 趋势
  const dailyTrend = [];
  for (let i = 6; i >= 0; i--) {
    const dayStart = new Date(new Date().toDateString()).getTime() - i * 24 * 60 * 60 * 1000;
    const dayEnd = dayStart + 24 * 60 * 60 * 1000;
    const dayRecords = stats.filter(s => s.time >= dayStart && s.time < dayEnd);
    const dayVisitors = new Set(dayRecords.map(s => s.visitorId));
    const date = new Date(dayStart);
    dailyTrend.push({
      date: `${date.getMonth() + 1}/${date.getDate()}`,
      pv: dayRecords.length,
      uv: dayVisitors.size,
    });
  }

  // 页面排行
  const pageCount = {};
  stats.forEach(s => {
    pageCount[s.page] = (pageCount[s.page] || 0) + 1;
  });
  const topPages = Object.entries(pageCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([page, count]) => ({ page, count }));

  res.json({
    totalPV,
    totalUV,
    todayPV,
    todayUV,
    dailyTrend,
    topPages,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
