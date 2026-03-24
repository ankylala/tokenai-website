import { motion } from 'framer-motion';
import { Rocket, Users, Award, Zap } from 'lucide-react';

const timeline = [
  {
    date: '2024年10月',
    title: '公司成立',
    description: '北京词元汇智科技有限公司正式成立，致力于专业智能体研发',
    icon: Rocket,
    color: 'purple',
  },
  {
    date: '2024年12月',
    title: 'TokenX平台发布',
    description: '推出企业级智能体应用开发与部署平台，支持多种应用形态',
    icon: Zap,
    color: 'blue',
  },
  {
    date: '2025年3月',
    title: '获得天使轮投资',
    description: '获得知名投资机构天使轮融资，加速产品研发和市场拓展',
    icon: Award,
    color: 'pink',
  },
  {
    date: '2025年6月',
    title: 'DocPilot发布',
    description: '推出Agent-native IDP平台，为企业提供复杂文档智能处理能力',
    icon: Users,
    color: 'purple',
  },
  {
    date: '2025年9月',
    title: '多行业落地',
    description: '在金融、医疗、法律、制造、政务等行业实现规模化应用',
    icon: Award,
    color: 'blue',
  },
  {
    date: '2025年12月',
    title: '产品矩阵完善',
    description: '多模态文本智能、数据智能、知识引擎等产品全面上线',
    icon: Zap,
    color: 'pink',
  },
];

const colorMap: Record<string, string> = {
  purple: 'from-purple-600 to-purple-500',
  blue: 'from-blue-600 to-blue-500',
  pink: 'from-pink-600 to-pink-500',
};

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            发展历程
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            从成立到成长，每一步都在推动专业智能体的创新与发展
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 via-purple-500 to-transparent hidden lg:block" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                    >
                      {/* Date */}
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-300 mb-3">
                        {item.date}
                      </span>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>

                      {/* Description */}
                      <p className="text-gray-400">{item.description}</p>
                    </motion.div>
                  </div>

                  {/* Icon */}
                  <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 z-10 shadow-lg shadow-purple-500/30">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Mobile Icon */}
                  <div className="lg:hidden absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 shadow-lg shadow-purple-500/30">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Empty space for alignment */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
