import { testConnectionDocs } from '@/presentation/docs/test-connection.docs';
import { testValidationDocs } from '@/presentation/docs/test-validation';
import { createDocument } from 'zod-openapi';

export const openApiDocument = createDocument({
  openapi: '3.1.0',
  info: {
    title: 'Kanbanager API',
    version: '0.1.0',
    description: 'Documentação da API do Kanbanager',
  },
  paths: { ...testConnectionDocs, ...testValidationDocs },
  tags: [
    {
      name: 'Testes de conexão',
      description: 'Endpoints para testes de conexão com a API',
    },
    {
      name: 'Testes de validação',
      description: 'Endpoints para testes de validação de esquemas Zod',
    },
  ],
});
