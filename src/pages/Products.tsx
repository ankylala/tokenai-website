import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Navbar, Footer } from '../components/layout';
import { Button } from '../components/ui';
import {
  FileText,
  Cpu,
  Brain,
  Network,
  Database,
  ArrowRight,
  CheckCircle,
  Building2,
  Globe,
  Scale,
  FileSearch,
  ShieldCheck,
  Zap,
  Users,
  Link,
  Layers,
} from 'lucide-react';

const docpilotScenes = [
  {
    icon: Building2,
    title: '供应链金融审核',
    desc: '保理融资、预付款融资的放贷材料审核。合同/发票/订单/物流单多文档交叉比对，33 条审核规则覆盖基础合规、交叉验证和风险预警。',
  },
  {
    icon: Globe,
    title: '国际贸易结算',
    desc: '信用证、托收等跨境结算单据的合规审核。多语言混合单据解析，信用证条款与运输单据交叉核验，UCP600 等国际规则匹配。',
  },
  {
    icon: Scale,
    title: '智能合同审查',
    desc: '长篇非标合同的条款审查与风险识别。50+ 条审查规则，多份合同条款一致性比对，审查结论精确溯源到原文位置。',
  },
  {
    icon: FileSearch,
    title: '招投标合规审查',
    desc: '大篇幅标书的资质核查与防串标分析。投标文件多维度合规校验，法律法规智能匹配，输出支持精确溯源的审查报告。',
  },
  {
    icon: ShieldCheck,
    title: '保险智能核赔',
    desc: '车损、医疗等多模态理赔审核。照片、收据、条款等多源数据综合分析，条款匹配与理赔理算建议。',
  },
];

const tokenxCapabilities = [
  { icon: Users, title: '多角色协同', desc: '多个 Agent 分工协作，完成复杂业务流程' },
  { icon: Brain, title: '复杂逻辑推理', desc: '支持多步推理（CoT），处理条件判断和交叉验证' },
  { icon: Zap, title: '工具调用', desc: 'Agent 可调用外部 API、数据库和业务系统' },
  { icon: Link, title: '系统集成', desc: '支持 MCP、API、RPA 等多种集成方式' },
  { icon: Layers, title: '场景可插拔', desc: '换规则包和知识库即切换场景，引擎不变' },
];

const engines = [
  {
    id: 'text-intelligence',
    icon: FileText,
    title: '多模态文本智能引擎',
    subtitle: '让 AI 看懂真实世界的文档',
    desc: '企业真实文档远比 PDF 文本复杂——手写批注、骑缝章、扭曲表格、水印干扰、扫描噪声。多模态文本智能引擎是 TokenAI 全栈架构的感知层，将非标文档转化为高质量结构化数据。',
    features: [
      '复杂版面解析：多栏、嵌套表格、跨页表格',
      '手写体识别：中英文手写批注、签名、手填表单',
      '印章与签章解析：骑缝章、多章重叠、印章遮盖',
      '高噪文档处理：水印、扫描倾斜、低分辨率',
      '多模态融合：图片、文本、表格、印章联合理解',
    ],
  },
  {
    id: 'knowledge-engine',
    icon: Network,
    title: '多模态知识引擎',
    subtitle: '让企业知识活起来',
    desc: '将分散的图文、报表和专家经验构建为动态演进的企业级知识体系，让 AI 研判有据可依。',
    features: [
      '知识图谱构建：自动抽取实体和关系',
      '多模态融合：图文、表格、报表统一管理',
      '动态演进：随新文档、新规则持续更新',
      '行业 Know-How 融合：专家经验编码为结构化知识',
      '精准检索与推理：基于知识图谱的语义检索',
    ],
  },
  {
    id: 'data-intelligence',
    icon: Database,
    title: '数据智能引擎',
    subtitle: '用自然语言查询业务数据',
    desc: '让业务人员直接用自然语言提问，系统自动生成 SQL 查询并返回结果，无需依赖数据分析师。',
    features: [
      '支持 300+ 类异构数据库',
      '自然语言到 SQL 的精准转换',
      '自动生成分析报表和可视化图表',
      '已在中国铁塔集团级部署，覆盖亿级数据',
    ],
  },
];

export default function Products() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-white mb-6">
              全栈可信赖 AI 专家平台
            </motion.h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              从底层能力引擎到行业应用套件，TokenAI 提供打造可信赖 AI 专家的完整技术栈。
            </p>
          </div>
        </section>

        {/* Architecture Diagram */}
        <section className="py-16 bg-slate-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
              <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 rounded-xl p-6 border border-pink-500/20 text-center">
                <span className="text-pink-400 text-sm font-medium">应用层</span>
                <h3 className="text-xl font-bold text-white mt-1">DocPilot 智能体行业套件</h3>
                <p className="text-gray-400 text-sm mt-1">面向具体场景的 AI 研判 Agent</p>
              </div>
              <div className="flex justify-center"><div className="w-px h-6 bg-purple-500/50" /></div>
              <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-6 border border-purple-500/20 text-center">
                <span className="text-purple-400 text-sm font-medium">中枢层</span>
                <h3 className="text-xl font-bold text-white mt-1">TokenX Agentic AI 平台</h3>
                <p className="text-gray-400 text-sm mt-1">Agent 编排、多角色协同、工具调用</p>
              </div>
              <div className="flex justify-center"><div className="w-px h-6 bg-blue-500/50" /></div>
              <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl p-6 border border-blue-500/20 text-center">
                <span className="text-blue-400 text-sm font-medium">基础层</span>
                <h3 className="text-xl font-bold text-white mt-1">三大底层能力引擎</h3>
                <p className="text-gray-400 text-sm mt-1">多模态文本智能 · 知识引擎 · 数据智能</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* DocPilot */}
        <section id="docpilot" className="py-24 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <FileText className="w-8 h-8 text-pink-400" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">DocPilot — 面向行业场景的 AI 研判 Agent</h2>
              </div>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                不是文档处理工具，是能独立执行专业判断流程的 AI 专家。每个 Agent 针对一个行业场景，内置行业规则包，开箱即用。
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {docpilotScenes.map((scene, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-800/50 rounded-xl p-6 border border-white/5 hover:border-pink-500/30 transition-all group">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-500/20 transition-colors">
                    <scene.icon className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{scene.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{scene.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TokenX */}
        <section id="tokenx" className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <Cpu className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">TokenX — 企业级智能体编排平台</h2>
              </div>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                DocPilot 背后的编排引擎。支持多角色协同、复杂逻辑推理和外部系统集成，是构建企业级 AI 应用的底座。
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tokenxCapabilities.map((cap, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-900 rounded-xl p-6 border border-white/5 hover:border-purple-500/30 transition-all group">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                    <cap.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{cap.title}</h3>
                  <p className="text-gray-400 text-sm">{cap.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Engines */}
        {engines.map((engine, index) => (
          <section key={engine.id} id={engine.id} className={`py-24 ${index % 2 === 0 ? 'bg-slate-900' : 'bg-slate-950'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <div className="inline-flex items-center gap-3 mb-4">
                  <engine.icon className="w-8 h-8 text-blue-400" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{engine.title}</h2>
                </div>
                <p className="text-lg text-blue-400 mb-4">{engine.subtitle}</p>
                <p className="text-gray-400 max-w-3xl mx-auto">{engine.desc}</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {engine.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                  <h4 className="text-white font-bold mb-4">关键指标</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between"><span className="text-gray-400">抽取准确率</span><span className="text-white font-medium">95%+</span></li>
                    <li className="flex justify-between"><span className="text-gray-400">支持文档类型</span><span className="text-white font-medium">{engine.id === 'text-intelligence' ? '合同、发票、报表、标书等' : engine.id === 'knowledge-engine' ? '政策法规、合同、行业标准' : '经营数据、业务报表'}</span></li>
                    <li className="flex justify-between"><span className="text-gray-400">支持格式</span><span className="text-white font-medium">{engine.id === 'text-intelligence' ? 'PDF、图片、扫描件、Office' : engine.id === 'knowledge-engine' ? '结构化图谱、非结构化文档' : '300+ 类数据库'}</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-900/40 to-blue-900/40">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">让我们为您演示</h2>
            <p className="text-gray-300 mb-8">20 分钟了解 TokenAI 如何将您的研判与审查效率提升 6-10 倍。</p>
            <Button variant="primary" size="lg" onClick={() => window.location.href = '/contact#apply'}>
              预约产品演示 <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
