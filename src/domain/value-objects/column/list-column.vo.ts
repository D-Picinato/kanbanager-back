import { Column } from '@/domain/entities/column';
import { MetaInputVO } from '@/domain/value-objects/meta/meta-input.vo';

export interface ListColumnVO extends MetaInputVO<Column> {
  readonly boardId: Column['boardId'];
  readonly name?: Column['name'];
  readonly description?: Column['description'] | null;
}
