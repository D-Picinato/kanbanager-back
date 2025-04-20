import { Router } from 'express';

import { zodValidateMiddleware } from '@/presentation/middlewares/zod-valitate.middleware';

import { testValidationBodyController } from '@/presentation/controllers/test-validation/body.controller';
import { testValidationQueryController } from '@/presentation/controllers/test-validation/query.controller';

import { testValidationBodySchema } from '@/presentation/schemas/test-validation/body.schema';
import { testValidationQuerySchema } from '@/presentation/schemas/test-validation/query.schema';

export const testValidationRouter = Router();

testValidationRouter.get(
  '/test-validation',
  zodValidateMiddleware('query', testValidationQuerySchema),
  testValidationQueryController,
);
testValidationRouter.post(
  '/test-validation',
  zodValidateMiddleware('body', testValidationBodySchema),
  testValidationBodyController,
);
