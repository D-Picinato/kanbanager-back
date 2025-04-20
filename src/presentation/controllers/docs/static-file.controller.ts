import { Request, Response } from 'express';
import path from 'path';

export function docsStaticFile(req: Request, res: Response) {
  res.sendFile(path.join(__dirname, '../../docs/generated/openapi.json'));
}
