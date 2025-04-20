import { ZodOpenApiPathsObject } from 'zod-openapi';

import { response500 } from '@/presentation/docs/utils/generic-responses';
import { ResponseFormat } from '@/presentation/utils/response-format';

export const testConnectionDocs: ZodOpenApiPathsObject = {
  '/test-connection': {
    get: {
      tags: ['Testes de conexão'],
      summary: 'Teste GET',
      responses: {
        ...new ResponseFormat(200, 'GET').docResponse('Sucesso'),
        ...response500(),
      },
    },
    post: {
      tags: ['Testes de conexão'],
      summary: 'Teste POST',
      responses: {
        ...new ResponseFormat(200, 'POST').docResponse('Sucesso'),
        ...response500(),
      },
    },
    put: {
      tags: ['Testes de conexão'],
      summary: 'Teste PUT',
      responses: {
        ...new ResponseFormat(200, 'PUT').docResponse('Sucesso'),
        ...response500(),
      },
    },
    patch: {
      tags: ['Testes de conexão'],
      summary: 'Teste PATCH',
      responses: {
        ...new ResponseFormat(200, 'PATCH').docResponse('Sucesso'),
        ...response500(),
      },
    },
    delete: {
      tags: ['Testes de conexão'],
      summary: 'Teste DELETE',
      responses: {
        ...new ResponseFormat(200, 'DELETE').docResponse('Sucesso'),
        ...response500(),
      },
    },
  },
};
