import { Request, Response } from 'express';

import { ResponseFormat } from '@/presentation/utils/response-format';

export function testConnectionPatchController(req: Request, res: Response) {
  return new ResponseFormat(200, 'PATCH').res(res);
}
