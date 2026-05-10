import type { Product, Solution, Milestone, NavLink } from '../types';

export const COMPANY_INFO = {
  name: 'TokenAI',
  fullName: '北京词元汇智科技有限公司',
  slogan: '为高要求行业打造可信赖的AI专家',
  vision: '构建专业领域超级智能体，赋能每一位专业领域工作者，重塑未来工作模式',
  mission: '解决专业领域中耗时、耗力、易出错的工作难题，解放专业工作者生产力',
  culture: [
    '以客户为中心',
    '创新引领',
    '坦诚透明',
    '不断探究真相',
    '不断建立互信',
  ],
};

export const NAV_LINKS: NavLink[] = [
  { label: '首页', href: '/' },
  { label: '产品', href: '/products' },
  { label: '解决方案', href: '/solutions' },
  { label: '关于我们', href: '/about' },
  { label: '联系我们', href: '/contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'tokenx',
    name: 'TokenX',
    slogan: 'Agentic AI 平台',
    description: '企业级智能体应用开发与部署平台，支持Chatbot、Workflow、Agent、Chatflow等多种应用场景',
    features: [
      '可视化工作编排',
      '模型管理与校准',
      '智能体开发与调度',
      '场景化数据标注',
      '多模型支持（Qwen、GLM、DeepSeek等）',
    ],
    icon: 'Cpu',
    link: '/products#tokenx',
  },
  {
    id: 'docpilot',
    name: 'DocPilot (驭文)',
    slogan: 'Agent-native IDP 平台',
    description: '企业复杂文档的Cursor，代替人完成文档的高阶智能应用',
    features: [
      '问答、抽取、审核、比对',
      '总结、生成、翻译、编辑',
      '脱敏、分类、归档、索引',
      '端到端交付结果',
      '人机协同、场景泛化',
    ],
    icon: 'FileText',
    link: '/products#docpilot',
  },
  {
    id: 'text-intelligence',
    name: '多模态大模型文本智能',
    slogan: '感知能力',
    description: '赋予智能体超越文本模态的感知与理解能力，深度解析各种复杂多模态数据',
    features: [
      '合同深度解析',
      '报告智能分析',
      '图纸理解识别',
      '多模态数据洞察',
    ],
    icon: 'Eye',
    link: '/text-intelligence',
  },
  {
    id: 'data-intelligence',
    name: '数据智能',
    slogan: '分析能力',
    description: '提供强大的自然语言与数据库对话能力，将数据洞察的门槛降到最低',
    features: [
      '自然语言查询',
      '智能数据分析',
      '可视化报表生成',
      '业务洞察发现',
    ],
    icon: 'BarChart3',
    link: '/nl2sql',
  },
  {
    id: 'knowledge-engine',
    name: '多模态知识引擎',
    slogan: '知识库与记忆',
    description: '为企业构建专属的、融入了多模态数据的知识大脑，是智能体决策的知识基石',
    features: [
      '企业知识图谱',
      '多模态知识管理',
      '智能检索推荐',
      '知识持续更新',
    ],
    icon: 'Brain',
    link: '/products#knowledge-engine',
  },
];

export const SOLUTIONS: Solution[] = [
  {
    id: 'finance',
    industry: '金融行业',
    icon: 'Landmark',
    description: '为金融机构提供智能化文档处理和风控解决方案',
    scenarios: [
      '信贷审批文档处理',
      '合规与风控文档',
      '投研文档处理',
      '反洗钱监测',
    ],
  },
  {
    id: 'healthcare',
    industry: '医疗行业',
    icon: 'HeartPulse',
    description: '赋能医疗机构智能化处理医疗文书和科研文献',
    scenarios: [
      '病历文书处理',
      '科研文献处理',
      '医疗影像报告',
      '药物研发辅助',
    ],
  },
  {
    id: 'legal',
    industry: '法律行业',
    icon: 'Scale',
    description: '提升法律服务效率，智能化处理法律文书和案例',
    scenarios: [
      '合同审查处理',
      '案例检索分析',
      '法律文书生成',
      '法规合规检查',
    ],
  },
  {
    id: 'manufacturing',
    industry: '制造业',
    icon: 'Factory',
    description: '优化制造企业供应链和工程文档管理流程',
    scenarios: [
      '采购与供应链文档',
      '工程文档管理',
      '设备维护文档',
      '质量控制报告',
    ],
  },
  {
    id: 'government',
    industry: '政务/公共事业',
    icon: 'Building2',
    description: '助力政府机构提升公共服务效率和智能化水平',
    scenarios: [
      '行政审批文档',
      '政策文件处理',
      '公共服务文档',
      '政务数据分析',
    ],
  },
  {
    id: 'retail',
    industry: '零售/电商',
    icon: 'ShoppingCart',
    description: '为零售电商企业提供智能化运营解决方案',
    scenarios: [
      '订单与发票处理',
      '商品信息管理',
      '客户服务文档',
      '营销内容生成',
    ],
  },
];

export const MILESTONES: Milestone[] = [
  {
    date: '2024.10',
    title: '公司成立',
    description: 'TokenAI于北京成立，专注于专业智能体领域',
  },
  {
    date: '2025.03',
    title: '天使轮融资',
    description: '公司获得天使轮数百万元投资',
  },
  {
    date: '2025.05',
    title: '产品突破',
    description: '推出多模态大模型文本智能产品，成功申请多篇国家发明专利',
  },
  {
    date: '2025.06',
    title: '市场拓展',
    description: '多模态大模型文本智能产品成功中标能源和金融行业客户',
  },
  {
    date: '2025.10',
    title: '平台发布',
    description: '推出TokenX平台产品、数据智能和多模态知识引擎产品',
  },
];

export const CUSTOMERS = [
  '电力行业',
  '交通行业',
  '能源行业',
  '金融行业',
  '医药行业',
  '广告行业',
  '法院系统',
];
