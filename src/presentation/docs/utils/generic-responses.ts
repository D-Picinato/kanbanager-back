import { ResponseFormat } from '@/presentation/utils/response-format';

export const response400 = () =>
  new ResponseFormat(400, 'Campos inválidos!', [
    {
      code: 'invalid_type',
      expected: 'number',
      received: 'nan',
      path: ['caminho.do.campo'],
      message: 'Mensagem do erro!',
    },
  ]).docResponse('Campos inválidos');

export const response404 = (message?: string) =>
  new ResponseFormat(404, message || 'Registro não encontrado!').docResponse(
    'Registro não encontrado',
  );

export const response409 = (message?: string) =>
  new ResponseFormat(409, message || 'Credenciais já cadastradas!').docResponse(
    'Credenciais já cadastradas',
  );

export const response500 = () =>
  new ResponseFormat(500, 'Erro interno no servidor!').docResponse(
    'Erro interno no servidor',
  );
