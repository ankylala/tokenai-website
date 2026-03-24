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

        {/* Products Grid - Top Row */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PRODUCTS.slice(0, 3).map((product) => {
            const Icon = iconMap[product.icon] || Cpu;
            const previewImg = productPreviewImages[product.id];
            return (
              <motion.div key={product.id} variants={item}>
                <Card variant="gradient" className="h-full overflow-hidden group">
                  {/* Product Preview Image */}
                  {previewImg && (
                    <div className="relative h-40 overflow-hidden border-b border-white/5">
                      <img
                        src={previewImg}
                        alt={product.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-dark to-primary rounded-lg flex items-center justify-center mb-4 shadow-glow -mt-12 relative z-10 border-2 border-slate-900">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      {product.name}
                    </h3>
                    <p className="text-primary-light text-sm mb-3">
                      {product.slogan}
                    </p>
                    <p className="text-text-muted text-sm mb-4">
                      {product.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start text-sm text-text-secondary"
                        >
                          <span className="text-primary mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full"
                      onClick={() => navigate(product.link)}
                    >
                      了解更多 →
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* More Products - Bottom Row */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
        >
          {PRODUCTS.slice(3).map((product) => {
            const Icon = iconMap[product.icon] || Cpu;
            const previewImg = productPreviewImages[product.id];
            return (
              <motion.div key={product.id} variants={item}>
                <Card variant="gradient" className="h-full overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-dark to-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-text-primary mb-1">
                          {product.name}
                        </h3>
                        <p className="text-primary-light text-xs mb-2">
                          {product.slogan}
                        </p>
                        <p className="text-text-muted text-sm mb-3">
                          {product.description}
                        </p>
                        {previewImg && (
                          <div className="mb-3 rounded-lg overflow-hidden border border-white/5 h-32">
                            <img
                              src={previewImg}
                              alt={product.name}
                              className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-80 transition-all duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => navigate(product.link)}
                        >
                          了解更多 →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
