import { ENV } from '@/configs/env.config';

describe('Validação das variáveis de ambiente', () => {
  test('HOST', () => expect(ENV.HOST).not.toBe(''));
  test('PORT', () => expect(ENV.PORT).not.toBe(''));
  test('ENVIRONMENT', () =>
    expect(['development', 'staging', 'beta', 'production']).toContain(
      ENV.ENVIRONMENT,
    ));

  test('FRONT_URL', () => expect(ENV.FRONT_URL).not.toBe(''));

  test('LRU_CACHE_MAX_COUNT', () =>
    expect(ENV.LRU_CACHE_MAX_COUNT).not.toBeNaN());
  test('LRU_SESSION_MAX_COUNT', () =>
    expect(ENV.LRU_SESSION_MAX_COUNT).not.toBeNaN());

  test('LRU_SESSION_TIME_PERSIST', () =>
    expect(ENV.LRU_SESSION_TIME_PERSIST).not.toBeNaN());
  test('LRU_SESSION_TIME_PERSIST', () =>
    expect(ENV.LRU_SESSION_TIME_PERSIST).not.toBeNaN());

  test('EMAIL_SYSTEM_NAME', () => expect(ENV.EMAIL_SYSTEM_NAME).not.toBe(''));
  test('EMAIL_HOST', () => expect(ENV.EMAIL_HOST).not.toBe(''));
  test('EMAIL_PORT', () => expect(ENV.EMAIL_PORT).not.toBeNaN());
  test('EMAIL_ADDRESS', () => expect(ENV.EMAIL_ADDRESS).not.toBe(''));
  test('EMAIL_PASSWORD', () => expect(ENV.EMAIL_PASSWORD).not.toBe(''));

  test('JWT_SECRETKEY', () => expect(ENV.JWT_SECRETKEY).not.toBe(''));
});
