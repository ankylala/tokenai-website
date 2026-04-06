import { motion } from 'framer-motion';
import { Navbar, Footer } from '../components/layout';
import { Button } from '../components/ui';
import { ArrowRight, CheckCircle, TrendingUp, Shield, Database, FileText, Brain } from 'lucide-react';

const cases = [
  {
    id: 1,
    client: '某省级农商银行',
    industry: '金融',
    icon: TrendingUp,
    scene: '集中作业版式分类 + 信贷文档智能抽取',
    challenge: '信贷文档种类繁多（30+ 类），人工分类和抽取耗时长、易出错，无法满足集中作业要求。',
    solution: '部署 TokenAI 文本智能引擎，自动完成文档分类和关键字段抽取，全程运行于信创环境。',
    results: [
      '分类时长缩减 80%',
      '30+ 类文档抽取精度 95%+',
      '全面运行于华为昇腾 NPU、阿里 PPU 和海光 DCU 信创环境',
    ],
  },
  {
    id: 2,
    client: '上海高级人民法院',
    industry: '司法',
    icon: Shield,
    scene: '融合大模型的智能档案管理系统',
    challenge: '法院档案管理涉及海量卷宗，从意图理解到物理卷宗柜的操作需要多次人工介入。',
    solution: '构建从自然语言意图理解（NLU）到卷宗柜自动启闭的软硬一体业务闭环。',
    results: [
      '实现全流程智能化，从语音/文字指令到物理操作一体化',
      '大幅降低档案管理人力成本',
    ],
  },
  {
    id: 3,
    client: '中国铁塔',
    industry: '通信',
    icon: Database,
    scene: '集团级经营数据查询与分析智能体',
    challenge: '集团经营数据分散在 300+ 个数据库、1000+ 张业务表中，业务人员无法直接获取所需数据。',
    solution: '部署 NL2SQL 数据智能引擎，业务人员通过自然语言提问即可获取经营数据和分析报表。',
    results: [
      '覆盖 300+ 数据库、1000+ 业务表、亿级运营数据',
      '业务人员自助查询，无需依赖数据团队',
    ],
  },
  {
    id: 4,
    client: '某头部会计师事务所',
    industry: '专业服务',
    icon: FileText,
    scene: '审计智能文档处理一体机',
    challenge: '审计过程中需要大量处理征信报告和财务报表，人工抽取关键数据耗时且易遗漏。',
    solution: '联合打造审计智能文档处理解决方案，实现征信报告高精度抽取和财务报表交叉验证。',
    results: [
      '征信报告关键字段高精度自动抽取',
      '财务报表数据自动交叉验证',
    ],
  },
  {
    id: 5,
    client: '国家电网（山西/浙江）',
    industry: '能源',
    icon: Brain,
    scene: '物资合同管理 + 政策文档知识图谱',
    challenge: '千余份物资合同的合规审查依赖人工，海量政策文档难以快速检索和关联。',
    solution: '部署合同管理与知识图谱平台，实现物资合同自动化合规审查和政策文档的结构化管理。',
    results: [
      '千余份物资合同自动化合规审查',
      '政策文档知识图谱构建与智能检索',
    ],
  },
];

export default function Customers() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-white mb-6">
              已在多个头部企业和政府机构中规模化落地
            </motion.h1>
          </div>
        </section>

        {/* Cases */}
        {cases.map((c, index) => (
          <section key={c.id} className={`py-20 ${index % 2 === 0 ? 'bg-slate-900' : 'bg-slate-950'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <c.icon className="w-7 h-7 text-purple-400" />
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">案例 {c.id} · {c.client}</h2>
                    <span className="text-purple-400 text-sm">{c.industry} · {c.scene}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Challenge */}
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                    <h3 className="text-sm font-medium text-red-400 uppercase tracking-wider mb-3">挑战</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{c.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                    <h3 className="text-sm font-medium text-purple-400 uppercase tracking-wider mb-3">解决方案</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{c.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                    <h3 className="text-sm font-medium text-green-400 uppercase tracking-wider mb-3">成果</h3>
                    <ul className="space-y-2">
                      {c.results.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
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
