# TokenAI官网

北京词元汇智科技有限公司官方网站

## 🚀 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite 5
- **样式方案**: Tailwind CSS 3.4
- **路由管理**: React Router DOM 7
- **动画效果**: Framer Motion 12
- **图标库**: Lucide React
- **表单处理**: React Hook Form

## 📦 项目结构

```
tokenai-website/
├── src/
│   ├── components/
│   │   ├── layout/          # 布局组件（Navbar, Footer）
│   │   ├── ui/              # UI组件（Button, Card, Input, Modal, CustomerServiceButton）
│   │   └── sections/        # 页面区块组件（Hero, Products, Solutions, Timeline, Contact）
│   ├── pages/               # 页面组件（Home, About, Products, Solutions）
│   ├── utils/               # 工具函数（constants, api）
│   ├── types/               # TypeScript类型定义
│   └── App.tsx              # 应用入口
├── public/                  # 静态资源
└── index.html              # HTML模板

```

## 🎨 设计主题

- **核心主题**: 深色背景 + 紫色渐变科技风格
- **主色系**:
  - 深紫色: #6B2D8F, #8B3DAF
  - 亮紫色: #A855F7, #C084FC
  - 深色背景: #0A0E27, #0F1629, #151B32
- **辅助色**: 青色 #00D4FF, #0EA5E9

## 📄 页面列表

- `/` - 首页（Home）
- `/about` - 公司介绍页（About）
- `/products` - 产品详情页（Products）
- `/solutions` - 解决方案页（Solutions）

## 🛠️ 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## ✨ 核心功能

### 1. 响应式设计
- 移动端优先设计
- 完美适配桌面和移动设备
- 流畅的响应式导航栏

### 2. 动画效果
- 滚动渐入动画
- 悬停交互效果
- 页面切换过渡
- 紫色发光效果

### 3. 表单功能
- 产品演示/试用申请表单
- 实时表单验证
- 错误提示和成功提示
- 手机号和邮箱格式验证

### 4. 在线客服
- 浮动客服按钮
- 多种联系方式（在线客服、电话、邮件）
- 平滑的展开/收起动画

### 5. 性能优化
- 路由懒加载
- 代码分割
- 资源压缩
- 生产环境优化

## 📊 构建产物

经过优化的生产构建：

- **CSS**: 30.45 KB (gzip: 5.74 KB)
- **JavaScript**:
  - vendor-react: 176.86 KB (gzip: 58.01 KB)
  - vendor-motion: 128.77 KB (gzip: 42.41 KB)
  - vendor-ui: 42.15 KB (gzip: 12.17 KB)
  - 页面组件: 按需加载

## 🚢 部署说明

### 部署到静态托管

1. 构建生产版本:
```bash
npm run build
```

2. 将 `dist/` 目录部署到静态托管服务（如 Vercel, Netlify, GitHub Pages）

### 部署到CDN

建议使用 EdgeOne Pages 或其他CDN服务进行部署，以获得更好的访问速度和稳定性。

## 📝 TODO

- [ ] 集成实际的后端API
- [ ] 集成第三方客服系统（如Intercom、美洽）
- [ ] 添加网站分析（如Google Analytics）
- [ ] 添加更多页面（博客、案例等）
- [ ] 国际化支持（i18n）

## 📧 联系方式

- 公司: 北京词元汇智科技有限公司
- 邮箱: contact@tokenai.com
- 电话: 400-XXX-XXXX

---

Copyright © 2024-2026 北京词元汇智科技有限公司. All rights reserved.
