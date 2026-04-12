import { motion } from 'framer-motion';
import { Navbar, Footer } from '../components/layout';
import { Button } from '../components/ui';
import {
  ArrowRight,
  ArrowLeft,
  Database,
  MessageSquare,
  Zap,
  Brain,
  FileText,
  BarChart3,
  Settings,
  CheckCircle,
  GitBranch,
  Clock,
  TrendingDown,
  Users,
  Sparkles,
  Search,
  DatabaseZap,
  Cpu,
  Layers,
  RefreshCw,
  Code,
} from 'lucide-react';

const capabilities = [
  { icon: MessageSquare, title: '零代码数据交互', desc: '用自然语言直接提问，无需编写SQL' },
  { icon: Database, title: '多数据源支持', desc: 'MySQL / PostgreSQL / Oracle / GaussDB / Snowflake 等 300+ 数据库' },
  { icon: BarChart3, title: '智能可视化', desc: '自动生成图表，理解问题意图' },
  { icon: Brain, title: 'RAG 精准训练', desc: 'DDL + 问题-SQL对 + 业务知识训练' },
];

const techFeatures = [
  { icon: DatabaseZap, title: 'DDL 训练学习', desc: '学习表结构、字段、类型、主外键关系' },
  { icon: Code, title: '问题-SQL训练', desc: '历史正确查询用例直接训练' },
  { icon: FileText, title: '业务知识训练', desc: '业务口径、计算逻辑、术语定义' },
  { icon: Sparkles, title: '自我学习能力', desc: '自动记录成功问答对，越用越准' },
];

const advantages = [
  { icon: TrendingDown, title: '高准确率', desc: 'RAG + LLM 深度理解复杂查询，多表 JOIN、聚合计算表现优异' },
  { icon: Clock, title: '高速响应', desc: '模型轻量化 + 多级缓存 + 并行工作流，平均响应 <3s' },
  { icon: RefreshCw, title: '自我学习', desc: '自动学习成功问答对，手动修正错误，长期使用越用越好' },
  { icon: GitBranch, title: '多轮对话', desc: '缺省条件智能补全，上下文记忆关联' },
];

const processSteps = [
  { num: '1', title: '自然语言提问', desc: '用户用日常语言提出数据需求', example: '"2025年Q1销售额最高的三个产品是什么？"' },
  { num: '2', title: '实时SQL生成', desc: '系统自动生成多表关联查询', example: 'SELECT product_name, SUM(sales) FROM...' },
  { num: '3', title: '结果可视化', desc: '内置图表引擎生成可视化结果', example: '自动生成柱状图、饼图等' },
  { num: '4', title: '二次追问', desc: '基于结果深度追问分析', example: '"其中产品A的区域分布如何？"' },
];

const dbSupport = [
  { name: 'MySQL', version: '8.0+', type: '原生驱动' },
  { name: 'PostgreSQL', version: '12+', type: '原生驱动' },
  { name: 'Oracle', version: '19c+', type: 'ODBC' },
  { name: 'GaussDB', version: '2025+', type: '国产适配' },
  { name: 'Snowflake', version: '全版本', type: 'JDBC' },
  { name: 'BigQuery', version: '全版本', type: 'API集成' },
];

const deployOptions = [
  { title: 'API 嵌入式', badge: '推荐', desc: '2-4周对接，标准RESTful API，无缝嵌入已有系统' },
  { title: '独立工作台', badge: '快速验证', desc: '4-6周上线，即开即用界面，快速验证ROI' },
  { title: '私有化部署', badge: '信创适配', desc: '100%数据不出域，信创全适配（昇腾/海光/PPU）' },
];

export default function NL2SQL() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        <section className="relative py-20 bg-gradient-to-b from-slate-900 via-blue-900/10 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button onClick={() => window.history.back()} className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-5 h-5" /> 返回解决方案列表
            </button>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">数据智能（NL2SQL）引擎</h1>
              <p className="text-blue-400 text-sm mb-8">用自然语言查询企业数据</p>

              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-3">零代码数据交互，让业务人员自己查数</h2>
                  <p className="text-gray-200 leading-relaxed">
                    通过 RAG 训练、模型轻量化、多级缓存和工作流并行等技术创新，<br />
                    实现复杂业务场景下"答得准"、"答得快"，非技术人员可直接用自然语言查询企业数据。
                  </p>
                </div>
                <div className="flex gap-6">
                  <div className="text-center"><div className="text-4xl font-bold text-white">95%+</div><div className="text-sm text-blue-200 mt-1">查询准确率</div></div>
                  <div className="text-center"><div className="text-4xl font-bold text-white">&lt;3s</div><div className="text-sm text-blue-200 mt-1">平均响应时间</div></div>
                  <div className="text-center"><div className="text-4xl font-bold text-white">300+</div><div className="text-sm text-blue-200 mt-1">支持数据库</div></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 mb-16 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-slate-800 shadow-2xl">
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 backdrop-blur border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-sm" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-sm" />
                      <div className="w-3 h-3 rounded-full bg-green-500/90 shadow-sm" />
                    </div>
                  </div>
                  <div className="flex-1 mx-8">
                    <div className="bg-slate-800/50 rounded-md px-3 py-1 text-center border border-white/5">
                      <span className="text-xs text-gray-400 font-mono">TokenX NL2SQL — 智能数据查询平台</span>
                    </div>
                  </div>
                  <div className="w-10" />
                </div>
                <div className="relative bg-slate-950 p-1 min-h-[400px] flex items-center justify-center">
                  <div className="text-center p-8">
                    <Database className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                    <h4 className="text-white font-bold mb-2">NL2SQL 智能数据查询</h4>
                    <p className="text-gray-500 text-sm">用自然语言查询企业数据</p>
                    <div className="mt-6 bg-slate-900 rounded-lg p-4 max-w-md mx-auto">
                      <p className="text-blue-300 text-sm font-mono text-left">Q: 2025年Q1销售额最高的产品</p>
                      <p className="text-cyan-300 text-sm font-mono text-left mt-2">→ SELECT product, SUM(sales) FROM...</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">核心能力</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {capabilities.map((cap, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-800/50 rounded-xl p-6 border border-white/10 text-center">
                  <cap.icon className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-bold mb-2">{cap.title}</h3>
                  <p className="text-gray-400 text-sm">{cap.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">用户体验流程</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {processSteps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="relative bg-slate-800/50 rounded-xl p-5 border border-white/10">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">{step.num}</div>
                    <h3 className="text-white font-bold mb-2 mt-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{step.desc}</p>
                    <div className="bg-slate-900/50 rounded-lg p-2">
                      <code className="text-blue-300 text-xs font-mono">{step.example}</code>
                    </div>
                  </div>
                  {i < processSteps.length - 1 && <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-600"><ArrowRight className="w-5 h-5" /></div>}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">基于"训练"的精准SQL生成</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <DatabaseZap className="w-8 h-8 text-blue-400" />
                  <h3 className="text-white font-bold text-lg">DDL 训练</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">提供数据库的 DDL（CREATE TABLE、CREATE VIEW 等语句），让系统了解表、列、数据类型、主键、外键等结构。</p>
                <div className="bg-slate-900 rounded-lg p-3">
                  <code className="text-cyan-300 text-xs font-mono">CREATE TABLE SYSTEM.WG4_TQ_YH (cust_id NUMBER, cust_name VARCHAR2(255), ...);</code>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-8 h-8 text-blue-400" />
                  <h3 className="text-white font-bold text-lg">问题-SQL 训练</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">提供历史正确且典型的核心 SQL 查询示例，直接训练问题到 SQL 的映射关系。</p>
                <div className="bg-slate-900 rounded-lg p-3">
                  <code className="text-cyan-300 text-xs font-mono">Q: 查询某用户欠费记录<br/>SELECT COUNT(*) FROM table WHERE cust_id = ?</code>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-8 h-8 text-blue-400" />
                  <h3 className="text-white font-bold text-lg">业务知识训练</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">添加关于数据库业务场景的说明，补充业务知识，帮助大模型深入理解业务场景。</p>
                <div className="bg-slate-900 rounded-lg p-3">
                  <code className="text-cyan-300 text-xs font-mono">故障报修类型：高压故障、低压故障、电能质量故障等六类...</code>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-8 h-8 text-blue-400" />
                  <h3 className="text-white font-bold text-lg">自动学习</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">自动将问答成功的问题和 SQL 对加入向量库训练，手动反馈修正错误，长期使用越用越好。</p>
                <div className="flex gap-2 mt-4">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">自动记录</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">持续优化</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">产品优势</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((adv, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/20 text-center">
                  <adv.icon className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-bold mb-2">{adv.title}</h3>
                  <p className="text-gray-400 text-sm">{adv.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">核心性能优化</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                <Layers className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-white font-bold mb-3">二级缓存机制</h3>
                <p className="text-gray-400 text-sm">工作流引擎和数据查询模块双层缓存，问题缓存和 SQL 缓存大幅提升访问速度。</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                <Cpu className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-white font-bold mb-3">模型与推理优化</h3>
                <p className="text-gray-400 text-sm">量化、蒸馏等模型轻量化技术，32B 模型达到 200K Tokens/s 推理速度。</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                <GitBranch className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-white font-bold mb-3">工作流并行优化</h3>
                <p className="text-gray-400 text-sm">工作流节点充分解耦，并行执行提升整体效率，复杂查询场景性能更优。</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">数据库支持</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {dbSupport.map((db, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-slate-800/50 rounded-lg p-4 border border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-bold">{db.name}</h4>
                    <p className="text-gray-500 text-xs">{db.type}</p>
                  </div>
                  <span className="text-blue-400 text-sm">{db.version}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">部署方式</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {deployOptions.map((opt, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-800/50 rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-bold">{opt.title}</h3>
                    <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-full">{opt.badge}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{opt.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-900/40 to-cyan-900/40">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">让数据查询像聊天一样简单</h2>
            <p className="text-gray-300 mb-8">非技术人员数据获取时间从2天→5分钟，分析师工作负载减少60%</p>
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