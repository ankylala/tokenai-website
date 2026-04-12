import { motion } from 'framer-motion';
import { Navbar, Footer } from '../components/layout';
import { Button } from '../components/ui';
import {
  Scale,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Eye,
  Brain,
  Settings,
  MessageSquare,
  BookOpen,
} from 'lucide-react';

const workflow = ['自动拆解任务', '深度阅读文档', '检索规则/法规', '推理判断', '生成审查报告'];

const workflowCards = [
  { title: '一键智能审查', desc: '全文档深度扫描，自动输出审查报告' },
  { title: '风险识别高亮', desc: '缺失/模糊/霸王条款，关联法规与公司制度' },
  { title: '逻辑一致性校验', desc: '大小写金额·日期冲突，主体与工商信息比对' },
  { title: '修改建议与重写', desc: '自动生成合规条款，从"找茬"到"解决问题"' },
];

const modules = [
  { icon: Eye, title: '感知层', desc: 'Word/PDF/Excel/扫描件，高精度 OCR，版面分析·水印去除' },
  { icon: Brain, title: '大脑层', desc: '预置行业规则包，自然语言规则生成，规则引擎配置器' },
  { icon: Settings, title: '执行层', desc: 'Agentic 审查，风险识别·逻辑校验，修改建议·报告生成' },
  { icon: MessageSquare, title: '交互层', desc: '合同问答助手，条款润色起草，风险点追问交互' },
  { icon: BookOpen, title: '记忆层', desc: 'RAG 知识库检索，类似案例推荐，法务知识沉淀飞轮' },
];

const scenarios = [
  { title: '法务部门', desc: '极速审查·深度风险洞察，日均减少 3h 重复工作' },
  { title: '业务部门', desc: '一键发起·初稿风险提示，审批周期 11天→3天' },
  { title: '财务部门', desc: '系统化风险预警，金额一致性自动校验' },
  { title: '管理层', desc: '风险漏检 15%→<2%，高风险损失降至可控' },
];

const deploy = [
  { title: '私有化部署', badge: '金融级安全', desc: '数据不出域，信创全适配' },
  { title: '云服务部署', badge: '快速上线', desc: '弹性扩展，降低 IT 投入' },
  { title: '混合部署', badge: '安全 + 性能', desc: '核心数据本地，推理云端执行' },
  { title: '开放 API', badge: '无缝集成', desc: '嵌入 OA/ERP/CRM，钉钉·企微·飞书' },
];

export default function ContractReview() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button onClick={() => window.history.back()} className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-5 h-5" /> 返回解决方案列表
            </button>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-8 h-8 text-purple-400" />
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">合同审核 Agent</h1>
                  <p className="text-purple-400 text-sm mt-1">AI 驱动的智能合同审查解决方案</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* KPIs */}
        <section className="py-16 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '78%', label: '审批效率提升' },
                { value: '86%', label: '风险漏检降低' },
                { value: '95%+', label: '风险识别准确率' },
                { value: '-3h', label: '法务日均减负' },
              ].map((kpi, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-purple-500/10 rounded-xl p-6 text-center border border-purple-500/20">
                  <div className="text-4xl font-bold text-purple-400">{kpi.value}</div>
                  <div className="text-sm text-gray-400 mt-2">{kpi.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pain Points vs Solution */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">场景痛点</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  单份复杂合同需 3-5 天审查、跨条款风险漏检率超 40%、法务团队深陷重复性工作。合同审核 Agent 通过 Agentic Workflow 自动拆解审查任务，极速完成风险识别与合规校验——每条结论可溯源到原文。
                </p>

                <h3 className="text-sm font-medium text-purple-400 uppercase tracking-wider mb-3">TokenAI 如何解决</h3>
                <ul className="space-y-2">
                  {[
                    '自动提取合同关键要素和条款结构',
                    '50+ 条规则覆盖格式合规、风险条款和交叉验证',
                    '多份合同之间的条款一致性自动比对',
                    '每条审查结论精确溯源到合同原文',
                  ].map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                <h3 className="text-white font-bold mb-4">效果对比</h3>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-gray-500 font-medium">指标</div>
                  <div className="text-gray-400 font-medium text-center">之前</div>
                  <div className="text-purple-400 font-medium text-center">之后</div>

                  <div className="text-gray-300">单笔耗时</div>
                  <div className="text-gray-400 text-center">3-5 天</div>
                  <div className="text-white font-medium text-center">3 天</div>

                  <div className="text-gray-300">人的角色</div>
                  <div className="text-gray-400 text-center">人工逐条对照</div>
                  <div className="text-white font-medium text-center">审 AI 结论</div>

                  <div className="text-gray-300">审计留痕</div>
                  <div className="text-gray-400 text-center">手工记录</div>
                  <div className="text-white font-medium text-center">每条锚定原文</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">Agentic Workflow 审查流程</h2>
            <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
              {workflow.map((step, i) => (
                <div key={i} className="flex items-center">
                  <span className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg">{step}</span>
                  {i < workflow.length - 1 && <ArrowRight className="w-5 h-5 text-gray-500 mx-2" />}
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {workflowCards.map((card, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-white/10 text-center">
                  <h4 className="text-white font-bold mb-2">{card.title}</h4>
                  <p className="text-gray-400 text-sm">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">五层能力架构</h2>
            <div className="grid md:grid-cols-5 gap-4">
              {modules.map((mod, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-white/10 text-center">
                  <mod.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h4 className="text-white font-bold text-sm mb-2">{mod.title}</h4>
                  <p className="text-gray-400 text-xs">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scenarios */}
        <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">应用场景与价值</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {scenarios.map((scene, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-white/10">
                  <h4 className="text-white font-bold mb-2">{scene.title}</h4>
                  <p className="text-gray-400 text-sm">{scene.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">部署与集成</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {deploy.map((d, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-white/10 text-center">
                  <h4 className="text-white font-bold mb-2">{d.title}</h4>
                  <span className="inline-block px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded-full mb-2">{d.badge}</span>
                  <p className="text-gray-400 text-sm">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-900/40 to-blue-900/40">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">让我们为您演示</h2>
            <p className="text-gray-300 mb-8">20 分钟了解 TokenAI 如何将您的合同审查效率提升 78%。</p>
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
