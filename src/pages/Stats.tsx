import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar, Footer } from '../components/layout';
import { fetchStatsOverview } from '../utils/stats';
import type { StatsOverview } from '../utils/stats';

const pageNameMap: Record<string, string> = {
  '/': '首页',
  '/about': '关于我们',
  '/products': '产品中心',
  '/solutions': '解决方案',
  '/contact': '联系我们',
  '/customers': '客户案例',
  '/privacy': '隐私政策',
  '/terms': '服务条款',
  '/stats': '数据统计',
  '/text-intelligence': '文本智能',
  '/contract-review': '合同审查',
  '/supply-chain-finance': '供应链金融',
  '/fake-trade': '虚假贸易审查',
  '/nl2sql': '数据智能 NL2SQL',
};

function pageLabel(page: string): string {
  return pageNameMap[page] || page;
}

export default function Stats() {
  const [data, setData] = useState<StatsOverview | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchStatsOverview()
      .then(setData)
      .catch(() => setError('获取统计数据失败，请确认后端服务已启动。'))
      .finally(() => setLoading(false));
  }, []);

  const maxPV = data ? Math.max(...data.dailyTrend.map(d => d.pv), 1) : 1;
  const maxPageCount = data ? Math.max(...data.topPages.map(p => p.count), 1) : 1;

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">加载统计数据...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-900">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-red-400">{error}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-bold text-white mb-2">网站访问统计</h1>
            <p className="text-gray-400 mb-12">最近 30 天数据</p>
          </motion.div>

          {/* 概览卡片 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            <StatsCard label="累计 PV" value={data.totalPV.toLocaleString()} color="purple" />
            <StatsCard label="累计 UV" value={data.totalUV.toLocaleString()} color="blue" />
            <StatsCard label="今日 PV" value={data.todayPV.toLocaleString()} color="cyan" />
            <StatsCard label="今日 UV" value={data.todayUV.toLocaleString()} color="indigo" />
          </motion.div>

          {/* 每日趋势 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-xl font-bold text-white mb-6">近 7 天趋势</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
              <div className="flex items-end gap-2 md:gap-4" style={{ height: 160 }}>
                {data.dailyTrend.map((day) => (
                  <div key={day.date} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex flex-col items-center gap-1">
                      <div
                        className="w-full max-w-[40px] rounded-t-md bg-cyan-500/60 transition-all"
                        style={{ height: `${Math.max((day.uv / maxPV) * 140, 2)}px` }}
                        title={`UV: ${day.uv}`}
                      />
                      <div
                        className="w-full max-w-[40px] rounded-t-md bg-purple-500/60 transition-all"
                        style={{ height: `${Math.max((day.pv / maxPV) * 140, 2)}px` }}
                        title={`PV: ${day.pv}`}
                      />
                    </div>
                    <span className="text-gray-500 text-xs whitespace-nowrap">{day.date}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-purple-500/60" />
                  <span className="text-gray-400 text-xs">PV</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-cyan-500/60" />
                  <span className="text-gray-400 text-xs">UV</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 页面排行 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl font-bold text-white mb-6">页面访问排行</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
              <div className="space-y-3">
                {data.topPages.map((item, i) => (
                  <div key={item.page} className="flex items-center gap-4">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      i < 3 ? 'bg-purple-500 text-white' : 'bg-slate-700 text-gray-400'
                    }`}>
                      {i + 1}
                    </span>
                    <span className="text-gray-300 flex-1">{pageLabel(item.page)}</span>
                    <span className="text-gray-500 text-sm w-16 text-right">{item.count}</span>
                    <div className="w-32 bg-slate-700 rounded-full h-2 overflow-hidden hidden sm:block">
                      <div
                        className="h-full bg-purple-500 rounded-full transition-all"
                        style={{ width: `${(item.count / maxPageCount) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function StatsCard({ label, value, color }: { label: string; value: string; color: string }) {
  const colorMap: Record<string, string> = {
    purple: 'border-purple-500/30',
    blue: 'border-blue-500/30',
    cyan: 'border-cyan-500/30',
    indigo: 'border-indigo-500/30',
  };
  const textMap: Record<string, string> = {
    purple: 'text-purple-400',
    blue: 'text-blue-400',
    cyan: 'text-cyan-400',
    indigo: 'text-indigo-400',
  };

  return (
    <div className={`bg-slate-800/50 rounded-xl p-5 border ${colorMap[color] || 'border-white/10'}`}>
      <p className="text-gray-400 text-sm mb-2">{label}</p>
      <p className={`text-2xl font-bold ${textMap[color] || 'text-white'}`}>{value}</p>
    </div>
  );
}
