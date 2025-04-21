import { Board } from '@/domain/entities/board';

export interface UpdateBoardVO {
  readonly name?: Board['name'];
  readonly description?: Board['description'] | null;
}
