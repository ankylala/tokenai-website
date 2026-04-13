import { motion } from 'framer-motion';
import { Layers, Workflow, FileSearch, Shield, Gavel, Database, BrainCircuit, Table, Network, ArrowRight } from 'lucide-react';
import { Card, CardContent, Button } from '../ui';

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
    description: '一句话指令，全自动处理。像 Cursor 改变编程一样，改变文档处理方式。用户只需通过自然语言对话，即可完成复杂文档的解析、抽取、审核、对比和报告生成——从小时级缩短至分钟级',
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
        name: '多模态大模型文本智能',
        icon: FileSearch,
        desc: '克服高噪、水印等干扰，高精度解析手写、印章、复杂表格，将非标文档转化为结构化数据（抽取准确率达 98%+）。',
      },
      {
        name: '多模态知识引擎',
        icon: Network,
        desc: '融合图文、报表与行业专家经验（Know-How），构建支持动态演进的企业级知识图谱。',
      },
      {
        name: '数据智能（NL2SQL）引擎',
        icon: Database,
        desc: '打破底层数据壁垒，支持业务人员通过自然语言跨越多类型异构数据库进行自助查询。依托专有 RAG 与 Schema 联合训练，将复杂查询需求实时转化为动态图表。',
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

      <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
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
            TokenAI 为企业提供从"多模态底层模型"到"智能体业务中枢"，再到"顶层场景闭环"的全栈式可信 AI 解决方案
          </motion.p>
        </div>

        {/* 产品矩阵 - 整合展示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* 上半部分：TokenX + DocPilot 左右展示 */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* DocPilot */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-white/10 overflow-hidden">
              <div className="flex flex-col">
                {/* 文字部分 */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Layers className="w-6 h-6 text-pink-400" />
                    <span className="text-xs text-pink-400 font-medium">应用层</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">DocPilot (驭文)</h3>
                  <p className="text-sm text-gray-400 mb-4">{capabilities[0].description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {capabilities[0].agents?.slice(0, 3).map((agent, index) => (
                      <span key={index} className="bg-pink-500/10 text-pink-300 text-xs px-2 py-1 rounded">{agent.name}</span>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => window.location.href = '/products'}>
                    了解更多 <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
                {/* 图片部分 */}
                <div className="bg-slate-50 p-4 m-4 rounded-xl">
                  <img src="/images/products/DocPilot 驭文.png" alt="DocPilot" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>

            {/* TokenX */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-white/10 overflow-hidden">
              <div className="flex flex-col">
                {/* 文字部分 */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Workflow className="w-6 h-6 text-purple-400" />
                    <span className="text-xs text-purple-400 font-medium">中枢层</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">TokenX Agentic AI 平台</h3>
                  <p className="text-sm text-gray-400 mb-4">{capabilities[1].description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {capabilities[1].features?.slice(0, 4).map((feature, index) => (
                      <span key={index} className="bg-purple-500/10 text-purple-300 text-xs px-2 py-1 rounded">{feature}</span>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => window.location.href = '/products'}>
                    了解更多 <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
                {/* 图片部分 */}
                <div className="bg-slate-50 p-4 m-4 rounded-xl">
                  <img src="/images/products/TokenX 平台应用界面.png" alt="TokenX" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* 下半部分：三大引擎 */}
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-white/10 p-6">
            <div className="flex items-center gap-3 mb-5">
              <BrainCircuit className="w-6 h-6 text-purple-400" />
              <span className="text-xs text-purple-400 font-medium">基础层</span>
              <span className="text-white font-bold text-lg">三大底层能力引擎</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {capabilities[2].engines?.map((engine, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-purple-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <engine.icon className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium">{engine.name}</span>
                  </div>
                  <p className="text-xs text-gray-400">{engine.desc}</p>
                </div>
              ))}
            </div>
          </div>
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
            <button onClick={() => window.location.href = '/contact#apply'} className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-xl font-medium hover:shadow-glow transition-all duration-300 hover:scale-105">
              预约演示
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
