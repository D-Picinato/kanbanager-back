import { lruCache } from '@/infrastructure/configs/lru.config';
import { prisma } from '@/infrastructure/configs/prisma.config';

import { Board } from '@/domain/entities/board';
import { BoardRepository } from '@/domain/repositories/board.repository';
import { BoardUpdateVO } from '@/domain/value-objects/board/update.vo';

export class PrismaBoardRepository implements BoardRepository {
  private cache = lruCache<Board>();
  private cacheList = lruCache<Board[]>();

  async create(board: Board): Promise<void> {
    await prisma.board.create({ data: board });

    this.cache.set(`@board:${board.id}`, board);
    this.cacheList.delete(`@boards:${board.userId}`);
  }

  async getById(boardId: Board['id']): Promise<Board> {
    const cachedBoard = this.cache.get(`@board:${boardId}`);
    if (cachedBoard) return cachedBoard;

    const { id, name, description, userId, createdAt, updatedAt } =
      await prisma.board.findUniqueOrThrow({ where: { id: boardId } });

    const board = new Board(
      id,
      name,
      description,
      userId,
      createdAt,
      updatedAt,
    );

    this.cache.set(`@board:${id}`, board);

    return board;
  }

  async listByUserId(userId: Board['userId']): Promise<Board[]> {
    const cachedBoards = this.cacheList.get(`@boards:${userId}`);
    if (cachedBoards) return cachedBoards;

    const boards = (
      await prisma.board.findMany({
        where: { userId },
        orderBy: { name: 'asc' },
      })
    ).map(
      ({ id, name, description, createdAt, updatedAt }) =>
        new Board(id, name, description, userId, createdAt, updatedAt),
    );

    this.cacheList.set(`@boards:${userId}`, boards);

    return boards;
  }

  async update(
    boardId: Board['id'],
    boardUpdateVO: BoardUpdateVO,
  ): Promise<Board> {
    const { id, name, description, userId, createdAt, updatedAt } =
      await prisma.board.update({
        where: { id: boardId },
        data: {
          name: boardUpdateVO.name || undefined,
          description: boardUpdateVO.description || undefined,
        },
      });

    const board = new Board(
      id,
      name,
      description,
      userId,
      createdAt,
      updatedAt,
    );

    this.cache.set(`@board:${id}`, board);
    this.cacheList.delete(`@boards:${userId}`);

    return board;
  }

  async delete(boardId: Board['id']): Promise<Board> {
    const { id, name, description, userId, createdAt, updatedAt } =
      await prisma.board.delete({ where: { id: boardId } });

    this.cache.delete(`@board:${id}`);
    this.cacheList.delete(`@boards:${userId}`);

    return new Board(id, name, description, userId, createdAt, updatedAt);
  }
}
