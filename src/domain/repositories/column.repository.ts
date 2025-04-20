import { Column } from '@/domain/entities/column';
import { ColumnUpdateVO } from '@/domain/value-objects/column/update.vo';

export interface ColumnRepository {
  create(column: Column): Promise<void>;
  listByBoardId(boardId: Column['boardId']): Promise<Column[]>;
  getById(columnId: Column['id']): Promise<Column>;
  update(
    columnId: Column['id'],
    columnUpdateVO: ColumnUpdateVO,
  ): Promise<Column>;
  delete(columnId: Column['id']): Promise<Column>;
}
