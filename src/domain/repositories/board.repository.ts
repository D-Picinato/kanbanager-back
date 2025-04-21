import { Board } from '@/domain/entities/board';
import { listBoardVO } from '@/domain/value-objects/board/list-board.vo';
import { UpdateBoardVO } from '@/domain/value-objects/board/update-board.vo';

export interface BoardRepository {
  create(board: Board): Promise<void>;
  list(listBoardVO: listBoardVO): Promise<Board[]>;
  getById(boardId: Board['id']): Promise<Board>;
  update(boardId: Board['id'], updateBoardVO: UpdateBoardVO): Promise<Board>;
  delete(boardId: Board['id']): Promise<Board>;
}
