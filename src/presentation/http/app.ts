import express from 'express';

import { appRouter } from '@/presentation/routes/app.routes';

import { catchErrorMiddleware } from '@/presentation/middlewares/catch-errors.middleware';
import { contextMiddleware } from '@/presentation/middlewares/context.middleware';
import { corsMiddleware } from '@/presentation/middlewares/cors.middleware';

export const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use(contextMiddleware);
app.use(appRouter);
app.use(catchErrorMiddleware);
