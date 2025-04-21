import { LRUCache } from 'lru-cache';

import { ENV } from '@/configs/env.config';

const lruSession = new LRUCache<string, object, unknown>({
  max: ENV.LRU_SESSION_MAX_COUNT,
  ttl: 1000 * ENV.LRU_SESSION_TIME_PERSIST,
});

const lruCache = new LRUCache<string, object, unknown>({
  max: ENV.LRU_CACHE_MAX_COUNT,
  ttl: 1000 * ENV.LRU_CACHE_TIME_PERSIST,
});

export function lru<V extends object>(
  focus: 'session' | 'cache',
): LRUCache<string, V, unknown> {
  return (focus === 'cache' ? lruCache : lruSession) as unknown as LRUCache<
    string,
    V,
    unknown
  >;
}
