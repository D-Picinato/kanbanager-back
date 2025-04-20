import { Router } from 'express';

import { testConnectionDeleteController } from '@/presentation/controllers/test-connection/delete.controller';
import { testConnectionGetController } from '@/presentation/controllers/test-connection/get.controller';
import { testConnectionPatchController } from '@/presentation/controllers/test-connection/patch.controller';
import { testConnectionPostController } from '@/presentation/controllers/test-connection/post.controller';
import { testConnectionPutController } from '@/presentation/controllers/test-connection/put.controller';

export const testConnectionRouter = Router();

testConnectionRouter.get('/test-connection', testConnectionGetController);
testConnectionRouter.post('/test-connection', testConnectionPostController);
testConnectionRouter.put('/test-connection', testConnectionPutController);
testConnectionRouter.patch('/test-connection', testConnectionPatchController);
testConnectionRouter.delete('/test-connection', testConnectionDeleteController);
