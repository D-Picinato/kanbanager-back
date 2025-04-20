import { Router } from 'express';

import { docsRouter } from '@/presentation/routes/docs.routes';
import { testConnectionRouter } from '@/presentation/routes/test-connection.routes';
import { testValidationRouter } from '@/presentation/routes/test-validation.routes';

export const appRouter = Router();

appRouter.use(docsRouter);
appRouter.use(testConnectionRouter);
appRouter.use(testValidationRouter);
