import { Column } from '@/domain/entities/column';

export class ColumnUpdateVO {
  constructor(
    public readonly name: Column['name'] | null,
    public readonly description: Column['description'] | null,
  ) {}
}
