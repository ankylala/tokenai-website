import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
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
          <Route path="/text-intelligence" element={<TextIntelligence />} />
          <Route path="/contract-review" element={<ContractReview />} />
          <Route path="/supply-chain-finance" element={<SupplyChainFinance />} />
          <Route path="/fake-trade" element={<FakeTradePenetration />} />
          <Route path="/nl2sql" element={<NL2SQL />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
