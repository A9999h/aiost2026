// 部署於 https://event.pmislife.com/aiost2026/ 子路徑，所有站內連結請透過此函式產生。
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
