import { Board } from '@/domain/entities/board';
import { BoardUpdateVO } from '@/domain/value-objects/board/update.vo';

export interface BoardRepository {
  create(board: Board): Promise<void>;
  listByUserId(userId: Board['userId']): Promise<Board[]>;
  getById(boardId: Board['id']): Promise<Board>;
  update(userId: Board['id'], userUpdateVO: BoardUpdateVO): Promise<Board>;
  delete(boardId: Board['id']): Promise<Board>;
}
