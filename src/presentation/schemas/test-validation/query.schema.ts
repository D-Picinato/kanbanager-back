import { z } from 'zod';
import 'zod-openapi/extend';

export type TestValidationQuerySchema = z.infer<
  typeof testValidationQuerySchema
>;
export const testValidationQuerySchema = z.object({
  numberInt: z.coerce
    .number({ message: 'Informe um número válido!' })
    .int({ message: 'Informe um número inteiro!' })
    .openapi({ description: 'Campo de número inteiro', example: 1 }),
  number: z.coerce
    .number({ message: 'Informe um número válido!' })
    .openapi({ description: 'Campo de número', example: 1.54 }),
  string: z
    .string({ message: 'Insira uma string válida!' })
    .trim()
    .min(1, { message: 'A string deve possuir no mínimo 1 caractere!' })
    .max(150, { message: 'A string deve possuir no máximo 150 caracteres!' })
    .openapi({ description: 'Campo de string', example: 'Hello World' }),
});
