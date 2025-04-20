import { NextFunction, Request, Response } from 'express';

import { requestContext } from '@/presentation/contexts/request.context';

export function contextMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  requestContext.run({ catchErrorOptions: {} }, next);
}
