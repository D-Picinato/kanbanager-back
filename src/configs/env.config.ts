import { configDotenv } from 'dotenv';

configDotenv();

export const ENV = {
  HOST: process.env.HOST || 'http://localhost',
  PORT: process.env.PORT || '3000',

  ENVIRONMENT: (process.env.ENVIRONMENT || 'development') as
    | 'development'
    | 'staging'
    | 'beta'
    | 'production',

  FRONT_URL: process.env.FRONT_URL || '',

  LRU_CACHE_MAX_COUNT: Number(process.env.LRU_CACHE_MAX_COUNT || ''),
  LRU_SESSION_MAX_COUNT: Number(process.env.LRU_SESSION_MAX_COUNT || ''),

  LRU_CACHE_TIME_PERSIST: Number(process.env.LRU_CACHE_TIME_PERSIST || ''),
  LRU_SESSION_TIME_PERSIST: Number(process.env.LRU_SESSION_TIME_PERSIST || ''),

  EMAIL_SYSTEM_NAME: process.env.EMAIL_SYSTEM_NAME || '',
  EMAIL_HOST: process.env.EMAIL_HOST || '',
  EMAIL_PORT: Number(process.env.EMAIL_PORT || ''),
  EMAIL_ADDRESS: process.env.EMAIL_ADDRESS || '',
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || '',

  JWT_SECRETKEY: process.env.JWT_SECRETKEY || '',
};
