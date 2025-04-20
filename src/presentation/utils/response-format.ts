import { Response } from 'express';
import { ZodOpenApiResponsesObject } from 'zod-openapi';

export class ResponseFormat<T> {
  private success: boolean;
  private data: T | null;

  constructor(
    private status: number,
    private message: string,
    data?: T,
  ) {
    this.success = this.status < 400;
    this.data = data || null;
  }

  res = (res: Response) => {
    res.status(this.status).json(this);
  };

  json = () => JSON.stringify(this);

  docResponse = (
    description: string,
  ): Record<number, ZodOpenApiResponsesObject['default']> => ({
    [this.status]: {
      description,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              success: { type: 'boolean', example: this.success },
              status: { type: 'integer', example: this.status },
              message: { type: 'string', example: this.message },
              data: { type: this.data ? 'object' : 'null', example: this.data },
            },
          },
        },
      },
    },
  });
}
