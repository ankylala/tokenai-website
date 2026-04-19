import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Building2,
  User,
  Briefcase,
  FileText,
} from 'lucide-react';
import { Navbar, Footer } from '../components/layout';

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  industry: string;
  message: string;
}

const industries = [
  '金融',
  '医疗',
  '法律',
  '制造业',
  '政务',
  '零售电商',
  '能源',
  '其他',
];

const contactInfo = [
  {
    icon: MapPin,
    title: '北京办公地址',
    content: '北京市海淀区成府路45号中关村智造大街C座105B',
    subContent: '',
  },
  {
    icon: MapPin,
    title: '上海办公地址',
    content: '上海市浦东新区育仁路188弄1号18层1806室',
    subContent: '',
  },
  {
    icon: Mail,
    title: '商务邮箱',
    content: 'linliang@token-ai.com.cn',
    subContent: '7x24小时接收邮件',
  },
];

export default function Contact() {
  useEffect(() => {
    if (window.location.hash === '#apply') {
      const formSection = document.getElementById('apply');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    industry: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = '请输入姓名';
    }

    if (!formData.company.trim()) {
      newErrors.company = '请输入公司名称';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = '请输入联系电话';
    } else if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = '请输入有效的手机号';
    }

    if (!formData.email.trim()) {
      newErrors.email = '请输入邮箱地址';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // 模拟提交
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');

    // 重置表单
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      industry: '',
      message: '',
    });

    // 3秒后重置状态
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // 清除该字段的错误
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                联系我们
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                期待与您的合作，让我们一起探索AI智能体的无限可能
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-purple-500/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-purple-400 font-medium">{item.content}</p>
                    <p className="text-gray-400 text-sm mt-1">{item.subContent}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="apply" className="py-24 bg-slate-900/50">
          <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Left Side - Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="sticky top-24">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    产品咨询与试用申请
                  </h2>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    填写右侧表单，我们的专业顾问将在24小时内与您联系，
                    为您提供详细的产品介绍和定制化解决方案。
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">专业咨询</h4>
                        <p className="text-gray-400 text-sm">资深顾问一对一服务，深入了解您的业务需求</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">免费试用</h4>
                        <p className="text-gray-400 text-sm">申请产品试用，亲身体验智能体的强大能力</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">定制方案</h4>
                        <p className="text-gray-400 text-sm">根据您的行业特点，量身定制解决方案</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Contact */}
                  <div className="mt-12 p-6 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl border border-purple-500/20">
                    <h3 className="text-lg font-semibold text-white mb-4">快速联系</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      如果您有紧急需求，可以直接拨打我们的服务热线或发送邮件
                    </p>
                    <div className="space-y-3">
                      <a
                        href="mailto:linliang@token-ai.com.cn"
                        className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                        <span>linliang@token-ai.com.cn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5">
                  <h3 className="text-2xl font-bold text-white mb-6">填写咨询表单</h3>

                  {submitStatus === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-500" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-3">提交成功！</h4>
                      <p className="text-gray-300 mb-6">
                        感谢您的咨询，我们的专业顾问将在24小时内与您联系
                      </p>
                      <button
                        onClick={() => setSubmitStatus('idle')}
                        className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-colors"
                      >
                        继续填写
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name & Company */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            <User className="w-4 h-4 inline mr-2" />
                            姓名 *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg bg-slate-900/50 border ${
                              errors.name ? 'border-red-500' : 'border-white/10'
                            } text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all`}
                            placeholder="请输入您的姓名"
                          />
                          {errors.name && (
                            <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            <Building2 className="w-4 h-4 inline mr-2" />
                            公司名称 *
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg bg-slate-900/50 border ${
                              errors.company ? 'border-red-500' : 'border-white/10'
                            } text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all`}
                            placeholder="请输入公司名称"
                          />
                          {errors.company && (
                            <p className="mt-1 text-sm text-red-400">{errors.company}</p>
                          )}
                        </div>
                      </div>

                      {/* Phone & Email */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            <Phone className="w-4 h-4 inline mr-2" />
                            联系电话 *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg bg-slate-900/50 border ${
                              errors.phone ? 'border-red-500' : 'border-white/10'
                            } text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all`}
                            placeholder="请输入手机号"
                          />
                          {errors.phone && (
                            <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            <Mail className="w-4 h-4 inline mr-2" />
                            邮箱地址 *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg bg-slate-900/50 border ${
                              errors.email ? 'border-red-500' : 'border-white/10'
                            } text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all`}
                            placeholder="请输入邮箱地址"
                          />
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      {/* Industry */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          <Briefcase className="w-4 h-4 inline mr-2" />
                          所属行业
                        </label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-slate-800">请选择行业</option>
                          {industries.map((industry) => (
                            <option key={industry} value={industry} className="bg-slate-800">
                              {industry}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          <FileText className="w-4 h-4 inline mr-2" />
                          咨询内容
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                          placeholder="请描述您的需求或问题，我们将为您提供专业的解决方案..."
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-purple-900/30"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            提交中...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            提交咨询
                          </>
                        )}
                      </button>

                      <p className="text-center text-gray-400 text-sm">
                        提交即表示您同意我们的
                        <a href="/privacy" className="text-purple-400 hover:text-purple-300 mx-1">
                          隐私政策
                        </a>
                        和
                        <a href="/terms" className="text-purple-400 hover:text-purple-300 mx-1">
                          服务条款
                        </a>
                      </p>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 bg-slate-900">
          <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">公司位置</h2>
              <p className="text-gray-400">欢迎莅临参观指导</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-white/10 h-[400px] bg-slate-800/50"
            >
              {/* Placeholder for Map */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">北京总部</h3>
                  <p className="text-gray-400">北京市海淀区成府路45号中关村智造大街C座105B</p>
                  <p className="text-gray-500 text-sm mt-2">上海：上海市浦东新区育仁路188弄1号18层1806室</p>
                </div>
              </div>

              {/* Decorative Grid */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
