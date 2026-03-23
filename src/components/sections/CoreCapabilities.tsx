import { motion } from 'framer-motion';
import { Layers, Workflow, FileSearch, Shield, Gavel, Database, BrainCircuit, Table, Network } from 'lucide-react';
import { Card, CardContent } from '../ui';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const capabilities = [
  {
    id: 'docpilot',
    title: 'DocPilot 智能体行业套件',
    subtitle: '应用层',
    icon: Layers,
    description: '面向具体业务场景的成品 Agent，支持问答、抽取、比对等 12 类智能文档处理（IDP）任务',
    agents: [
      {
        name: '供应链与风控 Agent',
        icon: Shield,
        desc: '自动化处理发票、运单、签收单等单据，支持跨文档、多模态的逻辑交叉比对（如金额核对、印章校验），辅助识别虚假贸易与合规风险。',
      },
      {
        name: '智能合同审查 Agent',
        icon: FileSearch,
        desc: '快速提取长篇非标合同关键要素，结合企业业务规则，自动识别格式条款漏洞与商业风险，提升法务审查效率。',
      },
      {
        name: '招投标与合规审查 Agent',
        icon: Gavel,
        desc: '针对大篇幅卷宗或标书，进行资质核查、法条匹配与防串标分析，并输出支持精确溯源的审查报告。',
      },
    ],
  },
  {
    id: 'tokenx',
    title: 'TokenX Agentic AI 平台',
    subtitle: '中枢层',
    icon: Workflow,
    description: '企业级智能体编排底座。支持通过自然语言或低代码可视化方式构建 Agent 工作流，支持多角色协同、复杂逻辑推理（CoT）及外部业务系统（MCP/API/RPA）的无缝集成。',
    features: ['自然语言/低代码编排', '多角色协同', '复杂逻辑推理(CoT)', 'MCP/API/RPA集成'],
  },
  {
    id: 'engines',
    title: '三大底层能力引擎',
    subtitle: '基础层',
    icon: BrainCircuit,
    description: '提供从文档理解到知识构建、数据分析的全栈能力支撑',
    engines: [
      {
        name: '多模态大模型文本智能引擎',
        icon: FileSearch,
        desc: '克服高噪、水印等干扰，高精度解析手写、印章、复杂表格，将非标文档转化为结构化数据（抽取准确率达 95%+）。',
      },
      {
        name: '多模态知识引擎',
        icon: Network,
        desc: '融合图文、报表与行业专家经验（Know-How），构建支持动态演进的企业级知识图谱。',
      },
      {
        name: '数据智能（NL2SQL）引擎',
        icon: Database,
        desc: '支持业务人员以自然语言交互 300+ 类异构数据库。结合专有 RAG 技术与 Schema 训练，实现复杂查询与动态图表生成。',
      },
    ],
  },
];

export function CoreCapabilities() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-text-secondary">Full-stack Solution</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-gradient">核心产品能力</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-muted max-w-3xl mx-auto leading-relaxed"
          >
            TokenAI 为企业提供从底层算力引擎到顶层业务闭环的
            <span className="text-primary font-semibold">"全栈（Full-stack）"</span>
            智能体解决方案
          </motion.p>
        </div>

        {/* Architecture Overview */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Application Layer - DocPilot */}
          <motion.div variants={item}>
            <Card variant="gradient" className="overflow-hidden border-t-4 border-t-primary">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left: Title & Description */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-glow">
                        <Layers className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-xs text-primary font-medium uppercase tracking-wider">应用层</span>
                        <h3 className="text-2xl font-bold text-text-primary">DocPilot 智能体行业套件</h3>
                      </div>
                    </div>
                    <p className="text-text-muted leading-relaxed">
                      {capabilities[0].description}
                    </p>
                  </div>
                  
                  {/* Right: Agent Cards */}
                  <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {capabilities[0].agents?.map((agent, index) => (
                      <motion.div
                        key={agent.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                        className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/30 transition-colors">
                          <agent.icon className="w-5 h-5 text-primary-light" />
                        </div>
                        <h4 className="text-sm font-semibold text-text-primary mb-2">{agent.name}</h4>
                        <p className="text-xs text-text-muted leading-relaxed">{agent.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Middle Layer - TokenX */}
          <motion.div variants={item}>
            <Card variant="gradient" className="overflow-hidden border-t-4 border-t-cyan-500">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Left: Icon & Title */}
                  <div className="lg:w-1/3 text-center lg:text-left">
                    <div className="inline-flex items-center space-x-3 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
                        <Workflow className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <span className="text-xs text-cyan-400 font-medium uppercase tracking-wider">中枢层</span>
                        <h3 className="text-2xl font-bold text-text-primary">TokenX Agentic AI 平台</h3>
                      </div>
                    </div>
                    <p className="text-text-muted leading-relaxed">
                      {capabilities[1].description}
                    </p>
                  </div>
                  
                  {/* Right: Feature Tags */}
                  <div className="lg:w-2/3 flex flex-wrap justify-center lg:justify-end gap-3">
                    {capabilities[1].features?.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * index }}
                        className="bg-gradient-to-r from-cyan-500/10 to-cyan-400/10 border border-cyan-500/20 rounded-lg px-4 py-3 flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                        <span className="text-sm text-cyan-100 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Foundation Layer - Three Engines */}
          <motion.div variants={item}>
            <Card variant="gradient" className="overflow-hidden border-t-4 border-t-purple-500">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-400 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                      <BrainCircuit className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs text-purple-400 font-medium uppercase tracking-wider">基础层</span>
                      <h3 className="text-2xl font-bold text-text-primary">三大底层能力引擎</h3>
                    </div>
                  </div>
                  <p className="text-text-muted max-w-2xl mx-auto">
                    {capabilities[2].description}
                  </p>
                </div>
                
                {/* Three Engines Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {capabilities[2].engines?.map((engine, index) => (
                    <motion.div
                      key={engine.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="bg-gradient-to-b from-white/5 to-transparent rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors group-hover:scale-110 transform duration-300">
                        <engine.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <h4 className="text-base font-semibold text-text-primary mb-3">{engine.name}</h4>
                      <p className="text-sm text-text-muted leading-relaxed">{engine.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-white/5 border border-white/10 rounded-2xl px-8 py-6">
            <div className="text-left">
              <p className="text-text-muted text-sm mb-1">想要了解更多产品能力？</p>
              <p className="text-text-primary font-medium">获取完整产品白皮书和技术文档</p>
            </div>
            <button className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-xl font-medium hover:shadow-glow transition-all duration-300 hover:scale-105">
              预约演示
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
