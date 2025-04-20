import { Request, Response } from 'express';

import { ResponseFormat } from '@/presentation/utils/response-format';

export function testValidationQueryController(req: Request, res: Response) {
  return new ResponseFormat(200, 'Query', req.query).res(res);
}
