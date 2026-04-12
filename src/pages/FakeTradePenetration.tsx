import { motion } from 'framer-motion';
import { Navbar, Footer } from '../components/layout';
import { Button } from '../components/ui';
import {
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Search,
  FileText,
  Database,
  AlertTriangle,
  Clock,
  Target,
  Layers,
  CheckCircle,
  BarChart3,
  FileSpreadsheet,
  Eye,
  Link,
  TrendingUp,
  Users,
  DollarSign,
  Package,
  FileCheck,
  FileWarning,
  Repeat,
  Split,
  UserX,
  FileX,
  Ruler,
  Building2,
  Zap,
  Cpu,
  Server,
  ClipboardCheck,
} from 'lucide-react';

const painPoints = [
  { icon: FileText, title: '材料多、格式杂', desc: '单笔采购涉及十余类材料，格式不统一' },
  { icon: Clock, title: '交叉核对耗时', desc: '需在多文档间反复比对，人均日处理量低' },
  { icon: Target, title: '标准不统一', desc: '各省/地市公司审计标准、检查深度存在差异' },
  { icon: AlertTriangle, title: '证据留痕弱', desc: '审计发现缺乏精确到原文位置的证据链' },
  { icon: Search, title: '批量巡检缺失', desc: '面对数万笔交易，缺乏系统化风险预筛手段' },
];

const fraudPatterns = [
  { icon: Users, title: '围标/串标', desc: '多家投标供应商实为同一实控人，投标文件高度雷同', risk: '高' },
  { icon: Package, title: '虚假交付/验收', desc: '未实际到货或工程未完工，伪造验收报告骗取付款', risk: '高' },
  { icon: DollarSign, title: '价格虚高/利益输送', desc: '采购单价远高于市场价或集团指导价，差价流入关联方', risk: '高' },
  { icon: Split, title: '化整为零/拆分采购', desc: '将大额采购拆分为多笔小额以规避审批权限和招标要求', risk: '高' },
  { icon: UserX, title: '虚假供应商', desc: '设立空壳公司或与内部人员勾结的关联企业', risk: '中' },
  { icon: Repeat, title: '重复付款', desc: '同一发票或同一交付物多次入账付款', risk: '高' },
  { icon: FileX, title: '阴阳合同', desc: '签订金额不同的内外两套合同', risk: '高' },
  { icon: Ruler, title: '工程量虚报', desc: '施工单位虚报工程量或以次充好', risk: '高' },
];

const fiveChecks = [
  {
    title: '查主体',
    icon: Users,
    docs: '营业执照、工商信息、投标文件、供应商档案',
    rules: '成立时间<1年预警；多供应商共享地址/法人',
    color: 'blue',
  },
  {
    title: '查交易',
    icon: FileText,
    docs: '采购申请、招标文件、合同、订单',
    rules: '拆分采购检测；投标文件相似度',
    color: 'purple',
  },
  {
    title: '查价格',
    icon: DollarSign,
    docs: '合同、历史采购记录、集团指导价',
    rules: '偏离集团指导价>20%；同品类跨省价差异常',
    color: 'green',
  },
  {
    title: '查交付',
    icon: Package,
    docs: '验收报告、签收单、施工日志、设备序列号清单',
    rules: '验收数量与合同不符；交付周期异常短',
    color: 'orange',
  },
  {
    title: '查付款',
    icon: DollarSign,
    docs: '发票、付款凭证',
    rules: '同一发票重复入账；付款金额与合同/验收不匹配',
    color: 'red',
  },
];

const rulePackages = [
  { phase: 'Phase 1', title: '采购合规', count: '15条', desc: '基础合规审核：合同签章完整性、审批权限匹配、招标程序合规性、供应商入库资质等', color: 'blue' },
  { phase: 'Phase 2', title: '三单匹配', count: '10条', desc: '交叉校验审核：采购合同-增值税发票-验收报告/签收单之间的主体、标的、数量/金额/单价一致性', color: 'purple' },
  { phase: 'Phase 3', title: '虚假贸易检测', count: '12条', desc: '欺诈识别审核：拆分采购、重复发票、虚假交付信号、价格异常、供应商关联、阴阳合同等', color: 'red' },
];

const workflowSteps = [
  {
    step: '01',
    title: '数据导入批量预筛',
    desc: '从ERP导出采购台账Excel，系统用确定性规则自动扫描全量数据（拆分检测、重复检测、价格偏差等），输出"高风险交易清单"（如从12,847笔中筛出85笔需深度审核）。',
  },
  {
    step: '02',
    title: '原始单据调取+上传',
    desc: '审计人员对高风险交易调取合同原件、发票、验收报告等原始单据，批量上传至DocPilot，Agent自动识别并分类12种材料角色。',
  },
  {
    step: '03',
    title: '穿透式审核',
    desc: 'Agent自动执行三阶段审核：采购合规15条 → 三单匹配10条 → 虚假贸易检测12条。',
  },
  {
    step: '04',
    title: '审计底稿输出',
    desc: '自动生成结构化审计报告，含巡检概况、违规线索汇总（按严重程度排序）、证据溯源（点击定位到源文档）、整改建议。',
  },
];

export default function FakeTradePenetration() {
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
                <ShieldCheck className="w-8 h-8 text-purple-400" />
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">采购合规与虚假贸易穿透式审核</h1>
                  <p className="text-purple-400 text-sm mt-1">DocPilot 采购合规整体方案</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 mt-8">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-3">穿透合同、订单、发票、验收、付款等多环节单据</h2>
                  <p className="text-gray-200 leading-relaxed">
                    在集团采购与供应链全链条中，系统化发现虚假交易、利益输送、套取资金等违规行为。<br />
                    服务于集团审计/纪检/合规部门的内控监管需求。
                  </p>
                </div>
                <div className="flex gap-6">
                  <div className="text-center"><div className="text-4xl font-bold text-white">5-10min</div><div className="text-sm text-purple-200 mt-1">单笔审核时间</div></div>
                  <div className="text-center"><div className="text-4xl font-bold text-white">全量</div><div className="text-sm text-purple-200 mt-1">数据覆盖</div></div>
                  <div className="text-center"><div className="text-4xl font-bold text-white">37条</div><div className="text-sm text-purple-200 mt-1">审核规则</div></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">监管痛点</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {painPoints.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-800/50 rounded-xl p-5 border border-white/10 text-center">
                  <p.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-white font-bold mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-xs">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fraud Patterns */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">典型虚假贸易模式与检测信号</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fraudPatterns.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-800/50 rounded-xl p-6 border border-white/10 hover:border-red-500/30 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <f.icon className="w-6 h-6 text-red-400" />
                    <span className={`px-2 py-0.5 text-xs rounded-full ${f.risk === '高' ? 'bg-red-500/20 text-red-400' : 'bg-orange-500/20 text-orange-400'}`}>{f.risk}风险</span>
                  </div>
                  <h3 className="text-white font-bold mb-2">{f.title}</h3>
                  <p className="text-gray-400 text-sm">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Five Checks */}
        <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">穿透式监管"五查"框架</h2>
            <div className="grid md:grid-cols-5 gap-4">
              {fiveChecks.map((check, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-800/50 rounded-xl p-5 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <check.icon className="w-5 h-5 text-purple-400" />
                    <h3 className="text-lg font-bold text-white">{check.title}</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs text-gray-500 uppercase">关键文档</span>
                      <p className="text-gray-300 text-xs mt-0.5">{check.docs}</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 uppercase">核心规则</span>
                      <p className="text-gray-300 text-xs mt-0.5">{check.rules}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">两层穿透设计理念</h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-500/20">
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded">第一层</span>
                  <div>
                    <h3 className="text-lg font-bold text-white">批量预筛 · 面上扫描</h3>
                    <p className="text-gray-400 text-sm">Excel采购台账 → 确定性规则扫描 → 高风险清单（秒级出结果）</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center"><div className="w-px h-6 bg-purple-500/50" /></div>
              <div className="bg-gradient-to-r from-purple-900/30 to-red-900/30 rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm font-bold rounded">第二层</span>
                  <div>
                    <h3 className="text-lg font-bold text-white">单据穿透 · 点上穿透</h3>
                    <p className="text-gray-400 text-sm">合同/发票/验收 → Agent三单匹配 → 证据溯源（单笔1-5分钟）</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center"><div className="w-px h-6 bg-green-500/50" /></div>
              <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-500/20">
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-green-600 text-white text-sm font-bold rounded">输出</span>
                  <div>
                    <h3 className="text-lg font-bold text-white">审计底稿输出</h3>
                    <p className="text-gray-400 text-sm">违规线索 + 风险评分 + 证据链 → 审计报告自动生成</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rule Packages */}
        <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">规则包体系设计</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {rulePackages.map((pkg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-500">{pkg.phase}</span>
                    <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded-full">{pkg.count}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{pkg.title}</h3>
                  <p className="text-gray-400 text-sm">{pkg.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">端到端使用流程</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {workflowSteps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative bg-slate-800/50 rounded-xl p-6 border border-white/10">
                  <div className="text-4xl font-bold text-purple-500/20 absolute top-4 right-4">{step.step}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation */}
        <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-10">实施路径</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: 'POC试点', time: '2-3周', desc: '批量筛查功能+穿透审核演示' },
                { title: '一期MVP', time: '4-6周', desc: '采购审计场景上线、37条规则、端到端闭环' },
                { title: '二期增强', time: '6-8周', desc: '筛查规则配置化、Data→Review自动衔接、外部数据对接' },
                { title: '三期迭代', time: '持续', desc: '围标检测、工程量审计、管理层风险仪表盘、全集团推广' },
              ].map((phase, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-800/50 rounded-xl p-6 border border-white/10 text-center">
                  <h3 className="text-lg font-bold text-white mb-1">{phase.title}</h3>
                  <span className="text-purple-400 text-sm mb-3 block">{phase.time}</span>
                  <p className="text-gray-400 text-xs">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-900/40 to-blue-900/40">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">构建可信供应链 守护企业资产</h2>
            <p className="text-gray-300 mb-8">让每一笔采购都经得起穿透</p>
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
