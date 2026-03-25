import { Cpu, FileText, Eye, BarChart3, Brain } from 'lucide-react';
import { Card, CardContent, Button } from '../ui';
import { PRODUCTS } from '../../utils/constants';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  FileText,
  Eye,
  BarChart3,
  Brain,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const productPreviewImages: Record<string, string> = {
  tokenx: '/images/products/TokenX 平台应用界面.png',
  docpilot: '/images/products/DocPilot 驭文.png',
  'text-intelligence': '/images/products/多模态文本解析.png',
  'data-intelligence': '',
  'knowledge-engine': '/images/products/知识库.png',
};

export function Products() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-background-light">
      <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-gradient">核心产品矩阵</span>
          </motion.h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            构建专业领域超级智能体，赋能每一位专业领域工作者
          </p>
        </div>

        {/* Top: TokenX + DocPilot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          {PRODUCTS.slice(0, 2).map((product) => {
            const Icon = iconMap[product.icon] || Cpu;
            const previewImg = productPreviewImages[product.id];
            return (
              <Card key={product.id} variant="gradient" className="h-full overflow-hidden group">
                {previewImg && (
                  <div className="relative h-32 overflow-hidden border-b border-white/5">
                    <img src={previewImg} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  </div>
                )}
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-purple-400" />
                    <h3 className="text-lg font-bold text-white">{product.name}</h3>
                  </div>
                  <p className="text-primary-light text-sm mb-2">{product.slogan}</p>
                  <p className="text-gray-400 text-sm mb-3">{product.description}</p>
                  <ul className="space-y-1 mb-4">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-500">
                        <span className="text-purple-400 mr-2">•</span>{feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" size="sm" onClick={() => navigate(product.link)}>了解更多 →</Button>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>

        {/* Bottom: Three Engines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {PRODUCTS.slice(2).map((product) => {
            const Icon = iconMap[product.icon] || Cpu;
            return (
              <Card key={product.id} variant="gradient" className="h-full overflow-hidden group">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-purple-400" />
                    <h3 className="text-base font-bold text-white">{product.name}</h3>
                  </div>
                  <p className="text-primary-light text-xs mb-2">{product.slogan}</p>
                  <p className="text-gray-400 text-sm mb-3">{product.description}</p>
                  <Button variant="ghost" size="sm" onClick={() => navigate(product.link)}>了解更多 →</Button>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
