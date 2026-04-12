import { motion } from 'framer-motion';
import { Navbar, Footer } from '../components/layout';
import { Button } from '../components/ui';
import {
  ArrowRight,
  FileText,
  Table2,
  Layers,
  Brain,
  Code,
  FileJson,
  FileSpreadsheet,
  Search,
  ListTree,
  Scan,
  CheckCircle,
} from 'lucide-react';

const advantages = [
  {
    icon: Scan,
    title: '极致精准的解析能力',
    items: [
      '复杂版面还原：专为报告、合同、招投标文件等复杂版式优化，精准还原多栏、表格、混排布局。',
      '多模态元素识别：高精度切分与识别段落、表格、公式、图片、印章、签名及各类图表。',
    ],
  },
  {
    icon: Layers,
    title: '深度语义的结构化',
    items: [
      '阅读顺序还原：突破物理版面限制，按人类逻辑重组内容，输出语义完整的段落。',
      '逻辑结构分析：自动分析物理版面与逻辑层次，生成文档目录树，深刻理解内容关联。',
    ],
  },
  {
    icon: Brain,
    title: '无缝对接大模型与应用',
    items: [
      '理想的AI输入：提供语义完整、关联性强的文档分片，极大提升大语言模型(LLM)的理解与生成质量。',
      '精准信息溯源：支持关键要素抽取(如条款、金额)，并可直接溯源至原文，保障信息准确可信。',
    ],
  },
  {
    icon: Code,
    title: '灵活的输出与集成',
    items: [
      '多格式输出：原生支持 Markdown 和 JSON 格式，便于知识库构建、数据交换与系统集成。',
      '多格式导出：可轻松导出为 PDF, DOCX, Excel, TXT 等常用办公格式。',
    ],
  },
];

const features = [
  {
    icon: Table2,
    title: '复杂表格解析',
    desc: '支持跨页表格自动合并、嵌套表格识别、复杂表头还原，精准提取表格数据与结构关系。',
  },
  {
    icon: ListTree,
    title: '标题目录层级识别',
    desc: '自动识别文档标题层级，生成结构化目录树，还原文档逻辑脉络，支持层级切分。',
  },
  {
    icon: Search,
    title: '智能文档切分',
    desc: '支持自动切分、自定义切分和层级切分，生成语义上更相关、更完整、更独立的知识切片，完美适配 RAG 场景。',
  },
];

const outputs = [
  { icon: FileJson, label: 'JSON', desc: '结构化数据交换' },
  { icon: FileText, label: 'Markdown', desc: '大模型知识库首选' },
  { icon: FileSpreadsheet, label: 'Excel', desc: '表格数据还原' },
  { icon: FileText, label: 'TXT', desc: '纯文本提取' },
];

export default function TextIntelligence() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
                <span className="text-purple-300 text-sm font-medium tracking-wider">多模态大模型文本智能</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                复杂多模态文档轻松解析与结构化
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                基于海量文档专项训练的智能解析引擎，将复杂文档转化为机器可读、模型可用的语义数据。
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="primary" size="lg" onClick={() => window.location.href = '/contact#apply'}>
                  申请试用 <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.location.href = '/contact'}>
                  预约演示
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* System Showcase */}
        <section className="py-20 bg-slate-900 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              {/* Glow Effect behind */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              
              {/* Main Container */}
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-slate-800 shadow-2xl">
                {/* Browser Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 backdrop-blur border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-sm" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-sm" />
                      <div className="w-3 h-3 rounded-full bg-green-500/90 shadow-sm" />
                    </div>
                  </div>
                  <div className="flex-1 mx-8">
                    <div className="bg-slate-800/50 rounded-md px-3 py-1 text-center border border-white/5">
                      <span className="text-xs text-gray-400 font-mono">TokenX 文档解析引擎</span>
                    </div>
                  </div>
                  <div className="w-10" /> {/* Spacer for centering */}
                </div>
                
                {/* Screenshot */}
                <div className="relative bg-slate-950 p-1">
                  <img 
                    src="/images/products/多模态文本解析-1.png" 
                    alt="多模态文本解析系统界面" 
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">TokenX 文档解析优势功能</h2>
              <p className="text-gray-400 max-w-3xl mx-auto">四大核心优势，重新定义文档解析标准</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {advantages.map((adv, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-8 border border-white/10 hover:border-purple-500/30 transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <adv.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{adv.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {adv.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">深度解析能力展示</h2>
              <p className="text-gray-400">从版面还原到语义理解，全方位处理复杂文档</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-white/10 text-center"
                >
                  <f.icon className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-gray-400 text-sm">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Output Formats */}
        <section className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">灵活的输出格式</h2>
              <p className="text-gray-400">满足知识库构建、数据交换、系统集成等多种场景需求</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {outputs.map((out, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-white/10 text-center hover:bg-slate-800 transition-colors"
                >
                  <out.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h4 className="text-white font-bold mb-1">{out.label}</h4>
                  <p className="text-gray-400 text-xs">{out.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-900/40 to-blue-900/40">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">立即解锁文档解析新体验</h2>
            <p className="text-gray-300 mb-8">让复杂文档变成高质量数据，赋能您的 AI 应用</p>
            <Button variant="primary" size="lg" onClick={() => window.location.href = '/contact#apply'}>
              申请试用 <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
