import { motion } from 'framer-motion';
import {
  Cpu,
  FileText,
  Brain,
  Database,
  Network,
  Building2,
  Truck,
  Stethoscope,
  Scale,
  Factory,
  ChevronRight,
  Shield,
  BarChart3,
} from 'lucide-react';
import { Navbar, Footer } from '../components/layout';
import { Button } from '../components/ui';

const products = [
  {
    id: 'docpilot',
    icon: FileText,
    name: 'DocPilot (驭文)',
    subtitle: 'Agent-native IDP平台',
    tagline: '像Cursor改变编程一样，改变文档处理方式',
    description: '企业复杂文档的智能处理专家，一句话指令全自动处理。支持问答、抽取、审核、比对、总结、生成等12类任务，零样本实现任意场景的关键信息抽取。',
    features: [
      { title: 'Agent-native架构', desc: '自然语言对话，智能体自主编排工具' },
      { title: '12类任务统一', desc: '问答、抽取、审核、比对、总结一站式' },
      { title: '零代码切换', desc: '换规则文件即可适配新场景' },
      { title: '证据链机制', desc: '坐标级高亮溯源，结果可信可查' },
    ],
    scenes: [
      { icon: Building2, title: '金融服务', desc: '财报提取、风控审核' },
      { icon: Truck, title: '物流运输', desc: '提单处理、报关单据' },
      { icon: Stethoscope, title: '医疗健康', desc: '病历解析、处方识别' },
      { icon: Scale, title: '法律合规', desc: '合同审查、条款提取' },
    ],
    screenshots: [
      { src: '/images/products/DocPilot 驭文.png', alt: 'DocPilot 主界面' },
    ],
  },
  {
    id: 'tokenx',
    icon: Cpu,
    name: 'TokenX',
    subtitle: 'Agentic AI平台',
    tagline: '企业级智能体应用开发与部署底座',
    description: '构建、管理和编排各类Agentic AI应用的底层技术平台。支持Chatbot、Workflow、Agent、Chatflow等多种应用形态，让AI赋能千行百业。',
    features: [
      { title: '多应用形态', desc: '支持Chatbot、Workflow、Agent' },
      { title: '可视化编排', desc: '低代码/自然语言构建' },
      { title: '多模型支持', desc: '阿里Qwen、智谱GLM等' },
      { title: '企业级安全', desc: '私有化部署、权限管理' },
    ],
    scenes: [
      { icon: Building2, title: '企业服务', desc: '客服机器人、知识库' },
      { icon: Factory, title: '生产调度', desc: '智能排产、库存管理' },
      { icon: BarChart3, title: '数据分析', desc: 'BI报表、智能洞察' },
      { icon: Shield, title: '风控合规', desc: '风险预警、合规检查' },
    ],
    screenshots: [
      { src: '/images/products/TokenX 平台应用界面.png', alt: '可视化编排' },
    ],
  },
];

const engines = [
  {
    id: 'text-intelligence',
    icon: Brain,
    name: '多模态大模型文本智能引擎',
    description: '克服高噪、水印等干扰，高精度解析手写、印章、复杂表格，将非标文档转化为结构化数据，抽取准确率达95%+。',
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    id: 'knowledge-engine',
    icon: Network,
    name: '多模态知识引擎',
    description: '融合图文、报表与行业专家经验，构建支持动态演进的企业级知识图谱，实现知识的精准召回与溯源。',
    gradient: 'from-purple-600 to-pink-500',
  },
  {
    id: 'data-intelligence',
    icon: Database,
    name: '数据智能（NL2SQL）引擎',
    description: '支持业务人员以自然语言交互300+类异构数据库，结合专有RAG技术与Schema训练，实现复杂查询与动态图表生成。',
    gradient: 'from-indigo-600 to-blue-500',
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">产品与服务</h1>
              <p className="text-xl text-gray-400">从底层引擎到行业应用，全栈式Agentic AI解决方案</p>
            </motion.div>
          </div>
        </section>

        {/* Products - Left Text, Right Image */}
        {products.map((product, index) => {
          const Icon = product.icon;
          const isEven = index % 2 === 0;

          return (
            <section key={product.id} id={product.id} className="py-20 bg-slate-900">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                  <div className="inline-flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${product.gradient} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-purple-400 text-sm">{product.subtitle}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">{product.name}</h2>
                  <p className="text-purple-300 mb-4">{product.tagline}</p>
                  <p className="text-gray-400 max-w-2xl mx-auto">{product.description}</p>
                </motion.div>

                {/* Left Text, Right Image */}
                <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mb-16 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Left: Text */}
                  <motion.div initial={{ opacity: 0, x: isEven ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-[45%] w-full">
                    <div className="space-y-3 mb-8">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="bg-slate-800/50 rounded-xl p-4 border border-white/5 hover:border-purple-500/30 transition-colors">
                          <h4 className="text-white font-medium mb-1">{feature.title}</h4>
                          <p className="text-gray-500 text-sm">{feature.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="primary" onClick={() => window.location.href = '/contact#apply'}>预约演示</Button>
                      <Button variant="outline" onClick={() => window.location.href = '/solutions'}>查看方案</Button>
                    </div>
                  </motion.div>

                  {/* Right: Image with light background - single wide image */}
                  <motion.div initial={{ opacity: 0, x: isEven ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-[60%] w-full">
                    <div className="bg-slate-50 rounded-2xl p-3 lg:p-4">
                      <div className="relative rounded-xl overflow-hidden shadow-sm">
                        <img src={product.screenshots[0]?.src} alt={product.screenshots[0]?.alt} className="w-full h-auto" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Industry Scenes */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                    行业应用
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {product.scenes.map((scene, idx) => {
                      const SceneIcon = scene.icon;
                      return (
                        <div key={idx} className="bg-slate-800/30 rounded-lg p-3 border border-white/5">
                          <SceneIcon className="w-6 h-6 text-purple-400 mb-2" />
                          <h4 className="text-white text-sm font-medium">{scene.title}</h4>
                          <p className="text-gray-500 text-xs">{scene.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </section>
          );
        })}

        {/* Three Core Engines */}
        <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-3">三大底层能力引擎</h2>
              <p className="text-gray-400">提供从文档理解到知识构建、数据分析的全栈能力支撑</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {engines.map((engine, index) => {
                const Icon = engine.icon;
                return (
                  <motion.div key={engine.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-slate-800/50 rounded-2xl p-6 border border-white/5 hover:border-purple-500/30 transition-all">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${engine.gradient} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{engine.name}</h3>
                    <p className="text-gray-400 text-sm">{engine.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Deploy & Service */}
        <section className="py-16 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">部署方式与服务体系</h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="rounded-xl overflow-hidden border border-white/10">
              <img src="/images/products/部署方式、集成能力与服务体系.png" alt="部署方式" className="w-full" />
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-purple-900/40 to-blue-900/40">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">立即体验智能体的强大能力</h2>
            <p className="text-gray-300 mb-6">提交您的需求，获取专属解决方案和免费试用机会</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="primary" size="lg" onClick={() => window.location.href = '/contact#apply'}>申请试用 <ChevronRight className="w-5 h-5 ml-1" /></Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href = '/contact'}>联系我们</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
