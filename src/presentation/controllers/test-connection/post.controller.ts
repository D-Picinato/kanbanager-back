import { Request, Response } from 'express';

import { ResponseFormat } from '@/presentation/utils/response-format';

export function testConnectionPostController(req: Request, res: Response) {
  return new ResponseFormat(200, 'POST').res(res);
}
