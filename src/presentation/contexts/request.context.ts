import { AsyncLocalStorage } from 'node:async_hooks';

import { RequestContextProps } from '@/presentation/@types/request-contexts';

export const requestContext = new AsyncLocalStorage<RequestContextProps>();
