import { motion } from 'framer-motion';
import { Building2, ShieldCheck, Globe, Scale, FileSearch, Heart, Database, ArrowRight } from 'lucide-react';

const solutions = [
  {
    id: 'supply-chain-finance',
    icon: Building2,
    title: '供应链金融放贷审核',
    pain: '信审员逐笔比对发票、订单、物流单，确认贸易背景真实性——重复、耗时、易漏。',
    values: [
      '6 类材料秒级自动分类',
      '33 条规则跨文档交叉比对',
      '审核结论精确溯源到原文',
    ],
    result: '单笔审核：1-2 小时 → 10 分钟',
    gradient: 'from-purple-600 to-blue-500',
    link: '/supply-chain-finance',
  },
  {
    id: 'fake-trade',
    icon: ShieldCheck,
    title: '虚假贸易穿透审核',
    pain: '采购链条长、参与方多，传统抽样审计难以覆盖全量，虚假贸易风险隐蔽。',
    values: [
      '"五查"框架穿透式审核',
      '大数据协查模式',
      '自动生成审计底稿',
    ],
    result: '从抽样审计 → 全量穿透覆盖',
    gradient: 'from-pink-600 to-purple-500',
    link: '/fake-trade',
  },
  {
    id: 'trade-settlement',
    icon: Globe,
    title: '国际贸易结算',
    pain: '信用证涉及多语言、多单据逐项核对，人工审证效率低、不符点易遗漏。',
    values: [
      '多语言混合半结构解析',
      'UCP600 规则自动匹配',
      '不符点自动识别并溯源',
    ],
    result: '多语言单据，分钟级完成审证',
    gradient: 'from-blue-600 to-purple-500',
  },
  {
    id: 'contract-review',
    icon: Scale,
    title: '智能合同审查',
    pain: '法务逐条对照法规、内部制度与商业条款，非标合同越多，风险越难穷尽。',
    values: [
      '50+ 条审查规则自动执行',
      '条款一致性交叉比对',
      '风险结论精确溯源到原文',
    ],
    result: '千页合同，风险点无遗漏',
    gradient: 'from-indigo-600 to-purple-500',
    link: '/contract-review',
  },
  {
    id: 'bidding',
    icon: FileSearch,
    title: '招投标合规审查',
    pain: '千页标书的资质核查与防串标分析，人工逐项校验耗时且标准难统一。',
    values: [
      '多维度资质合规校验',
      '法律法规智能匹配',
      '审查报告精确溯源',
    ],
    result: '千页标书，分钟级处理',
    gradient: 'from-purple-600 to-indigo-500',
  },
  {
    id: 'insurance',
    icon: Heart,
    title: '保险智能核赔',
    pain: '车险、医疗险理赔涉及病历、票据、照片等多源异构材料，人工核赔耗时长。',
    values: [
      '多模态数据综合分析',
      '条款自动匹配',
      '理赔理算建议自动生成',
    ],
    result: '多源材料一次研判，理算建议自动输出',
    gradient: 'from-orange-600 to-red-500',
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900">
      <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            解决方案
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            覆盖供应链金融、虚假贸易穿透、国际贸易、合同审查、招投标、保险核赔等场景
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 flex flex-col">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col flex-1">
                    {/* Icon + Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r ${solution.gradient}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{solution.title}</h3>
                    </div>

                    {/* Pain Point */}
                    <p className="text-gray-400 text-sm mb-4">{solution.pain}</p>

                    {/* Values */}
                    <ul className="space-y-2 mb-4 flex-1">
                      {solution.values.map((val, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-300">
                          <span className="text-purple-400 mr-2 mt-0.5">✓</span>
                          {val}
                        </li>
                      ))}
                    </ul>

                    {/* Result */}
                    <div className="mt-auto pt-4 border-t border-white/10">
                      <p className="text-primary font-bold text-sm">{solution.result}</p>
                    </div>

                    {/* Link */}
                    {solution.link && (
                      <button 
                        onClick={() => window.location.href = solution.link}
                        className="mt-3 flex items-center text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors"
                      >
                        了解详情 <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;