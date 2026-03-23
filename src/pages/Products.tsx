import { motion } from 'framer-motion';
import {
  Cpu,
  FileText,
  Brain,
  Database,
  Network,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Users,
} from 'lucide-react';
import { Navbar, Footer } from '../components/layout';
import { ProductGallery, VideoDemo } from '../components/ui';

const products = [
  {
    id: 'tokenx',
    icon: Cpu,
    name: 'TokenX',
    subtitle: 'Agentic AI平台',
    description:
      '企业级智能体应用开发与部署平台，构建、管理和编排各类Agentic AI应用的底层技术平台',
    gradient: 'from-purple-600 to-blue-500',
    features: [
      '支持Chatbot、Workflow、Agent、Chatflow等多种应用形态',
      '模型管理校准：支持阿里Qwen、智谱GLM、DeepSeek、Minimax等',
      '数据加载引擎：支持HTML、Markdown、PDF、Word、Excel、PPT',
      '智能体管理与编排：Agent调度、调优、模板',
      '场景化数据标注与模型微调SFT',
    ],
    highlights: [
      { icon: Zap, title: '快速开发', desc: '可视化编排，快速构建智能体应用' },
      { icon: Shield, title: '企业级', desc: '私有化部署、同城双活，安全可靠' },
      { icon: Users, title: '易协作', desc: '团队协作，权限管理，版本控制' },
    ],
    screenshots: [
      {
        src: '/images/products/TokenX 平台登录.png',
        alt: 'TokenX 平台登录界面',
        caption: 'TokenX 平台安全登录',
      },
      {
        src: '/images/products/TokenX 平台应用界面.png',
        alt: 'TokenX 平台应用界面',
        caption: '可视化工作编排界面',
      },
      {
        src: '/images/products/模型管理.png',
        alt: '模型管理界面',
        caption: '多模型管理与校准',
      },
      {
        src: '/images/products/TokenX平台架构与核心技术创新.png',
        alt: 'TokenX平台架构',
        caption: '平台架构与核心技术创新',
      },
      {
        src: '/images/products/工具.png',
        alt: '工具生态',
        caption: '丰富的工具生态',
      },
      {
        src: '/images/products/插件.png',
        alt: '插件系统',
        caption: '灵活的插件扩展',
      },
    ],
  },
  {
    id: 'docpilot',
    icon: FileText,
    name: 'DocPilot (驭文)',
    subtitle: 'Agent-native IDP平台',
    description:
      '企业复杂文档的智能处理专家，一句话指令全自动处理，像Cursor改变编程一样改变文档处理方式',
    gradient: 'from-pink-600 to-purple-500',
    features: [
      '12类任务统一平台：问答、抽取、审核、比对、总结、生成、翻译、编辑、脱敏、分类、归档、填表',
      'Agent-native架构：自然语言对话，智能体自主编排工具',
      '端到端交付结果：从理解需求到生成最终报告的全流程自动化',
      '人机协同：证据链机制，坐标级高亮溯源',
      '场景泛化：零代码切换，换规则文件即可适配新场景',
    ],
    highlights: [
      {
        icon: Zap,
        title: '全流程',
        desc: '12类文档处理任务一站式解决，无需切换工具',
      },
      { icon: Shield, title: '高精度', desc: '专业领域优化，证据链可溯源' },
      {
        icon: Users,
        title: '零门槛',
        desc: '自然语言交互，非技术人员也能像专家一样处理文档',
      },
    ],
    screenshots: [
      {
        src: '/images/products/DocPilot 驭文.png',
        alt: 'DocPilot 产品界面',
        caption: 'DocPilot (驭文) 主界面',
      },
      {
        src: '/images/products/DocPilot 页面.png',
        alt: 'DocPilot 操作页面',
        caption: '自然语言对话式文档处理',
      },
      {
        src: '/images/products/文档解析.png',
        alt: '文档解析效果',
        caption: '多模态文档智能解析',
      },
      {
        src: '/images/products/多模态文本解析.png',
        alt: '多模态文本解析',
        caption: '复杂文档深度解析',
      },
      {
        src: '/images/products/智能审核Agent核心能力.png',
        alt: '智能审核能力',
        caption: '智能审核Agent核心能力',
      },
      {
        src: '/images/products/中医药.png',
        alt: '中医药文档处理案例',
        caption: '中医药领域应用案例',
      },
    ],
  },
  {
    id: 'text-intelligence',
    icon: Brain,
    name: '多模态大模型文本智能',
    subtitle: '感知能力',
    description:
      '赋予智能体超越文本模态的感知与理解能力，深度解析合同、报告、图纸等复杂多模态数据',
    gradient: 'from-blue-600 to-purple-500',
    features: [
      '多模态文档解析：支持PDF、图片、扫描件等多种格式',
      '智能信息抽取：关键数据一键提取，精准溯源',
      '版面分析与结构理解：自动识别文档结构与内容',
      '合同文档智能理解：条款提取、风险识别',
      '复杂表格与图表识别：精准提取数据，自动生成分析图表',
    ],
    highlights: [
      { icon: Zap, title: '多模态', desc: '超越文本模态，深度解析各种复杂文档' },
      { icon: Shield, title: '高精度', desc: '专业领域模型优化，准确率行业领先' },
      { icon: Users, title: '灵活配置', desc: '支持自定义解析规则和抽取模板' },
    ],
    screenshots: [
      {
        src: '/images/products/TokenX 文档解析优势能力.png',
        alt: '文档解析优势能力',
        caption: '文档解析核心能力展示',
      },
      {
        src: '/images/products/多模态文本解析.png',
        alt: '多模态文本解析',
        caption: '多模态深度文本解析',
      },
    ],
  },
  {
    id: 'data-intelligence',
    icon: Database,
    name: '数据智能',
    subtitle: '分析能力',
    description:
      '提供强大的自然语言与数据库对话能力，将数据洞察的门槛降至最低',
    gradient: 'from-indigo-600 to-purple-500',
    features: [
      '自然语言查询数据库（NL2SQL）：零SQL基础即可查询分析',
      '统一语义层和指标字典：解决数据口径不统一问题',
      '智能数据分析：自动发现数据规律，生成洞察建议',
      '可视化报表生成：自动生成分析图表和深度分析报告',
      '多源数据整合：消除数据差异，统一数据治理',
    ],
    highlights: [
      { icon: Zap, title: '零门槛', desc: '自然语言交互，无需掌握SQL' },
      {
        icon: Shield,
        title: '智能分析',
        desc: 'AI自动化分析运营报表，快速定位问题',
      },
      {
        icon: Users,
        title: '决策支持',
        desc: '提升决策效率，优化运营，支撑长期发展',
      },
    ],
    screenshots: [],
  },
  {
    id: 'knowledge-engine',
    icon: Network,
    name: '多模态知识引擎',
    subtitle: '知识库与记忆',
    description:
      '为企业构建专属的知识大脑，融入多模态数据，是智能体决策的知识基石',
    gradient: 'from-purple-600 to-pink-500',
    features: [
      '多模态知识库构建：融入文本、图像、表格等多模态数据',
      '知识精准溯源：知识理解与精准召回，坐标级溯源',
      '知识图谱生成：关系图谱展示，动态更新数据库',
      '企业记忆系统：智能体长期记忆，持续学习优化',
      '知识更新维护：自动更新，保持知识库时效性',
    ],
    highlights: [
      { icon: Zap, title: '多模态', desc: '支持文档、图像、音视频等多模态知识' },
      {
        icon: Shield,
        title: '精准溯源',
        desc: '语义理解，智能匹配，证据链可追溯',
      },
      {
        icon: Users,
        title: '易维护',
        desc: '自动更新，持续学习，知识库动态演化',
      },
    ],
    screenshots: [
      {
        src: '/images/products/知识库.png',
        alt: '多模态知识引擎',
        caption: '多模态知识引擎界面',
      },
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                产品矩阵
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                从核心引擎到行业应用，全栈式Agentic AI产品体系
              </p>
            </motion.div>
          </div>
        </section>

        {/* Video Demo Section */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                产品演示
              </h2>
              <p className="text-gray-400">
                观看实际产品操作演示，了解智能文档处理的全流程
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <VideoDemo
                src="/videos/供应链金融审核 demo.mp4"
                title="供应链金融放款单据审核"
                description="基于DocPilot (驭文) 的智能审核完整流程演示"
                className="shadow-2xl shadow-purple-900/20"
              />
            </motion.div>
          </div>
        </section>

        {/* Products Detail */}
        <section className="py-24 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-32">
              {products.map((product, index) => {
                const Icon = product.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={product.id}
                    id={product.id}
                    variants={fadeInUp}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="scroll-mt-24"
                  >
                    {/* Product Info Grid */}
                    <div
                      className={`grid lg:grid-cols-2 gap-12 items-start mb-12 ${
                        isEven ? '' : 'lg:grid-flow-col-dense'
                      }`}
                    >
                      {/* Content */}
                      <div className={isEven ? '' : 'lg:col-start-2'}>
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.gradient} flex items-center justify-center shadow-lg`}
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                              {product.name}
                            </h2>
                            <p className="text-purple-400 text-lg">
                              {product.subtitle}
                            </p>
                          </div>
                        </div>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                          {product.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-3 mb-8">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-medium transition-all duration-300 shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50">
                          了解更多
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Highlights Card */}
                      <div className={isEven ? '' : 'lg:col-start-1'}>
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                          <h3 className="text-xl font-bold text-white mb-6">
                            核心优势
                          </h3>
                          <div className="space-y-6">
                            {product.highlights.map((highlight, idx) => {
                              const HighlightIcon = highlight.icon;
                              return (
                                <div key={idx} className="flex items-start gap-4">
                                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                    <HighlightIcon className="w-5 h-5 text-purple-400" />
                                  </div>
                                  <div>
                                    <h4 className="text-white font-medium mb-1">
                                      {highlight.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                      {highlight.desc}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Product Screenshots Gallery */}
                    {product.screenshots.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                      >
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                          <span className="w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
                          产品界面展示
                        </h3>
                        <ProductGallery
                          images={product.screenshots}
                          columns={product.screenshots.length <= 2 ? 2 : 3}
                          gap="lg"
                        />
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Deploy & Service Section */}
        <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                部署方式与服务体系
              </h2>
              <p className="text-gray-400 text-lg">
                灵活的部署方案，全方位的技术服务支持
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden border border-white/10 max-w-4xl mx-auto">
                <img
                  src="/images/products/部署方式、集成能力与服务体系.png"
                  alt="部署方式与服务体系"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                开始使用TokenAI产品
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                立即体验智能体的强大能力，为您的业务赋能
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-medium transition-all duration-300 shadow-lg shadow-purple-900/30">
                  申请试用
                </button>
                <button className="px-8 py-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-white font-medium border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  联系销售
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
