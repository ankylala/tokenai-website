const API_BASE = '/api/stats';

export interface DailyTrend {
  date: string;
  pv: number;
  uv: number;
}

export interface PageRank {
  page: string;
  count: number;
}

export interface StatsOverview {
  totalPV: number;
  totalUV: number;
  todayPV: number;
  todayUV: number;
  dailyTrend: DailyTrend[];
  topPages: PageRank[];
}

/** 上报页面访问 */
export function trackPageView(page: string) {
  fetch(`${API_BASE}/track`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ page, referrer: document.referrer }),
  }).catch(() => { /* 静默失败，不影响用户体验 */ });
}

/** 获取统计概览 */
export async function fetchStatsOverview(): Promise<StatsOverview> {
  const res = await fetch(`${API_BASE}/overview`);
  if (!res.ok) throw new Error('Failed to fetch stats');
  return res.json();
}
