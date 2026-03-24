import { Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../../utils/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-lighter border-t border-primary/20">
      <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-dark to-primary rounded-lg flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold text-gradient">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-text-muted text-sm">{COMPANY_INFO.slogan}</p>
            <p className="text-text-muted text-sm">{COMPANY_INFO.fullName}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <a href="/products" className="text-text-muted hover:text-primary transition-colors text-sm">
                  产品中心
                </a>
              </li>
              <li>
                <a href="/solutions" className="text-text-muted hover:text-primary transition-colors text-sm">
                  解决方案
                </a>
              </li>
              <li>
                <a href="/about" className="text-text-muted hover:text-primary transition-colors text-sm">
                  关于我们
                </a>
              </li>
              <li>
                <a href="/contact" className="text-text-muted hover:text-primary transition-colors text-sm">
                  联系我们
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">核心产品</h4>
            <ul className="space-y-2">
              <li>
                <a href="/products/tokenx" className="text-text-muted hover:text-primary transition-colors text-sm">
                  TokenX平台
                </a>
              </li>
              <li>
                <a href="/products/docpilot" className="text-text-muted hover:text-primary transition-colors text-sm">
                  DocPilot驭文
                </a>
              </li>
              <li>
                <a href="/products/text-intelligence" className="text-text-muted hover:text-primary transition-colors text-sm">
                  多模态文本智能
                </a>
              </li>
              <li>
                <a href="/products/data-intelligence" className="text-text-muted hover:text-primary transition-colors text-sm">
                  数据智能
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">联系方式</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-text-muted text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>contact@tokenai.com</span>
              </li>
              <li className="flex items-start space-x-2 text-text-muted text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>400-XXX-XXXX</span>
              </li>
              <li className="flex items-start space-x-2 text-text-muted text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>北京市海淀区</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-muted text-sm">
              © {currentYear} {COMPANY_INFO.fullName}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-text-muted hover:text-primary transition-colors text-sm">
                隐私政策
              </a>
              <a href="/terms" className="text-text-muted hover:text-primary transition-colors text-sm">
                服务条款
              </a>
              <a href="/sitemap" className="text-text-muted hover:text-primary transition-colors text-sm">
                网站地图
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
