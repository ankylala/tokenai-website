import { Button } from '../ui';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/backbend/外滩.jpeg)' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Category Tag */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
            <span className="text-purple-300 text-sm font-medium tracking-wider">Trusted Judgment AI</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            让 AI 的专业判断，<br className="hidden md:block" />值得被信赖
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            TokenAI 为高要求行业打造可信赖的 AI 专家。AI 专家做判断，人做终审——每个结论可追溯、可审计、可复核。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="primary" size="lg" onClick={() => window.location.href = '/contact#apply'}>
              预约演示
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = '/products'}>
              了解产品
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12 border-t border-white/10">
            {[
              { label: '头部客户', value: '5+' },
              { label: '覆盖行业', value: '5 个' },
              { label: '场景复用率', value: '95%' },
              { label: '私有化部署', value: '100%' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-purple-500 rounded-full animate-fade-in" />
        </div>
      </div>
    </section>
  );
}
