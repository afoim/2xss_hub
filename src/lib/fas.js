import { useQuery } from '@tanstack/react-query';

/**
 * 友链 / 赞助数据源。
 *
 * 数据本体在 afoim/friends-and-sponsors 仓库的 data/ 下（每条一个 JSON 文件），
 * 由该仓库的 scripts/build.js 聚合、校验、排序后发到 Cloudflare，
 * 对外就是下面这两个纯静态 JSON（带 Access-Control-Allow-Origin: *）。
 *
 * 本站只消费，不参与那边的自动 PR 流程 —— 加友链仍然是去那个仓库提交文件。
 */
const FAS_ORIGIN = 'https://raw-fas.2x.nz';

/** 数据仓库地址，友链区底部的「申请友链」指向它 */
export const FAS_REPO = 'https://github.com/afoim/friends-and-sponsors';

async function fetchJson(path) {
  const res = await fetch(`${FAS_ORIGIN}${path}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

/**
 * 门户页是个启动器，友链/赞助属于「看一眼」的内容，
 * 一小时内不必重复请求；窗口重新聚焦也别再拉一次。
 */
const STATIC_JSON = {
  staleTime: 60 * 60 * 1000,
  refetchOnWindowFocus: false,
  retry: 1,
};

export function useFriends() {
  return useQuery({
    queryKey: ['fas', 'friends'],
    queryFn: () => fetchJson('/friends.json'),
    // 构建脚本已按「VIP 优先 + 名称」排好，这里只是防止数据源换实现后顺序丢失
    select: (data) =>
      [...data].sort((a, b) => (a.vip === b.vip ? 0 : a.vip ? -1 : 1)),
    ...STATIC_JSON,
  });
}

export function useSponsors() {
  return useQuery({
    queryKey: ['fas', 'sponsors'],
    queryFn: () => fetchJson('/sponsors.json'),
    // 构建脚本按日期倒序，新的在前
    ...STATIC_JSON,
  });
}
