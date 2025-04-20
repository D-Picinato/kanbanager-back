import { ZodOpenApiPathsObject } from 'zod-openapi';

import { testValidationBodySchema } from '@/presentation/schemas/test-validation/body.schema';
import { testValidationQuerySchema } from '@/presentation/schemas/test-validation/query.schema';

import {
  response400,
  response500,
} from '@/presentation/docs/utils/generic-responses';
import { ResponseFormat } from '@/presentation/utils/response-format';

export const testValidationDocs: ZodOpenApiPathsObject = {
  '/test-validation': {
    get: {
      tags: ['Testes de validação'],
      summary: 'Teste Query',
      requestParams: { query: testValidationQuerySchema },
      responses: {
        ...new ResponseFormat(200, 'Query', {
          numberInt: 1,
          number: 1.54,
          string: 'Hello World',
        }).docResponse('Sucesso'),
        ...response400(),
        ...response500(),
      },
    },
    post: {
      tags: ['Testes de validação'],
      summary: 'Teste Body',
      requestBody: {
        content: { 'application/json': { schema: testValidationBodySchema } },
      },
      responses: {
        ...new ResponseFormat(200, 'Body', {
          numberInt: 1,
          number: 1.54,
          string: 'Hello World',
        }).docResponse('Sucesso'),
        ...response400(),
        ...response500(),
      },
    },
  },
};
