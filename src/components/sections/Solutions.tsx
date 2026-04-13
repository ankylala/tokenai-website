import { motion } from 'framer-motion';
import { Building2, ShieldCheck, Globe, Scale, FileSearch, Heart, Database } from 'lucide-react';

const solutions = [
  {
    id: 'supply-chain-finance',
    icon: Building2,
    title: '供应链金融放贷审核',
    description: '银行信审员每天审核保理融资申请，需要逐份比对合同、发票、订单和物流单，确认贸易背景真实性。',
    advantages: ['6类材料3秒自动分类', '33条规则跨文档交叉比对', '10分钟完成终审'],
    gradient: 'from-purple-600 to-blue-500',
  },
  {
    id: 'fake-trade',
    icon: ShieldCheck,
    title: '虚假贸易穿透审核',
    description: '大型企业每年涉及数万笔采购，采购链条长、参与方多，是虚假贸易和采购违规的高发领域。',
    advantages: ['"五查"框架穿透式审核', '覆盖八大欺诈模式', '自动生成审计底稿'],
    gradient: 'from-pink-600 to-purple-500',
  },
  {
    id: 'trade-settlement',
    icon: Globe,
    title: '国际贸易结算',
    description: '信用证结算涉及发票、装箱单、提单等多语言单据，银行单证员需要逐项核对条款是否一致。',
    advantages: ['多语言混合单据解析', 'UCP600规则自动匹配', '审核结论精确溯源'],
    gradient: 'from-blue-600 to-purple-500',
  },
  {
    id: 'contract-review',
    icon: Scale,
    title: '智能合同审查',
    description: '企业法务每天审阅大量非标合同，需要逐条对照法规、内部制度和商业条款，识别风险点。',
    advantages: ['50+条审查规则', '条款一致性比对', '结论精确溯源到原文'],
    gradient: 'from-indigo-600 to-purple-500',
  },
  {
    id: 'bidding',
    icon: FileSearch,
    title: '招投标合规审查',
    description: '大篇幅标书的资质核查与防串标分析，投标文件多维度合规校验，法律法规智能匹配。',
    advantages: ['多维度资质合规校验', '法律法规智能匹配', '审查报告精确溯源'],
    gradient: 'from-purple-600 to-indigo-500',
  },
  {
    id: 'insurance',
    icon: Heart,
    title: '保险智能核赔',
    description: '车损、医疗等多模态理赔审核，照片、收据、条款等多源数据综合分析。',
    advantages: ['多模态数据综合分析', '条款自动匹配', '理赔理算建议自动生成'],
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
                <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${solution.gradient} mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4">{solution.description}</p>

                    {/* Advantages */}
                    <ul className="space-y-1">
                      {solution.advantages.map((adv, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-300">
                          <span className="text-purple-400 mr-2">•</span>
                          {adv}
                        </li>
                      ))}
                    </ul>
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
