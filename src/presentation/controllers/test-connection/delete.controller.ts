import { Request, Response } from 'express';

import { ResponseFormat } from '@/presentation/utils/response-format';

export function testConnectionDeleteController(req: Request, res: Response) {
  return new ResponseFormat(200, 'DELETE').res(res);
}
