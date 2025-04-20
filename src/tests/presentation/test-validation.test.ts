import request from 'supertest';

import { app } from '@/presentation/http/app';

describe('Teste de endpoints com esquemas Zod', () => {
  // Body
  test('Valores corretos enviados no body', async () => {
    const res = await request(app)
      .post('/test-validation')
      .send({ numberInt: 1, number: 0.5, string: 'Teste' });
    expect(res.statusCode).toBe(200);
  });

  test('Valores corretos enviados no body - números passados como strings', async () => {
    const res = await request(app)
      .post('/test-validation')
      .send({ numberInt: '1', number: '0.5', string: 'Teste' });
    expect(res.statusCode).toBe(400);
  });

  test('Valores incorretos enviados no body - valores que não são números', async () => {
    const res = await request(app)
      .post('/test-validation')
      .send({
        numberInt: 'Olá Mundo!',
        number: 'Hello World!',
        string: 'Teste',
      });
    expect(res.statusCode).toBe(400);
  });

  // Query
  test('Valores corretos enviados na query - números passados como strings', async () => {
    const res = await request(app)
      .get('/test-validation')
      .query({ numberInt: '1', number: '0.5', string: 'Teste' });
    expect(res.statusCode).toBe(200);
  });

  test('Valores incorretos enviados na query - valores que não são números', async () => {
    const res = await request(app)
      .get('/test-validation')
      .query({
        numberInt: 'Olá Mundo!',
        number: 'Hello World!',
        string: 'Teste',
      });
    expect(res.statusCode).toBe(400);
  });
});
