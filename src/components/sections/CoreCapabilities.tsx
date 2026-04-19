import { motion } from 'framer-motion';
import { Layers, Workflow, FileSearch, Shield, Gavel, Database, BrainCircuit, Table, Network, ArrowRight, CheckCircle } from 'lucide-react';
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
            <span className="text-gradient">从文档到决策，全栈可信 AI</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-muted max-w-4xl mx-auto leading-relaxed"
          >
            法务合同审查、保险核赔、银行放贷审核、采购穿透式监管——上一代 AI 仅解决了"提取"，TokenAI 解决更高价值的"研判"。三层架构协同，让每个结论可追溯、可审计、可复核。
          </motion.p>
        </div>

        {/* Key Numbers Band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 py-6 border-y border-white/10"
        >
          {[
            { value: '5+', label: '个行业落地' },
            { value: '160+', label: '审核规则' },
            { value: '10×', label: '效率提升' },
            { value: '2-4周', label: '交付上线' },
            { value: '100%', label: '私有化部署' },
          ].map((num, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">{num.value}</div>
              <div className="text-sm text-gray-400 mt-1">{num.label}</div>
            </div>
          ))}
        </motion.div>

        {/* 产品矩阵 - 整合展示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* 上半部分：TokenX + DocPilot 左右展示 */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* DocPilot */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-white/10 overflow-hidden hover:border-pink-500/30 transition-colors">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Layers className="w-6 h-6 text-pink-400" />
                  <span className="text-xs text-pink-400 font-medium">应用层</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">DocPilot · 驭文 — 审核研判智能体</h3>
                <p className="text-sm text-gray-400 mb-4">
                  一句话指令，Agent 自动完成复杂文档的解析、抽取、审核、对比和研判报告生成。从小时级专家工作压缩到分钟级。
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['信贷审核', '合同审查', '招投标合规', '供应链穿透', '保险核赔'].map((s, i) => (
                    <span key={i} className="bg-pink-500/10 text-pink-300 text-xs px-2 py-1 rounded">{s}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <span className="text-white font-bold">10x</span><span className="text-gray-400">审核效率提升</span>
                  <span className="text-white font-bold">160+</span><span className="text-gray-400">条可执行审核规则</span>
                </div>
                <Button variant="ghost" size="sm" onClick={() => window.location.href = '/products'} className="text-pink-400 hover:text-pink-300 hover:bg-pink-500/10">
                  了解更多 <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>

            {/* TokenX */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/30 transition-colors">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Workflow className="w-6 h-6 text-purple-400" />
                  <span className="text-xs text-purple-400 font-medium">中枢层</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">TokenX 平台 — 企业级 Agent 编排中枢</h3>
                <p className="text-sm text-gray-400 mb-4">
                  自然语言+可视化双模式构建 Agent 工作流；支持多角色协同、复杂逻辑推理 (CoT)、工具调用，无缝集成 MCP/API/RPA。
                </p>
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <span className="text-white font-bold">2-4周</span><span className="text-gray-400">交付上线</span>
                  <span className="text-white font-bold">100%</span><span className="text-gray-400">私有化部署</span>
                  <span className="text-white font-bold">信创全适配</span>
                </div>
                <Button variant="ghost" size="sm" onClick={() => window.location.href = '/products'} className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10">
                  了解更多 <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* 下半部分：三大引擎 */}
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-white/10 p-6">
            <div className="flex items-center gap-3 mb-5">
              <BrainCircuit className="w-6 h-6 text-purple-400" />
              <span className="text-xs text-purple-400 font-medium">基础层</span>
              <span className="text-white font-bold text-lg">三大底层引擎，驱动可信判断</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {/* Engine 1 */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <FileSearch className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-medium">多模态大模型文本智能</span>
                </div>
                <p className="text-xs text-gray-400 mb-2">克服高噪、水印等干扰，高精度解析手写、印章、复杂表格，将非标文档转化为结构化数据（抽取准确率达 98%+）。</p>
                <p className="text-xs text-purple-400 font-medium">→ 让 AI 真正"读懂"复杂文档</p>
              </div>
              {/* Engine 2 */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Network className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-medium">多模态知识引擎</span>
                </div>
                <p className="text-xs text-gray-400 mb-2">融合图文、报表与行业专家经验（Know-How），构建支持动态演进的企业级知识图谱。</p>
                <p className="text-xs text-purple-400 font-medium">→ 企业知识不再沉睡</p>
              </div>
              {/* Engine 3 */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-medium">数据智能（NL2SQL）引擎</span>
                </div>
                <p className="text-xs text-gray-400 mb-2">打破底层数据壁垒，支持业务人员通过自然语言跨越多类型异构数据库进行自助查询。依托专有 RAG 与 Schema 联合训练，将复杂查询需求实时转化为动态图表。</p>
                <p className="text-xs text-purple-400 font-medium">→ 业务人员用自然语言即可查数</p>
              </div>
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