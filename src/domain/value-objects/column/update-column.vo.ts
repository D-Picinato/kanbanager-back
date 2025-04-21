import { Column } from '@/domain/entities/column';

export interface UpdateColumnVO {
  readonly name?: Column['name'];
  readonly description?: Column['description'] | null;
}
