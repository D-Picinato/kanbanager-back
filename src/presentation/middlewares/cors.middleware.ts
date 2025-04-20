import cors from 'cors';

import { ENV } from '@/configs/env.config';

export const corsMiddleware = cors({
  origin:
    ENV.ENVIRONMENT == 'beta' || ENV.ENVIRONMENT == 'production'
      ? ENV.FRONT_URL
      : '*',
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
});
