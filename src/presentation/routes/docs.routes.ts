import { Router } from 'express';

import { docsApiController } from '@/presentation/controllers/docs/api.controller';
import { docsStaticFile } from '@/presentation/controllers/docs/static-file.controller';

export const docsRouter = Router();

docsRouter.get('/docs/api', docsApiController);
docsRouter.get('/docs/static-file', docsStaticFile);
