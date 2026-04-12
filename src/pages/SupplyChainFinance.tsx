import { motion } from 'framer-motion';
import { Navbar, Footer } from '../components/layout';
import { Button } from '../components/ui';
import {
  ArrowRight,
  ArrowLeft,
  FileText,
  Link,
  FileCheck,
  GitCompare,
  Layers,
  Cpu,
  Brain,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
} from 'lucide-react';

const capabilities = [
  { icon: FileText, title: '多模态文档解析', desc: 'PDF / Word / Excel / 扫描件 / 手写单据全格式支持，表格深度理解' },
  { icon: Link, title: '证据链溯源', desc: '每条结论定位到原文页码与坐标，满足监管审计留痕要求' },
  { icon: FileCheck, title: '自然语言规则', desc: '业务人员直接用中文描述审核规则，无需技术背景即可配置' },
  { icon: GitCompare, title: '跨文档交叉校验', desc: '自动比对合同、发票、物流单的主体 / 金额 / 时间逻辑一致性' },
];

const scenarios = [
  {
    title: '应收账款融资 / 保理',
    items: ['文档闭环验证', '应收账款真实性核验', '重复融资检测', '核心企业确权验证', '关联交易 / 虚构贸易识别'],
  },
  {
    title: '订单融资 / 预付款融资',
    items: ['订单真实性核验', '履约能力评估', '资金专款专用验证', '融资性贸易 / 空转贸易识别', '价格合理性分析'],
  },
  {
    title: '仓单质押 / 存货融资',
    items: ['货物真实性核验', '仓储监管方评估', '虚假仓单检测', '重复质押识别', '出入库记录一致性校验'],
  },
];

const matchItems = [
  { level: '高', text: '买方一致性：合同买方 = 发票购方 = 物流收货方' },
  { level: '高', text: '卖方一致性：合同卖方 = 发票销方 = 物流发货方' },
  { level: '中', text: '商品一致性：标的物 / 货物名称 / 商品描述比对' },
  { level: '中', text: '数量一致性：合同数量 ≥ 发票数量 ≥ 物流数量' },
  { level: '高', text: '金额合理性：合同 ≥ 发票 ≥ 融资额 × 放款比例' },
  { level: '高', text: '时间逻辑：签约 ≤ 订单 ≤ 发货 ≤ 签收 ≤ 开票' },
];

const deploy = [
  { title: 'API 嵌入', badge: '推荐 · 已有平台', desc: '标准 RESTful API，2-4 周对接，无缝衔接用户无感' },
  { title: '独立工作台', badge: '推荐 · 快速试点', desc: '独立界面即开即用，4-6 周上线，快速验证 ROI' },
  { title: '私有化部署', badge: '金融级安全', desc: '100% 数据不出域，信创全适配（昇腾/海光/PPU），同城双活高可用' },
];

export default function SupplyChainFinance() {
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
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">供应链金融智能审单</h1>
              <p className="text-purple-400 text-sm mb-8">DocPilot 智能体行业套件</p>

              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-3">AI 审核员，10 分钟完成一笔信审</h2>
                  <p className="text-gray-200 leading-relaxed">
                    银行供应链金融放贷审核，涉及合同、发票、订单、物流单等十几份材料的交叉比对。<br />
                    智能审单 Agent 自动完成三单匹配、贸易真实性穿透、虚假贸易识别，每条结论可溯源到原文位置。
                  </p>
                </div>
                <div className="flex gap-6">
                  <div className="text-center"><div className="text-4xl font-bold text-white">10x</div><div className="text-sm text-purple-200 mt-1">审核效率提升</div></div>
                  <div className="text-center"><div className="text-4xl font-bold text-white">33</div><div className="text-sm text-purple-200 mt-1">条审核规则</div></div>
                  <div className="text-center"><div className="text-4xl font-bold text-white">95%+</div><div className="text-sm text-purple-200 mt-1">抽取精度</div></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">核心能力</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {capabilities.map((cap, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-800/50 rounded-xl p-6 border border-white/10 text-center">
                  <cap.icon className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-white font-bold mb-2">{cap.title}</h3>
                  <p className="text-gray-400 text-sm">{cap.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">全栈产品架构</h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 rounded-xl p-6 border border-pink-500/20 text-center">
                <span className="text-pink-400 text-sm font-medium">应用层</span>
                <h3 className="text-lg font-bold text-white mt-1">DocPilot 智能体行业套件</h3>
                <p className="text-gray-400 text-sm mt-1">供应链金融审核 · 合同审查 · 招投标审查 · 虚假贸易穿透 · 对公反电诈 · 保险核赔</p>
              </div>
              <div className="flex justify-center"><div className="w-px h-6 bg-purple-500/50" /></div>
              <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-6 border border-purple-500/20 text-center">
                <span className="text-purple-400 text-sm font-medium">中枢层</span>
                <h3 className="text-lg font-bold text-white mt-1">TokenX Agentic AI 平台</h3>
                <p className="text-gray-400 text-sm mt-1">多角色协同 · 复杂逻辑推理 (CoT) · 工具调用 · MCP / API / RPA 集成</p>
              </div>
              <div className="flex justify-center"><div className="w-px h-6 bg-blue-500/50" /></div>
              <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl p-6 border border-blue-500/20 text-center">
                <span className="text-blue-400 text-sm font-medium">基础层</span>
                <h3 className="text-lg font-bold text-white mt-1">三大引擎</h3>
                <p className="text-gray-400 text-sm mt-1">多模态文本智能（98%+ 精度）· 多模态知识引擎 · 数据智能 NL2SQL</p>
              </div>
            </div>
          </div>
        </section>

        {/* Scenarios */}
        <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">覆盖场景</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {scenarios.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-4">{s.title}</h3>
                  <ul className="space-y-2">
                    {s.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Three-match Engine */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-yellow-500/10 rounded-2xl p-8 border border-yellow-500/20">
              <h2 className="text-xl font-bold text-yellow-300 mb-6">三单匹配智能审核引擎 — 合同 × 发票 × 物流单交叉验证</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {matchItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className={`px-2 py-0.5 text-xs font-bold rounded ${item.level === '高' ? 'bg-red-500/20 text-red-400' : 'bg-orange-500/20 text-orange-400'}`}>{item.level}</span>
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before/After */}
        <section className="py-20 bg-slate-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
                <h3 className="text-lg font-bold text-red-400 mb-4">传统方式</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• 单笔审核 30-60 分钟，人工逐页翻阅对比</li>
                  <li>• 标准不统一，依赖个人经验</li>
                  <li>• 审计留痕困难，出错后难以追溯</li>
                  <li>• 虚假贸易人工识别困难，风险敞口大</li>
                </ul>
              </div>
              <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/20">
                <h3 className="text-lg font-bold text-green-400 mb-4">智能审单 Agent</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• 单笔审核 <span className="text-white font-bold">5-10 分钟</span>，AI 研判 + 人工终审</li>
                  <li>• 33 条规则逐条执行，标准统一不遗漏</li>
                  <li>• 每条结论<span className="text-white font-bold">字符级溯源</span>，天然满足审计要求</li>
                  <li>• 8 大欺诈模式自动检测，风险全量覆盖</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">集成方案</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {deploy.map((d, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-800/50 rounded-xl p-6 border border-white/10 text-center">
                  <h3 className="text-white font-bold mb-2">{d.title}</h3>
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full mb-4">{d.badge}</span>
                  <p className="text-gray-400 text-sm">{d.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-900/40 to-blue-900/40">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">让我们为您演示</h2>
            <p className="text-gray-300 mb-8">20 分钟了解 TokenAI 如何将您的信审效率提升 10 倍。</p>
            <Button variant="primary" size="lg" onClick={() => window.location.href = '/contact#apply'}>
              预约产品演示 <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>

        {/* Footer Note */}
        <section className="py-10 bg-slate-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-500 text-sm">
              银保监 226 号文要求"四流合一"穿透贸易背景真实性审查<br />
              智能审单 Agent 让每条审核结论可追溯、可审计、可复核
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
