import fs from 'fs-extra';

import { openApiDocument } from '../src/presentation/docs';

(async () => {
  await fs.outputJson(
    './src/presentation/docs/generated/openapi.json',
    openApiDocument,
    { spaces: 2 },
  );
  console.log('Documentação gerada com sucesso.');
})();
