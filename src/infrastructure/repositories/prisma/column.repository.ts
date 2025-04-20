import { lruCache } from '@/infrastructure/configs/lru.config';
import { prisma } from '@/infrastructure/configs/prisma.config';

import { Column } from '@/domain/entities/column';
import { ColumnRepository } from '@/domain/repositories/column.repository';
import { ColumnUpdateVO } from '@/domain/value-objects/column/update.vo';

export class PrismaColumnRepository implements ColumnRepository {
  private cache = lruCache<Column>();
  private cacheList = lruCache<Column[]>();

  async create(column: Column): Promise<void> {
    await prisma.column.create({ data: column });

    this.cache.set(`@column:${column.id}`, column);
    this.cacheList.delete(`@columns:${column.boardId}`);
  }

  async getById(columnId: Column['id']): Promise<Column> {
    const cachedColumn = this.cache.get(`@column:${columnId}`);
    if (cachedColumn) return cachedColumn;

    const { id, name, description, boardId } =
      await prisma.column.findUniqueOrThrow({ where: { id: columnId } });

    const column = new Column(id, name, description, boardId);

    this.cache.set(`@column:${id}`, column);

    return column;
  }

  async listByBoardId(boardId: Column['boardId']): Promise<Column[]> {
    const cachedColumns = this.cacheList.get(`@columns:${boardId}`);
    if (cachedColumns) return cachedColumns;

    const columns = (
      await prisma.column.findMany({
        where: { boardId },
        orderBy: { name: 'asc' },
      })
    ).map(
      ({ id, name, description, boardId }) =>
        new Column(id, name, description, boardId),
    );

    this.cacheList.set(`@columns:${boardId}`, columns);

    return columns;
  }

  async update(
    columnId: Column['id'],
    columnUpdateVO: ColumnUpdateVO,
  ): Promise<Column> {
    const { id, name, description, boardId } = await prisma.column.update({
      where: { id: columnId },
      data: { name: columnUpdateVO.name || undefined },
    });

    const column = new Column(id, name, description, boardId);

    this.cache.set(`@column:${id}`, column);
    this.cacheList.delete(`@columns:${boardId}`);

    return column;
  }

  async delete(columnId: Column['id']): Promise<Column> {
    const { id, name, description, boardId } = await prisma.column.delete({
      where: { id: columnId },
    });

    this.cache.delete(`@column:${id}`);
    this.cacheList.delete(`@columns:${boardId}`);

    return new Column(id, name, description, boardId);
  }
}
