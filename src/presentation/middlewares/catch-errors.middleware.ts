import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { NextFunction, Request, Response } from 'express';

import { requestContext } from '@/presentation/contexts/request.context';

import { ResponseFormat } from '@/presentation/utils/response-format';

export const catchErrorMiddleware = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!error) return next();

  if (error instanceof ResponseFormat) return error.res(res);

  const reqCtx = requestContext.getStore();

  if (error instanceof PrismaClientKnownRequestError) {
    switch (error.code) {
      // Violação de unicidade
      case 'P2002':
        return new ResponseFormat(
          409,
          reqCtx?.catchErrorOptions.messageP2002 ||
            'Credenciais já cadastradas!',
          error.meta,
        ).res(res);

      // Registro não encontrado
      case 'P2025':
        return new ResponseFormat(
          404,
          reqCtx?.catchErrorOptions.messageP2025 || 'Registro não encontrado!',
        ).res(res);
    }
  }

  console.error(error);
  return new ResponseFormat(500, 'Erro interno no servidor!').res(res);
};
