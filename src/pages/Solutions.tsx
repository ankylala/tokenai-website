import { motion } from 'framer-motion';
import { 
  Building2, 
  Heart, 
  Scale, 
  Factory, 
  Landmark, 
  ShoppingCart,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Navbar, Footer } from '../components/layout';

const solutions = [
  {
    id: 'finance',
    icon: Building2,
    title: '金融行业',
    subtitle: '智能文档处理与风控分析',
    gradient: 'from-purple-600 to-blue-500',
    description: '为金融机构提供智能化的文档处理和风控分析解决方案，提升业务效率，降低运营风险。',
    scenarios: [
      {
        title: '信贷审批文档处理',
        desc: '自动化处理贷款申请材料，快速提取关键信息，提升审批效率',
        benefits: ['处理时间缩短70%', '准确率提升至98%', '人力成本降低60%'],
      },
      {
        title: '合规与风控审查',
        desc: '智能识别风险点，自动化合规检查，确保业务合规',
        benefits: ['风险识别准确率95%', '合规检查自动化', '实时风险预警'],
      },
      {
        title: '投研文档智能分析',
        desc: '自动生成研究报告，快速分析市场数据，辅助投资决策',
        benefits: ['报告生成效率提升5倍', '数据覆盖面更广', '决策支持更精准'],
      },
    ],
  },
  {
    id: 'medical',
    icon: Heart,
    title: '医疗行业',
    subtitle: '医疗文书智能处理与科研辅助',
    gradient: 'from-pink-600 to-purple-500',
    description: '助力医疗机构实现文书智能化处理，提升医疗服务质量，加速科研进程。',
    scenarios: [
      {
        title: '病历文书智能化',
        desc: '自动结构化病历信息，辅助医生快速了解患者病史',
        benefits: ['病历录入效率提升3倍', '信息提取准确率98%', '医生工作量减少40%'],
      },
      {
        title: '科研文献分析',
        desc: '智能检索和分析医学文献，加速科研创新',
        benefits: ['文献检索效率提升10倍', '自动生成文献综述', '发现潜在研究方向'],
      },
      {
        title: '医疗影像报告解读',
        desc: '智能解读影像报告，辅助医生诊断',
        benefits: ['报告解读准确率96%', '诊断时间缩短50%', '误诊率降低30%'],
      },
    ],
  },
  {
    id: 'legal',
    icon: Scale,
    title: '法律行业',
    subtitle: '法律文书智能审查与生成',
    gradient: 'from-purple-600 to-pink-500',
    description: '为法律从业者提供智能化的文书处理工具，提升法律服务效率和质量。',
    scenarios: [
      {
        title: '合同智能审查',
        desc: '自动识别合同风险点，快速完成合同审核',
        benefits: ['审查时间缩短80%', '风险识别全面', '合规性自动检查'],
      },
      {
        title: '案例检索分析',
        desc: '智能检索相关案例，快速生成案例分析报告',
        benefits: ['检索效率提升8倍', '案例匹配精准', '报告自动生成'],
      },
      {
        title: '法律文书自动生成',
        desc: '基于模板自动生成标准法律文书',
        benefits: ['文书生成效率提升5倍', '格式规范统一', '减少人为错误'],
      },
    ],
  },
  {
    id: 'manufacturing',
    icon: Factory,
    title: '制造业',
    subtitle: '供应链与工程文档智能化',
    gradient: 'from-blue-600 to-purple-500',
    description: '助力制造企业实现供应链管理和工程文档处理的智能化升级。',
    scenarios: [
      {
        title: '采购供应链管理',
        desc: '自动化处理采购订单和供应商文档',
        benefits: ['订单处理效率提升4倍', '供应链可视化', '供应商管理智能化'],
      },
      {
        title: '工程文档处理',
        desc: '智能管理工程图纸和技术文档',
        benefits: ['文档检索效率提升6倍', '版本管理自动化', '知识库智能构建'],
      },
      {
        title: '设备维护记录',
        desc: '自动化记录和分析设备维护信息',
        benefits: ['维护效率提升40%', '故障预测准确', '资产管理优化'],
      },
    ],
  },
  {
    id: 'government',
    icon: Landmark,
    title: '政务',
    subtitle: '行政服务智能化升级',
    gradient: 'from-indigo-600 to-purple-500',
    description: '为政府部门提供智能化的行政服务解决方案，提升公共服务质量。',
    scenarios: [
      {
        title: '行政审批自动化',
        desc: '智能处理行政审批材料，提升审批效率',
        benefits: ['审批时间缩短60%', '群众满意度提升', '政务透明度增强'],
      },
      {
        title: '政策文件解读',
        desc: '智能解读政策文件，提供精准政策咨询服务',
        benefits: ['政策解读准确', '咨询效率提升5倍', '服务覆盖面扩大'],
      },
      {
        title: '公共服务智能化',
        desc: '智能客服系统，提供24小时公共服务',
        benefits: ['服务响应即时', '人力成本降低50%', '服务质量稳定'],
      },
    ],
  },
  {
    id: 'retail',
    icon: ShoppingCart,
    title: '零售电商',
    subtitle: '订单与客户服务智能化',
    gradient: 'from-purple-600 to-indigo-500',
    description: '助力零售电商企业实现订单处理和客户服务的智能化升级。',
    scenarios: [
      {
        title: '订单发票处理',
        desc: '自动化处理订单和发票信息',
        benefits: ['处理效率提升6倍', '错误率降低90%', '财务对账自动化'],
      },
      {
        title: '商品信息管理',
        desc: '智能管理商品信息和库存数据',
        benefits: ['信息更新实时', '库存管理精准', '销量预测智能'],
      },
      {
        title: '智能客服系统',
        desc: 'AI驱动的智能客服，提升客户服务体验',
        benefits: ['响应时间<1秒', '人工客服成本降低70%', '客户满意度提升'],
      },
    ],
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                行业解决方案
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                深入行业场景，提供专业化的智能体解决方案
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-24 bg-slate-900">
          <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20">
            <div className="space-y-32">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={solution.id}
                    id={solution.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Solution Header */}
                    <div className={`flex items-center gap-4 mb-8 ${isEven ? '' : 'lg:flex-row-reverse lg:justify-end'}`}>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                          {solution.title}
                        </h2>
                        <p className="text-purple-400 text-lg">{solution.subtitle}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xl text-gray-300 mb-12 max-w-4xl">
                      {solution.description}
                    </p>

                    {/* Scenarios */}
                    <div className="grid md:grid-cols-3 gap-6">
                      {solution.scenarios.map((scenario, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          whileHover={{ y: -8 }}
                          className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                        >
                          <h3 className="text-xl font-bold text-white mb-3">
                            {scenario.title}
                          </h3>
                          <p className="text-gray-400 mb-4 text-sm">
                            {scenario.desc}
                          </p>

                          {/* Benefits */}
                          <div className="space-y-2 pt-4 border-t border-purple-500/20">
                            {scenario.benefits.map((benefit, bidx) => (
                              <div key={bidx} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-900/95">
          <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                为您的行业定制解决方案
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                联系我们的解决方案专家，获取专属的行业应用方案
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-medium transition-all duration-300">
                  预约咨询
                </button>
                <button className="px-8 py-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-white font-medium border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  查看案例
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
