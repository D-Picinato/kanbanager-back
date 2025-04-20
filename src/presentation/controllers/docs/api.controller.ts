import { Request, Response } from 'express';

export function docsApiController(req: Request, res: Response) {
  res.send(`
    <!doctype html>
    <html>
      <head>
        <title>Documentação da API do Kanbanager</title>
        <script type="module" src="https://unpkg.com/rapidoc/dist/rapidoc-min.js"></script>
      </head>
      <body>
        <rapi-doc
          spec-url="/docs/static-file"
          render-style="read"
          theme="light"
          show-header="true"
          allow-try="true"
          primary-color="#0084ff"
        >
        </rapi-doc>
      </body>
    </html>
  `);
}
