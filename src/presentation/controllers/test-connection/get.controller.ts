import { Request, Response } from 'express';

import { ResponseFormat } from '@/presentation/utils/response-format';

export function testConnectionGetController(req: Request, res: Response) {
  return new ResponseFormat(200, 'GET').res(res);
}
