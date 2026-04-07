import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui';
import { twMerge } from 'tailwind-merge';

const productLinks = [
  { label: 'DocPilot (驭文)', href: '/products#docpilot' },
  { label: 'TokenX Agentic AI 平台', href: '/products#tokenx' },
  { label: '多模态文本智能引擎', href: '/products#text-intelligence' },
  { label: '多模态知识引擎', href: '/products#knowledge-engine' },
  { label: '数据智能（NL2SQL）引擎', href: '/products#data-intelligence' },
];

const solutionLinks = [
  { label: '供应链金融', href: '/solutions#supply-chain-finance' },
  { label: '虚假贸易穿透', href: '/solutions#fake-trade' },
  { label: '对公反电诈', href: '/solutions#anti-fraud' },
  { label: '国际贸易', href: '/solutions#trade-settlement' },
  { label: '合同审查', href: '/solutions#contract-review' },
  { label: '招投标', href: '/solutions#bidding' },
  { label: '保险核赔', href: '/solutions#insurance' },
  { label: '数据查询', href: '/solutions#data-query' },
];

const navItems = [
  { label: '首页', href: '/' },
  { label: '产品', href: '/products', dropdown: productLinks },
  { label: '解决方案', href: '/solutions', dropdown: solutionLinks },
  { label: '客户案例', href: '/customers' },
  { label: '关于我们', href: '/about' },
  { label: '联系我们', href: '/contact' },
];

function DropdownMenu({ items, isOpen }: { items: { label: string; href: string }[]; isOpen: boolean }) {
  if (!isOpen) return null;
  return (
    <div 
      className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-xl border border-white/10 py-2 z-50"
      onMouseEnter={(e) => e.stopPropagation()}
    >
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-500/20 transition-colors"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = (label: string) => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  return (
    <nav className={twMerge('fixed top-0 left-0 right-0 z-40 transition-all duration-300', isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-purple-500/20' : 'bg-transparent')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo_white.png" alt="Logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                {item.dropdown ? (
                  <div
                    className="flex items-center gap-1 cursor-pointer text-gray-300 hover:text-white transition-colors font-medium text-sm py-2"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={() => handleMouseLeave(item.label)}
                  >
                    <a href={item.href} className="hover:text-white">{item.label}</a>
                    <ChevronDown className="w-4 h-4" />
                    <DropdownMenu items={item.dropdown} isOpen={activeDropdown === item.label} />
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={twMerge(
                      'transition-colors duration-300 font-medium text-sm',
                      location.pathname === item.href ? 'text-purple-400' : 'text-gray-300 hover:text-white'
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Button variant="primary" size="sm" onClick={() => window.location.href = '/contact#apply'}>预约演示</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-white">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-purple-500/20">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.dropdown ? (
                  <div>
                    <a href={item.href} className="block text-gray-300 hover:text-white py-2 font-medium">{item.label}</a>
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((sub) => (
                        <a key={sub.href} href={sub.href} className="block text-gray-400 hover:text-white py-1 text-sm">{sub.label}</a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link to={item.href} className="block text-gray-300 hover:text-white py-2 font-medium">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3">
              <Button variant="primary" size="sm" className="w-full" onClick={() => window.location.href = '/contact#apply'}>预约演示</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
