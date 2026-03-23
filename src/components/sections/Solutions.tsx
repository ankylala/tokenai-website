import { motion } from 'framer-motion';
import { Building2, Heart, Scale, Factory, Landmark, ShoppingCart } from 'lucide-react';

const solutions = [
  {
    id: 'finance',
    icon: Building2,
    title: '金融行业',
    description: '智能文档处理与风控分析',
    scenarios: ['信贷审批文档处理', '合规与风控审查', '投研文档智能分析'],
    gradient: 'from-purple-600 to-blue-500',
  },
  {
    id: 'medical',
    icon: Heart,
    title: '医疗行业',
    description: '医疗文书智能处理与科研辅助',
    scenarios: ['病历文书智能化', '科研文献分析', '医疗影像报告解读'],
    gradient: 'from-pink-600 to-purple-500',
  },
  {
    id: 'legal',
    icon: Scale,
    title: '法律行业',
    description: '法律文书智能审查与生成',
    scenarios: ['合同智能审查', '案例检索分析', '法律文书自动生成'],
    gradient: 'from-purple-600 to-pink-500',
  },
  {
    id: 'manufacturing',
    icon: Factory,
    title: '制造业',
    description: '供应链与工程文档智能化',
    scenarios: ['采购供应链管理', '工程文档处理', '设备维护记录'],
    gradient: 'from-blue-600 to-purple-500',
  },
  {
    id: 'government',
    icon: Landmark,
    title: '政务',
    description: '行政服务智能化升级',
    scenarios: ['行政审批自动化', '政策文件解读', '公共服务智能化'],
    gradient: 'from-indigo-600 to-purple-500',
  },
  {
    id: 'retail',
    icon: ShoppingCart,
    title: '零售电商',
    description: '订单与客户服务智能化',
    scenarios: ['订单发票处理', '商品信息管理', '智能客服系统'],
    gradient: 'from-purple-600 to-indigo-500',
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            行业解决方案
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            面向金融、医疗、法律、制造、政务、零售等多行业，提供专业的智能化解决方案
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
                    <p className="text-gray-400 mb-4 text-sm">{solution.description}</p>

                    {/* Scenarios */}
                    <ul className="space-y-2">
                      {solution.scenarios.map((scenario, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-300">
                          <span className="text-purple-400 mr-2">•</span>
                          {scenario}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More */}
                    <div className="mt-4 pt-4 border-t border-purple-500/20">
                      <a
                        href="#"
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                      >
                        了解更多
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
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
