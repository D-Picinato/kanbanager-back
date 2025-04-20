import { lruCache } from '@/infrastructure/configs/lru.config';
import { prisma } from '@/infrastructure/configs/prisma.config';

import { IssueType } from '@/domain/entities/issue-type';
import { IssueTypeRepository } from '@/domain/repositories/issue-type.repository';
import { IssueTypeUpdateVO } from '@/domain/value-objects/issue-type/update.vo';

export class PrismaIssueTypeRepository implements IssueTypeRepository {
  private cache = lruCache<IssueType>();
  private cacheList = lruCache<IssueType[]>();

  async create(issueType: IssueType): Promise<void> {
    await prisma.issueType.create({ data: issueType });

    this.cache.set(`@issueType:${issueType.id}`, issueType);
    this.cacheList.delete(`@issueTypes:${issueType.boardId}`);
  }

  async getById(issueTypeId: IssueType['id']): Promise<IssueType> {
    const cachedIssueType = this.cache.get(`@issueType:${issueTypeId}`);
    if (cachedIssueType) return cachedIssueType;

    const { id, name, description, color, boardId } =
      await prisma.issueType.findUniqueOrThrow({ where: { id: issueTypeId } });

    const issueType = new IssueType(id, name, description, color, boardId);

    this.cache.set(`@issueType:${id}`, issueType);

    return issueType;
  }

  async listByBoardId(boardId: IssueType['boardId']): Promise<IssueType[]> {
    const cachedIssueTypes = this.cacheList.get(`@issueTypes:${boardId}`);
    if (cachedIssueTypes) return cachedIssueTypes;

    const issueTypes = (
      await prisma.issueType.findMany({
        where: { boardId },
        orderBy: { name: 'asc' },
      })
    ).map(
      ({ id, name, description, color, boardId }) =>
        new IssueType(id, name, description, color, boardId),
    );

    this.cacheList.set(`@issueTypes:${boardId}`, issueTypes);

    return issueTypes;
  }

  async update(
    issueTypeId: IssueType['id'],
    issueTypeUpdateVO: IssueTypeUpdateVO,
  ): Promise<IssueType> {
    const { id, name, description, color, boardId } =
      await prisma.issueType.update({
        where: { id: issueTypeId },
        data: {
          name: issueTypeUpdateVO.name || undefined,
          description: issueTypeUpdateVO.description || undefined,
        },
      });

    const issueType = new IssueType(id, name, description, color, boardId);

    this.cache.set(`@issueType:${id}`, issueType);
    this.cacheList.delete(`@issueTypes:${boardId}`);

    return issueType;
  }

  async delete(issueTypeId: IssueType['id']): Promise<IssueType> {
    const { id, name, description, color, boardId } =
      await prisma.issueType.delete({ where: { id: issueTypeId } });

    this.cache.delete(`@issueType:${id}`);
    this.cacheList.delete(`@issueTypes:${boardId}`);

    return new IssueType(id, name, description, color, boardId);
  }
}
