import { BoardRepository } from '@/domain/repositories/board.repository';
import { SessionRepository } from '@/domain/repositories/session.repository';

export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public hashPassword: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}

  async getBoards(boardRepository: BoardRepository) {
    return await boardRepository.listByUserId(this.id);
  }

  getSessions(sessionRepository: SessionRepository) {
    return sessionRepository.listByUserId(this.id);
  }
}
