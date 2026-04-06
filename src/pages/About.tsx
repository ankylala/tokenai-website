import { motion } from 'framer-motion';
import { Navbar, Footer } from '../components/layout';
import {
  Building2,
  MapPin,
  Users,
  Globe,
  Layers,
  Award,
  Shield,
  Server,
  ChevronRight,
} from 'lucide-react';

const keyNumbers = [
  { icon: Building2, label: '成立时间', value: '2024 年 10 月' },
  { icon: MapPin, label: '总部', value: '北京' },
  { icon: Users, label: '头部客户', value: '5+ 个' },
  { icon: Globe, label: '覆盖行业', value: '金融、司法、通信、能源、专业服务' },
  { icon: Layers, label: '产品线', value: 'DocPilot · TokenX · 数据智能' },
  { icon: Award, label: '知识产权', value: '多篇国家发明专利 + 软件著作权' },
  { icon: Server, label: '信创适配', value: '华为昇腾 · 海光 DCU · 阿里 PPU' },
  { icon: Shield, label: '部署方式', value: '100% 私有化部署' },
];

const milestones = [
  { date: '2024.10', title: 'TokenAI 北京成立' },
  { date: '2025.03', title: '首款多模态大模型文本智能产品上线，取得多篇知识产权著作' },
  { date: '2025.05', title: '获得天使轮投资，中标能源和金融行业首批客户' },
  { date: '2025.06', title: 'TokenX 企业级智能体编排平台正式发布' },
  { date: '2025.10', title: '数据智能引擎和知识引擎上线，获得多篇国家发明专利' },
  { date: '2026.03', title: 'DocPilot 发布，电力、金融、医药等多行业中标落地' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
                <span className="text-purple-300 text-sm font-medium tracking-wider">Trusted Judgment AI</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                TokenAI · 为高要求行业打造可信赖的 AI 专家
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                北京词元汇智科技有限公司（TokenAI）成立于 2024 年 10 月，专注于 Trusted Judgment AI——为金融、能源、司法、专业服务等高要求行业打造可信赖的 AI 专家。
              </p>
              <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
                我们的核心产品包括 DocPilot 智能体行业套件、TokenX Agentic AI 平台和数据智能引擎，已在中国铁塔、省级农商银行、国家电网、上海高级人民法院等头部机构中规模化落地。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Numbers */}
        <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-white mb-12 text-center">关键数字</motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyNumbers.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-slate-800/50 rounded-xl p-5 border border-white/5 hover:border-purple-500/30 transition-colors">
                  <item.icon className="w-6 h-6 text-purple-400 mb-3" />
                  <span className="text-gray-500 text-sm">{item.label}</span>
                  <p className="text-white font-medium mt-1">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-white mb-12 text-center">发展历程</motion.h2>
            <div className="relative pl-8 max-w-3xl mx-auto">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-purple-500/30" />
              <div className="space-y-0">
                {milestones.map((m, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative pb-8 last:pb-0">
                    <div className="absolute left-[-1.25rem] top-1.5 w-3 h-3 bg-purple-500 rounded-full border-2 border-slate-900" />
                    <div className="pl-4">
                      <span className="text-purple-400 font-medium text-sm">{m.date}</span>
                      <h3 className="text-white font-bold text-lg mt-1">{m.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20 bg-slate-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-white mb-6">愿景</h2>
              <p className="text-2xl md:text-3xl text-purple-300 font-medium leading-relaxed">
                让每一家高要求企业，都拥有可信赖的 AI 专业团队。
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-900/40 to-blue-900/40">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">让我们为您演示</h2>
            <p className="text-gray-300 mb-8">20 分钟了解 TokenAI 如何将您的研判与审查效率提升 6-10 倍。</p>
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-medium transition-all duration-300 shadow-lg shadow-purple-900/30 inline-flex items-center" onClick={() => window.location.href = '/contact#apply'}>
              预约产品演示 <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
