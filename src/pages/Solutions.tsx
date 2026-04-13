import { motion } from 'framer-motion';
import { Navbar, Footer } from '../components/layout';
import { Button } from '../components/ui';
import {
  Building2,
  ShieldCheck,
  UserCheck,
  Globe,
  Scale,
  FileSearch,
  Shield,
  Database,
  ArrowRight,
} from 'lucide-react';

const solutions = [
  {
    id: 'supply-chain-finance',
    icon: Building2,
    title: '供应链金融放贷审核',
    desc: '银行信审员每天审核保理融资申请，需要逐份比对合同、发票、订单和物流单，确认贸易背景真实性。每笔耗时 1-2 小时，且高度依赖个人经验。',
    kpis: ['10x 效率提升', '33条规则', '字符级溯源'],
    link: '/supply-chain-finance',
  },
  {
    id: 'fake-trade',
    icon: ShieldCheck,
    title: '采购合规与虚假贸易穿透式审核',
    desc: '大型企业每年涉及数万笔采购，采购链条长、参与方多，是虚假贸易和采购违规的高发领域。审计部门面对海量交易，人均日处理量低。',
    kpis: ['"五查"框架', '37条规则', '全量覆盖'],
    link: '/fake-trade',
  },
  {
    id: 'trade-settlement',
    icon: Globe,
    title: '跨境贸易结算单据合规审核',
    desc: '信用证结算涉及发票、装箱单、提单、保险单等多语言单据，银行单证员需要逐项核对信用证条款与运输单据是否一致，识别不符点。',
    kpis: ['多语言解析', 'UCP600匹配', '精确溯源'],
  },
  {
    id: 'contract-review',
    icon: Scale,
    title: '合同审核 Agent',
    subtitle: 'AI 驱动的智能合同审查',
    desc: '单份复杂合同需 3-5 天审查、跨条款风险漏检率超 40%。合同审核 Agent 通过 Agentic Workflow 自动拆解审查任务——每条结论可溯源到原文。',
    kpis: ['78%效率提升', '86%漏检降低', '98%+准确率'],
    link: '/contract-review',
  },
  {
    id: 'bidding',
    icon: FileSearch,
    title: '招投标文件合规审查',
    desc: '评标专家面对千页标书，需要核查投标方资质、比对报价、检测串标嫌疑。时间紧、材料多、遗漏风险高。',
    kpis: ['多维度核查', '防串标分析', '精确溯源'],
  },
  {
    id: 'insurance',
    icon: Shield,
    title: '保险理赔智能审核',
    desc: '理赔员需要综合分析车损照片、事故责任书、医疗收据和保险条款，判断赔付金额。多模态材料交叉验证工作量大。',
kpis: ['多模态分析', '条款匹配', '理算建议'],
  },
  {
    id: 'nl2sql',
    icon: Database,
    title: '数据智能查询',
    desc: '打破底层数据壁垒，支持业务人员通过自然语言跨越多类型异构数据库进行自助查询。',
    kpis: ['自然语言', '300+数据库', '98%+准确率'],
    link: '/nl2sql',
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
                <span className="text-purple-300 text-sm font-medium tracking-wider">Trusted Judgment AI</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                每个行业的研判工作都不一样，<br className="hidden md:block" />但背后的需求是一样的
              </h1>

              <p className="text-xl md:text-2xl text-purple-300 font-medium">
                可信、可追溯、可审计。
              </p>

              <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed text-center">
                TokenAI 为金融、司法、贸易、保险等高要求行业打造可信赖的 AI 专家<br/>AI 专家做判断，人做终审——每个结论可追溯、可审计、可复核，天然满足合规审计要求
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">8</div>
                  <div className="text-sm text-gray-400">行业解决方案</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">98%+</div>
                  <div className="text-sm text-gray-400">研判准确率</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">10x</div>
                  <div className="text-sm text-gray-400">效率提升</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">100%</div>
                  <div className="text-sm text-gray-400">私有化部署</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-24 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((sol, i) => (
                <motion.div
                  key={sol.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all cursor-pointer group"
                  onClick={() => sol.link ? window.location.href = sol.link : document.getElementById(sol.id)?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                    <sol.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{sol.title}</h3>
                  {sol.subtitle && <p className="text-purple-400 text-sm mb-3">{sol.subtitle}</p>}
                  <p className="text-gray-400 text-sm mb-4">{sol.desc}</p>

                  {/* KPIs */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {sol.kpis.map((kpi, j) => (
                      <span key={j} className="px-2 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-full border border-purple-500/20">{kpi}</span>
                    ))}
                  </div>

                  <div className="flex items-center text-purple-400 text-sm font-medium">
                    {sol.link ? '了解详情' : '查看方案'} <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
