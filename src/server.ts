import { ENV } from '@/configs/env.config';

import { app } from '@/presentation/http/app';

const HOST = `${ENV.HOST}:${ENV.PORT}`;
app.listen(ENV.PORT, () => console.log(`Running in: ${HOST}`));
