import { LRUCache } from 'lru-cache';

import { ENV } from '@/configs/env.config';

export function lruCache<V extends object>() {
  return new LRUCache<string, V>({
    max: 50,
    ttl: 1000 * ENV.LRU_CACHE_TIME_PERSIST,
  });
}
