import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react';
import { Navbar, Footer } from '../components/layout';

const values = [
  {
    icon: Users,
    title: '以客户为中心',
    description: '深入了解客户需求，提供超越期望的产品和服务',
  },
  {
    icon: TrendingUp,
    title: '创新引领',
    description: '持续探索前沿技术，引领智能体发展方向',
  },
  {
    icon: Heart,
    title: '坦诚透明',
    description: '建立开放信任的工作环境，鼓励真实表达',
  },
  {
    icon: Target,
    title: '探究真相',
    description: '不断追问本质，追求技术创新的深度突破',
  },
];

const clients = [
  '电力', '交通', '能源', '金融', '医药', '广告', '法院', '政务', '制造', '零售'
];

const milestones = [
  {
    date: '2024年10月',
    title: '公司成立',
    description: '北京词元汇智科技有限公司正式成立',
  },
  {
    date: '2024年12月',
    title: 'TokenX平台发布',
    description: '推出企业级智能体应用开发平台',
  },
  {
    date: '2025年3月',
    title: '天使轮融资',
    description: '获得知名投资机构天使轮投资',
  },
  {
    date: '2025年6月',
    title: 'DocPilot发布',
    description: '推出Agent-native IDP平台',
  },
  {
    date: '2025年9月',
    title: '多行业落地',
    description: '在金融、医疗、法律等行业实现规模化应用',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                关于TokenAI
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                专业智能体领导者，致力于构建专业领域超级智能体，赋能每一位专业领域工作者，重塑未来工作模式
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-24 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">愿景</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  构建专业领域超级智能体，赋能每一位专业领域工作者，重塑未来工作模式
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">定位</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  专业智能体领导者，为企业提供最先进的人工智能解决方案
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-900/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                核心价值观
              </h2>
              <p className="text-xl text-gray-400">
                引领我们前行的文化基因
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-24 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <p className="text-xl text-gray-400">
                从成立到成长，每一步都在推动智能体创新
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 via-purple-500 to-transparent hidden md:block" />

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 inline-block">
                        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-300 mb-2">
                          {milestone.date}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-1">{milestone.title}</h3>
                        <p className="text-gray-400">{milestone.description}</p>
                      </div>
                    </div>

                    <div className="hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-purple-500 z-10" />

                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-900/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                主要客户
              </h2>
              <p className="text-xl text-gray-400">
                服务于多个行业的领先企业
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-500/40 text-gray-300 font-medium transition-all duration-300"
                >
                  {client}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Culture */}
        <section className="py-24 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                团队文化
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 text-center"
            >
              <Award className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <p className="text-2xl text-white font-medium mb-4">
                成长型团队文化
              </p>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                我们建立不断建立互信的成长型团队文化，鼓励每个人发挥最大潜力，
                共同推动智能体技术的发展，为客户创造价值
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
