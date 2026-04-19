import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Navbar, Footer } from '../components/layout';
import { Button } from '../components/ui';
import {
  FileText,
  Cpu,
  Brain,
  Network,
  Database,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Building2,
  Globe,
  Scale,
  FileSearch,
  ShieldCheck,
  Zap,
  Users,
  Link,
  Layers,
  MessageSquare,
  Download,
  FileCheck,
  GitCompare,
  PenTool,
  Languages,
  Edit3,
  EyeOff,
  FolderInput,
  FileSpreadsheet,
  Table2,
  Search,
  BookOpen,
} from 'lucide-react';

const products = [
  {
    id: 'docpilot',
    icon: FileText,
    title: 'DocPilot (驭文)',
    subtitle: 'Agent-native 智能文档处理平台',
    desc: '一句话指令，全自动处理。像 Cursor 改变编程一样，改变文档处理方式。',
    color: 'purple',
  },
  {
    id: 'tokenx',
    icon: Cpu,
    title: 'TokenX Agentic AI 平台',
    subtitle: '企业级智能体编排底座',
    desc: '支持多角色协同、复杂逻辑推理和外部系统集成，是构建企业级 AI 应用的底座。',
    color: 'blue',
  },
  {
    id: 'text-intelligence',
    icon: FileText,
    title: '多模态大模型文本智能',
    subtitle: '让 AI 看懂真实世界的文档',
    desc: '将非标文档转化为高质量结构化数据，支持复杂版面解析、手写体识别、印章解析等。',
    color: 'cyan',
  },
  {
    id: 'knowledge-engine',
    icon: Network,
    title: '多模态知识引擎',
    subtitle: '让企业知识活起来',
    desc: '将分散的图文、报表和专家经验构建为动态演进的企业级知识体系。',
    color: 'indigo',
  },
  {
    id: 'data-intelligence',
    icon: Database,
    title: '数据智能（NL2SQL）引擎',
    subtitle: '用自然语言查询业务数据',
    desc: '让业务人员直接用自然语言提问，系统自动生成 SQL 查询并返回结果。',
    color: 'emerald',
  },
];

const docpilotCoreValues = [
  { icon: Download, title: '端到端交付', desc: '上传文档 + 描述需求 → 完整交付物' },
  { icon: Layers, title: '12类任务统一', desc: '问答/抽取/审核/比对一站式覆盖' },
  { icon: Zap, title: '场景泛化', desc: '换规则文件+知识库，零代码切换行业' },
  { icon: Users, title: '人机协同', desc: '每条结论有证据链，可追问可纠正' },
  { icon: MessageSquare, title: 'Agent Native', desc: '对话即服务，自主规划执行' },
];

const docpilotTasks = [
  { name: '问答', icon: MessageSquare },
  { name: '抽取', icon: Download },
  { name: '审核', icon: FileCheck },
  { name: '比对', icon: GitCompare },
  { name: '总结', icon: BookOpen },
  { name: '生成', icon: PenTool },
  { name: '翻译', icon: Languages },
  { name: '编辑', icon: Edit3 },
  { name: '脱敏', icon: EyeOff },
  { name: '分类', icon: FolderInput },
  { name: '归档', icon: Table2 },
  { name: '填表', icon: FileSpreadsheet },
];

const docpilotFormats = [
  { title: 'PDF', count: '6场景', items: ['长文档智能抽取', '智能摘要与问答', '表格提取与分析', '图表智能识别', '多文档交叉对比', '交叉提取整合'] },
  { title: 'Excel/CSV', count: '5场景', items: ['数据智能抽取与引用', '数据筛选与导出', '可视化分析报告', '多文件合并清洗', '数据异常检测校验'] },
  { title: 'Word', count: '2场景', items: ['合同条款提取', '内容改写优化', '30秒提取合同要素', '100%原文可溯源'] },
  { title: '跨格式', count: '4场景', items: ['PDF+Excel数据核对', '多文件知识库问答', 'Excel→图表→报告', 'PDF手册场景问答'] },
];

const docpilotTechPillars = [
  { icon: FileText, title: '多模态文档理解', desc: 'PDF/Excel/Word/图片全格式，智能OCR，手写体/印章/表格精准识别' },
  { icon: Search, title: '智能信息抽取', desc: '语义级抽取，非关键词匹配，每条结论可追溯原文位置' },
  { icon: MessageSquare, title: '自然语言交互', desc: '像聊天一样处理文档，润色改写·摘要总结·报告撰写' },
];

const docpilotDifferentiators = [
  { title: '证据链可审计', desc: '坐标级高亮溯源，结论-依据-定位三位一体' },
  { title: '零代码场景切换', desc: '换规则文件 + 换知识库，Agent Runner 和管道不变' },
  { title: '三种自适应布局', desc: '问答模式 · 文档模式 · 数据模式，按场景自动切换界面' },
  { title: '100% 私有化部署', desc: '信创全适配 · 数据不出域，昇腾 / 海光 / PPU' },
];

const docpilotScenes = [
  { icon: Building2, title: '供应链金融审核', desc: '保理融资、预付款融资的放贷材料审核。合同/发票/订单/物流单多文档交叉比对，33 条审核规则覆盖基础合规、交叉验证和风险预警。' },
  { icon: Globe, title: '国际贸易结算', desc: '信用证、托收等跨境结算单据的合规审核。多语言混合单据解析，信用证条款与运输单据交叉核验，UCP600 等国际规则匹配。' },
  { icon: Scale, title: '智能合同审查', desc: '长篇非标合同的条款审查与风险识别。50+ 条审查规则，多份合同条款一致性比对，审查结论精确溯源到原文位置。' },
  { icon: FileSearch, title: '招投标合规审查', desc: '大篇幅标书的资质核查与防串标分析。投标文件多维度合规校验，法律法规智能匹配，输出支持精确溯源的审查报告。' },
  { icon: ShieldCheck, title: '保险智能核赔', desc: '车损、医疗等多模态理赔审核。照片、收据、条款等多源数据综合分析，条款匹配与理赔理算建议。' },
];

const tokenxCapabilities = [
  { icon: Users, title: '多角色协同', desc: '多个 Agent 分工协作，完成复杂业务流程' },
  { icon: Brain, title: '复杂逻辑推理', desc: '支持多步推理（CoT），处理条件判断和交叉验证' },
  { icon: Zap, title: '工具调用', desc: 'Agent 可调用外部 API、数据库和业务系统' },
  { icon: Link, title: '系统集成', desc: '支持 MCP、API、RPA 等多种集成方式' },
  { icon: Layers, title: '场景可插拔', desc: '换规则包和知识库即切换场景，引擎不变' },
];

const engines = [
  {
    id: 'text-intelligence',
    icon: FileText,
    title: '多模态大模型文本智能',
    subtitle: '让 AI 看懂真实世界的文档',
    desc: '企业真实文档远比 PDF 文本复杂——手写批注、骑缝章、扭曲表格、水印干扰、扫描噪声。多模态大模型文本智能是 TokenAI 全栈架构的感知层，将非标文档转化为高质量结构化数据。',
    features: [
      '复杂版面解析：多栏、嵌套表格、跨页表格',
      '手写体识别：中英文手写批注、签名、手填表单',
      '印章与签章解析：骑缝章、多章重叠、印章遮盖',
      '高噪文档处理：水印、扫描倾斜、低分辨率',
      '多模态融合：图片、文本、表格、印章联合理解',
    ],
  },
  {
    id: 'knowledge-engine',
    icon: Network,
    title: '多模态知识引擎',
    subtitle: '让企业知识活起来',
    desc: '将分散的图文、报表和专家经验构建为动态演进的企业级知识体系，让 AI 研判有据可依。',
    features: [
      '知识图谱构建：自动抽取实体和关系',
      '多模态融合：图文、表格、报表统一管理',
      '动态演进：随新文档、新规则持续更新',
      '行业 Know-How 融合：专家经验编码为结构化知识',
      '精准检索与推理：基于知识图谱的语义检索',
    ],
  },
  {
    id: 'data-intelligence',
    icon: Database,
    title: '数据智能引擎',
    subtitle: '用自然语言查询业务数据',
    desc: '让业务人员直接用自然语言提问，系统自动生成 SQL 查询并返回结果，无需依赖数据分析师。',
    features: [
      '打破底层数据壁垒，支持自然语言跨越多类型数据库自助查询',
      '专有 RAG 与 Schema 联合训练，复杂查询实时转化',
      '自动生成动态图表与可视化报表',
      '已在头部通信企业部署，覆盖亿级数据',
    ],
  },
];

function DocPilotDetail({ onBack }: { onBack: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-5 h-5" /> 返回产品列表
      </button>

      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-4">
          <FileText className="w-8 h-8 text-purple-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">DocPilot 驭文 — Agent-native 智能文档处理平台</h2>
        </div>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          一句话指令，全自动处理。像 Cursor 改变编程一样，改变文档处理方式。用户只需通过自然语言对话，即可完成复杂文档的解析、抽取、审核、比对和报告生成——从小时级缩短至分钟级。
        </p>
      </div>

      <div className="flex justify-center gap-8 mb-16">
        <div className="text-center"><div className="text-4xl font-bold text-purple-400">12</div><div className="text-sm text-gray-400 mt-1">类任务统一平台</div></div>
        <div className="text-center"><div className="text-4xl font-bold text-purple-400">98%+</div><div className="text-sm text-gray-400 mt-1">信息抽取精度</div></div>
        <div className="text-center"><div className="text-4xl font-bold text-purple-400">0</div><div className="text-sm text-gray-400 mt-1">代码切换场景</div></div>
      </div>

      {/* System Showcase */}
      <section className="py-12 mb-16 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Glow Effect behind */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            
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
                    <span className="text-xs text-gray-400 font-mono">DocPilot 驭文 — 智能文档处理平台</span>
                  </div>
                </div>
                <div className="w-10" />
              </div>
              
              {/* Screenshot */}
              <div className="relative bg-slate-950 p-1">
                <img 
                  src="/images/products/DocPilot.png" 
                  alt="DocPilot 系统界面" 
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="mb-16">
        <h3 className="text-2xl font-bold text-white text-center mb-8">五大核心价值</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {docpilotCoreValues.map((val, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-800/50 rounded-xl p-4 text-center border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <val.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h4 className="text-white font-bold text-sm mb-1">{val.title}</h4>
              <p className="text-gray-400 text-xs">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-bold text-white text-center mb-8">Doc-DOS 四层架构</h3>
        <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10 space-y-3">
          <div className="flex items-center gap-4"><span className="px-3 py-1 bg-purple-600 text-white text-sm font-bold rounded">L4 意图层</span><span className="text-gray-300">用户<b className="text-white">自然语言指令</b> + 场景输出协议 → 无学习成本</span></div>
          <div className="flex items-center gap-4"><span className="px-3 py-1 bg-purple-500 text-white text-sm font-bold rounded">L3 控制层</span><span className="text-gray-300"><b className="text-white">Agent 自主编排</b>工具链 · System Prompt 驱动 · 多轮推理决策</span></div>
          <div className="flex items-center gap-4"><span className="px-3 py-1 bg-purple-400 text-white text-sm font-bold rounded">L2 驱动层</span><span className="text-gray-300"><b className="text-white">原子工具集</b>：search / read / extract_table / run_code / generate</span></div>
          <div className="flex items-center gap-4"><span className="px-3 py-1 bg-purple-300 text-slate-900 text-sm font-bold rounded">L1 物理层</span><span className="text-gray-300"><b className="text-white">文件 I/O</b>：PDF 解析 / Word / Excel / 版面分析 / OCR 识别</span></div>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-bold text-white text-center mb-8">12 类统一任务</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {docpilotTasks.map((task, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={`rounded-lg p-3 text-center ${i < 4 ? 'bg-purple-600 text-white' : 'bg-slate-800 text-gray-300'}`}>
              <task.icon className="w-5 h-5 mx-auto mb-1" />
              <span className="text-sm font-medium">{task.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-bold text-white text-center mb-8">全格式处理能力</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {docpilotFormats.map((fmt, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-800/50 rounded-xl p-5 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <h4 className="text-white font-bold">{fmt.title}</h4>
                <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded-full">{fmt.count}</span>
              </div>
              <ul className="space-y-1">
                {fmt.items.map((item, j) => (
                  <li key={j} className="text-gray-400 text-sm flex items-start gap-1"><span className="text-purple-400">›</span>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-bold text-white text-center mb-8">三大技术支柱</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {docpilotTechPillars.map((pillar, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-800/50 rounded-xl p-6 border border-white/10 text-center">
              <pillar.icon className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <h4 className="text-white font-bold mb-2">{pillar.title}</h4>
              <p className="text-gray-400 text-sm">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-bold text-white text-center mb-8">为什么选择 DocPilot</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {docpilotDifferentiators.map((diff, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-purple-500/10 rounded-xl p-5 border border-purple-500/20 text-center">
              <h4 className="text-purple-300 font-bold mb-2">{diff.title}</h4>
              <p className="text-gray-400 text-sm">{diff.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white text-center mb-8">核心应用场景</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docpilotScenes.map((scene, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-800/50 rounded-xl p-6 border border-white/5 hover:border-purple-500/30 transition-all group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                <scene.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{scene.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{scene.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function TokenXDetail({ onBack }: { onBack: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-5 h-5" /> 返回产品列表
      </button>

      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-4">
          <Cpu className="w-8 h-8 text-blue-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">TokenX — 企业级智能体编排平台</h2>
        </div>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          DocPilot 背后的编排引擎。支持多角色协同、复杂逻辑推理和外部系统集成，是构建企业级 AI 应用的底座。
        </p>
      </div>

      {/* System Showcase */}
      <section className="py-12 mb-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-slate-800 shadow-2xl">
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
                    <span className="text-xs text-gray-400 font-mono">TokenX Agentic AI 平台</span>
                  </div>
                </div>
                <div className="w-10" />
              </div>
              <div className="relative bg-slate-950 p-1">
                <img 
                  src="/images/products/TokenX_修复版.png" 
                  alt="TokenX 系统界面" 
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tokenxCapabilities.map((cap, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-800/50 rounded-xl p-6 border border-white/5 hover:border-blue-500/30 transition-all group">
            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
              <cap.icon className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{cap.title}</h3>
            <p className="text-gray-400 text-sm">{cap.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function EngineDetail({ engine, onBack }: { engine: typeof engines[0]; onBack: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-5 h-5" /> 返回产品列表
      </button>

      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-4">
          <engine.icon className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">{engine.title}</h2>
        </div>
        <p className="text-lg text-cyan-400 mb-4">{engine.subtitle}</p>
        <p className="text-gray-400 max-w-3xl mx-auto">{engine.desc}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {engine.features.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">{f}</span>
            </div>
          ))}
        </div>
        <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
          <h4 className="text-white font-bold mb-4">关键指标</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between"><span className="text-gray-400">抽取准确率</span><span className="text-white font-medium">98%+</span></li>
            <li className="flex justify-between"><span className="text-gray-400">支持文档类型</span><span className="text-white font-medium">{engine.id === 'text-intelligence' ? '合同、发票、报表、标书等' : engine.id === 'knowledge-engine' ? '政策法规、合同、行业标准' : '经营数据、业务报表'}</span></li>
            <li className="flex justify-between"><span className="text-gray-400">支持格式</span><span className="text-white font-medium">{engine.id === 'text-intelligence' ? 'PDF、图片、扫描件、Office' : engine.id === 'knowledge-engine' ? '结构化图谱、非结构化文档' : '300+ 类数据库'}</span></li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const product = products.find(p => p.id === id);
      if (product) {
        setActiveProduct(id);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-white mb-6">
              全栈可信赖 AI 专家平台
            </motion.h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              从底层能力引擎到行业应用套件，TokenAI 提供打造可信赖 AI 专家的完整技术栈。
            </p>
          </div>
        </section>

        {/* Architecture Diagram */}
        <section className="py-16 bg-slate-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
              <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 rounded-xl p-6 border border-pink-500/20 text-center">
                <span className="text-pink-400 text-sm font-medium">应用层</span>
                <h3 className="text-xl font-bold text-white mt-1">DocPilot 智能体行业套件</h3>
                <p className="text-gray-400 text-sm mt-1">面向具体场景的 AI 研判 Agent</p>
              </div>
              <div className="flex justify-center"><div className="w-px h-6 bg-purple-500/50" /></div>
              <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-6 border border-purple-500/20 text-center">
                <span className="text-purple-400 text-sm font-medium">中枢层</span>
                <h3 className="text-xl font-bold text-white mt-1">TokenX Agentic AI 平台</h3>
                <p className="text-gray-400 text-sm mt-1">Agent 编排、多角色协同、工具调用</p>
              </div>
              <div className="flex justify-center"><div className="w-px h-6 bg-blue-500/50" /></div>
              <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl p-6 border border-blue-500/20 text-center">
                <span className="text-blue-400 text-sm font-medium">基础层</span>
                <h3 className="text-xl font-bold text-white mt-1">三大底层能力引擎</h3>
                <p className="text-gray-400 text-sm mt-1">多模态文本智能 · 知识引擎 · 数据智能</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Product Grid or Detail */}
        <section className="py-24 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              {!activeProduct ? (
                <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((p, i) => (
                    <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-slate-800/50 rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all cursor-pointer group" onClick={() => p.id === 'data-intelligence' ? navigate('/nl2sql') : setActiveProduct(p.id)}>
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-${p.color}-500/20 transition-colors bg-${p.color}-500/10`}>
                        <p.icon className={`w-6 h-6 text-${p.color}-400`} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                      <p className="text-purple-400 text-sm mb-3">{p.subtitle}</p>
                      <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
                      <div className="flex items-center text-purple-400 text-sm font-medium">
                        了解详情 <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div key="detail">
                  {activeProduct === 'docpilot' && <DocPilotDetail onBack={() => setActiveProduct(null)} />}
                  {activeProduct === 'tokenx' && <TokenXDetail onBack={() => setActiveProduct(null)} />}
                  {engines.find(e => e.id === activeProduct) && <EngineDetail engine={engines.find(e => e.id === activeProduct)!} onBack={() => setActiveProduct(null)} />}
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>

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
