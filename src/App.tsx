import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { trackPageView } from './utils/stats';
import './index.css';

// 懒加载页面组件
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Contact = lazy(() => import('./pages/Contact'));
const Customers = lazy(() => import('./pages/Customers'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const TextIntelligence = lazy(() => import('./pages/TextIntelligence'));
const ContractReview = lazy(() => import('./pages/ContractReview'));
const SupplyChainFinance = lazy(() => import('./pages/SupplyChainFinance'));
const FakeTradePenetration = lazy(() => import('./pages/FakeTradePenetration'));
const NL2SQL = lazy(() => import('./pages/NL2SQL'));
const Stats = lazy(() => import('./pages/Stats'));

// 加载中组件
function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-400">加载中...</p>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-purple-400 mb-4">404</h1>
        <p className="text-gray-400 mb-6">页面未找到</p>
        <a href="/" className="text-purple-400 hover:text-purple-300 transition-colors">返回首页</a>
      </div>
    </div>
  );
}

/** 自动追踪路由切换，上报页面访问 */
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <PageTracker />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/text-intelligence" element={<TextIntelligence />} />
          <Route path="/contract-review" element={<ContractReview />} />
          <Route path="/supply-chain-finance" element={<SupplyChainFinance />} />
          <Route path="/fake-trade" element={<FakeTradePenetration />} />
          <Route path="/nl2sql" element={<NL2SQL />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
