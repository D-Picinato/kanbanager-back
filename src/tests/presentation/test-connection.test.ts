import request from 'supertest';

import { app } from '@/presentation/http/app';

import { ResponseFormat } from '@/presentation/utils/response-format';

describe('Teste de conexão com a API', () => {
  test('GET', async () => {
    const res = await request(app).get('/test-connection');
    expect(res.statusCode).toBe(200);
    expect(JSON.stringify(res.body)).toBe(
      new ResponseFormat(200, 'GET').json(),
    );
  });

  test('POST', async () => {
    const res = await request(app).post('/test-connection');
    expect(res.statusCode).toBe(200);
    expect(JSON.stringify(res.body)).toBe(
      new ResponseFormat(200, 'POST').json(),
    );
  });

  test('PUT', async () => {
    const res = await request(app).put('/test-connection');
    expect(res.statusCode).toBe(200);
    expect(JSON.stringify(res.body)).toBe(
      new ResponseFormat(200, 'PUT').json(),
    );
  });

  test('PATCH', async () => {
    const res = await request(app).patch('/test-connection');
    expect(res.statusCode).toBe(200);
    expect(JSON.stringify(res.body)).toBe(
      new ResponseFormat(200, 'PATCH').json(),
    );
  });

  test('DELETE', async () => {
    const res = await request(app).delete('/test-connection');
    expect(res.statusCode).toBe(200);
    expect(JSON.stringify(res.body)).toBe(
      new ResponseFormat(200, 'DELETE').json(),
    );
  });

  test('404 Route', async () => {
    const res = await request(app).get(`/${crypto.randomUUID()}`);
    expect(res.statusCode).toBe(404);
  });
});
