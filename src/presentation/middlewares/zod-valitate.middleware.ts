import { NextFunction, Request, Response } from 'express';
import { ZodType } from 'zod';

import { ResponseFormat } from '@/presentation/utils/response-format';

export const zodValidateMiddleware =
  (type: 'query' | 'body', schema: ZodType) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { data, error } = schema.safeParse(
      type === 'body' ? req.body : req.query,
    );

    if (error)
      return new ResponseFormat(400, 'Campos inválidos!', error.errors).res(
        res,
      );

    if (type === 'body') req.body = data;
    else req.query = data;

    return next();
  };
