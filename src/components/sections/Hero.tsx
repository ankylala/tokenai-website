import { Button } from '../ui';
import { COMPANY_INFO } from '../../utils/constants';
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
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-functional-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-white">{COMPANY_INFO.name}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-text-secondary font-medium max-w-3xl mx-auto">
            {COMPANY_INFO.vision}
          </p>

          {/* Description */}
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            {COMPANY_INFO.mission}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="primary" size="lg" onClick={() => window.location.href = '/contact#apply'}>
              申请产品演示
            </Button>
          </div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-fade-in" />
        </div>
      </div>
    </section>
  );
}
