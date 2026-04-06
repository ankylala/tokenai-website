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
  CheckCircle,
} from 'lucide-react';

const solutions = [
  {
    id: 'supply-chain-finance',
    icon: Building2,
    title: '供应链金融放贷审核',
    desc: '银行信审员每天审核保理融资申请，需要逐份比对合同、发票、订单和物流单，确认贸易背景真实性。每笔耗时 1-2 小时，且高度依赖个人经验。',
    how: [
      'Agent 自动识别 6 类材料角色，3 秒完成分类',
      '逐条执行 33 条审核规则，跨文档交叉比对金额、主体、日期',
      '自动识别贸易背景风险：关联交易、循环贸易、重复发票',
      '输出研判报告，每条结论附原文引用和字符级坐标',
      '信审员在工作台中 10 分钟完成终审',
    ],
    before: { time: '1-2 小时', role: '逐页翻文件', trace: '手工记录' },
    after: { time: '10 分钟', role: '审 AI 的结论', trace: '字符级自动溯源' },
  },
  {
    id: 'fake-trade',
    icon: ShieldCheck,
    title: '采购合规与虚假贸易穿透式审核',
    desc: '大型企业每年涉及数万笔采购，采购链条长、参与方多，是虚假贸易和采购违规的高发领域。审计部门面对海量交易，人均日处理量低，且缺乏系统化风险预筛手段。',
    how: [
      '"五查"框架穿透式审核：查主体、查交易、查价格、查交付、查付款',
      '覆盖围标串标、虚假交付、价格虚高、化整为零等八大欺诈模式',
      '两层穿透：批量预筛（万行级台账秒出结果）→ 单据穿透审核（单笔 1-5 分钟）',
      '37 条规则三层架构：采购合规 15 条 + 三单匹配 10 条 + 虚假贸易检测 12 条',
      '自动生成审计底稿，含违规线索 + 风险评分 + 证据链',
    ],
    before: { time: '30-60 分钟', role: '抽样审计', trace: '各地不一' },
    after: { time: '5-10 分钟', role: '全量覆盖', trace: '规则统一执行' },
  },
  {
    id: 'anti-fraud',
    icon: UserCheck,
    title: '对公客户涉诈风险识别与防控',
    desc: '银行在对公客户开户环节需要识别涉诈风险，但人工尽调耗时 2+ 小时，风险维度覆盖不全，各网点审查标准不一致。',
    how: [
      '覆盖 7 大风险维度、40+ 风险点（客户基本信息、股权实控人、经营风险、真实意愿、地域风险、行业渠道、外部风险）',
      '开户材料 × 工商数据 × 司法数据 × 行内数据多源交叉核验',
      '加权评分模型，自动输出高/中/低风险分级',
      '风险等级与限额系统联动，高风险自动拦截',
      '存续期 9 大指标动态监测，24 小时内预警',
    ],
    before: { time: '2+ 小时', role: '3-5 个维度', trace: '各网点不一' },
    after: { time: '< 15 分钟', role: '7 大维度 40+ 风险点', trace: '100% 规则统一' },
  },
  {
    id: 'trade-settlement',
    icon: Globe,
    title: '跨境贸易结算单据合规审核',
    desc: '信用证结算涉及发票、装箱单、提单、保险单等多语言单据，银行单证员需要逐项核对信用证条款与运输单据是否一致，识别不符点。工作量大，差错成本高。',
    how: [
      '批量解析多语言混合单据，自动提取关键字段',
      '信用证条款与运输单据交叉核验',
      '自动识别不符点，匹配 UCP600 等国际结算规则',
      '审核结论精确溯源到原始单据',
    ],
  },
  {
    id: 'contract-review',
    icon: Scale,
    title: '合同条款审查与风险识别',
    desc: '企业法务每天审阅大量非标合同，需要逐条对照法规、内部制度和商业条款，识别风险点。合同越长、条款越复杂，遗漏风险越高。',
    how: [
      '自动提取合同关键要素和条款结构',
      '50+ 条规则覆盖格式合规、风险条款和交叉验证',
      '多份合同之间的条款一致性自动比对',
      '每条审查结论精确溯源到合同原文',
    ],
  },
  {
    id: 'bidding',
    icon: FileSearch,
    title: '招投标文件合规审查',
    desc: '评标专家面对千页标书，需要核查投标方资质、比对报价、检测串标嫌疑。时间紧、材料多、遗漏风险高。',
    how: [
      '投标文件多维度资质核查',
      '法律法规智能匹配',
      '防串标风险分析',
      '输出支持精确溯源的审查报告',
    ],
  },
  {
    id: 'insurance',
    icon: Shield,
    title: '保险理赔智能审核',
    desc: '理赔员需要综合分析车损照片、事故责任书、医疗收据和保险条款，判断赔付金额。多模态材料交叉验证工作量大。',
    how: [
      '多模态数据综合分析（图片、文本、表格）',
      '保险条款自动匹配',
      '理赔理算建议生成',
      '审核结论可追溯、可复核',
    ],
  },
  {
    id: 'data-query',
    icon: Database,
    title: '用自然语言查询业务数据',
    desc: '业务人员想了解经营数据，但不会写 SQL，每次都要找数据分析师排队。',
    how: [
      '直接用自然语言提问："上个月华北区域的设备故障率是多少？"',
      '系统自动生成查询，覆盖 300+ 类数据库',
      '结果即时返回，支持图表可视化',
    ],
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-white mb-6">
              每个行业的研判工作都不一样，但背后的需求是一样的：
            </motion.h1>
            <p className="text-2xl md:text-3xl text-purple-300 font-medium">
              可信、可追溯、可审计。
            </p>
          </div>
        </section>

        {/* Solutions List */}
        {solutions.map((sol, index) => (
          <section key={sol.id} id={sol.id} className={`py-20 ${index % 2 === 0 ? 'bg-slate-900' : 'bg-slate-950'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <sol.icon className="w-7 h-7 text-purple-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{sol.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  {/* Left: Problem & Solution */}
                  <div>
                    <div className="mb-8">
                      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">场景痛点</h3>
                      <p className="text-gray-300 leading-relaxed">{sol.desc}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-purple-400 uppercase tracking-wider mb-3">TokenAI 如何解决</h3>
                      <ul className="space-y-2">
                        {sol.how.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: Before/After Table */}
                  {sol.before && (
                    <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                      <h3 className="text-white font-bold mb-4">效果对比</h3>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="text-gray-500 font-medium">指标</div>
                        <div className="text-gray-400 font-medium text-center">之前</div>
                        <div className="text-purple-400 font-medium text-center">之后</div>

                        <div className="text-gray-300">单笔耗时</div>
                        <div className="text-gray-400 text-center">{sol.before.time}</div>
                        <div className="text-white font-medium text-center">{sol.after.time}</div>

                        <div className="text-gray-300">人的角色</div>
                        <div className="text-gray-400 text-center">{sol.before.role}</div>
                        <div className="text-white font-medium text-center">{sol.after.role}</div>

                        <div className="text-gray-300">审计留痕</div>
                        <div className="text-gray-400 text-center">{sol.before.trace}</div>
                        <div className="text-white font-medium text-center">{sol.after.trace}</div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
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
