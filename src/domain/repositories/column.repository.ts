import { Column } from '@/domain/entities/column';
import { ListColumnVO } from '@/domain/value-objects/column/list-column.vo';
import { UpdateColumnVO } from '@/domain/value-objects/column/update-column.vo';

export interface ColumnRepository {
  create(column: Column): Promise<void>;
  list(listColumnVO: ListColumnVO): Promise<Column[]>;
  getById(columnId: Column['id']): Promise<Column>;
  update(
    columnId: Column['id'],
    updateColumnVO: UpdateColumnVO,
  ): Promise<Column>;
  delete(columnId: Column['id']): Promise<Column>;
}
