import { lruCache } from '@/infrastructure/configs/lru.config';
import { prisma } from '@/infrastructure/configs/prisma.config';

import { Issue } from '@/domain/entities/issue';
import { IssueRepository } from '@/domain/repositories/issue.repository';
import { IssueCreateVO } from '@/domain/value-objects/issue/create.vo';
import { IssueUpdateVO } from '@/domain/value-objects/issue/update.vo';

export class PrismaIssueRepository implements IssueRepository {
  private cache = lruCache<Issue>();
  private cacheList = lruCache<Issue[]>();

  async create(issueCreateVO: IssueCreateVO): Promise<void> {
    await prisma.issue.create({ data: issueCreateVO });

    const {
      id,
      name,
      description,
      priority,
      boardId,
      columnId,
      issueTypeId,
      parentIssueId,
      createdAt,
      updatedAt,
    } = issueCreateVO;

    const issue = new Issue(
      id,
      name,
      description,
      priority,
      boardId,
      columnId,
      issueTypeId,
      parentIssueId,
      [],
      createdAt,
      updatedAt,
    );

    this.cache.set(`@issue:${issue.id}`, issue);
    this.cacheList.delete(`@issues:board:${issue.boardId}`);
    this.cacheList.delete(`@issues:column:${issue.columnId}`);
    this.cacheList.delete(`@issues:issueType:${issue.issueTypeId}`);
  }

  async getById(issueId: Issue['id']): Promise<Issue> {
    const cachedIssue = this.cache.get(`@issue:${issueId}`);
    if (cachedIssue) return cachedIssue;

    const {
      id,
      name,
      description,
      priority,
      boardId,
      columnId,
      issueTypeId,
      parentIssueId,
      createdAt,
      updatedAt,
    } = await prisma.issue.findUniqueOrThrow({ where: { id: issueId } });

    const issue = new Issue(
      id,
      name,
      description,
      priority,
      boardId,
      columnId,
      issueTypeId,
      parentIssueId,
      [],
      createdAt,
      updatedAt,
    );

    this.cache.set(`@issue:${id}`, issue);

    return issue;
  }

  async listByBoardId(boardId: Issue['boardId']): Promise<Issue[]> {
    const cachedIssues = this.cacheList.get(`@issues:board:${boardId}`);
    if (cachedIssues) return cachedIssues;

    const issues = (
      await prisma.issue.findMany({
        where: { boardId },
        orderBy: { createdAt: 'asc' },
      })
    ).map(
      ({
        id,
        name,
        description,
        priority,
        boardId,
        columnId,
        issueTypeId,
        parentIssueId,
        createdAt,
        updatedAt,
      }) =>
        new Issue(
          id,
          name,
          description,
          priority,
          boardId,
          columnId,
          issueTypeId,
          parentIssueId,
          [],
          createdAt,
          updatedAt,
        ),
    );

    this.cacheList.set(`@issues:board:${boardId}`, issues);

    return issues;
  }

  async listByColumnId(columnId: Issue['columnId']): Promise<Issue[]> {
    const cachedIssues = this.cacheList.get(`@issues:column:${columnId}`);
    if (cachedIssues) return cachedIssues;

    const issues = (
      await prisma.issue.findMany({
        where: { columnId },
        orderBy: { createdAt: 'asc' },
      })
    ).map(
      ({
        id,
        name,
        description,
        priority,
        boardId,
        columnId,
        issueTypeId,
        parentIssueId,
        createdAt,
        updatedAt,
      }) =>
        new Issue(
          id,
          name,
          description,
          priority,
          boardId,
          columnId,
          issueTypeId,
          parentIssueId,
          [],
          createdAt,
          updatedAt,
        ),
    );

    this.cacheList.set(`@issues:column:${columnId}`, issues);

    return issues;
  }

  async listByIssueTypeId(issueTypeId: Issue['issueTypeId']): Promise<Issue[]> {
    const cachedIssues = this.cacheList.get(`@issues:issueType:${issueTypeId}`);
    if (cachedIssues) return cachedIssues;

    const issues = (
      await prisma.issue.findMany({
        where: { issueTypeId },
        orderBy: { createdAt: 'asc' },
      })
    ).map(
      ({
        id,
        name,
        description,
        priority,
        boardId,
        columnId,
        issueTypeId,
        parentIssueId,
        createdAt,
        updatedAt,
      }) =>
        new Issue(
          id,
          name,
          description,
          priority,
          boardId,
          columnId,
          issueTypeId,
          parentIssueId,
          [],
          createdAt,
          updatedAt,
        ),
    );

    this.cacheList.set(`@issues:issueType:${issueTypeId}`, issues);

    return issues;
  }

  async update(
    issueId: Issue['id'],
    issueUpdateVO: IssueUpdateVO,
  ): Promise<Issue> {
    const {
      id,
      name,
      description,
      priority,
      boardId,
      columnId,
      issueTypeId,
      parentIssueId,
      createdAt,
      updatedAt,
    } = await prisma.issue.update({
      where: { id: issueId },
      data: {
        name: issueUpdateVO.name || undefined,
        description: issueUpdateVO.description || undefined,
        priority: issueUpdateVO.priority || undefined,
      },
    });

    const issue = new Issue(
      id,
      name,
      description,
      priority,
      boardId,
      columnId,
      issueTypeId,
      parentIssueId,
      [],
      createdAt,
      updatedAt,
    );

    this.cache.set(`@issue:${id}`, issue);
    this.cacheList.delete(`@issues:board:${boardId}`);
    this.cacheList.delete(`@issues:column:${columnId}`);
    this.cacheList.delete(`@issues:issueType:${issueTypeId}`);

    return issue;
  }

  async delete(issueId: Issue['id']): Promise<Issue> {
    const {
      id,
      name,
      description,
      priority,
      boardId,
      columnId,
      issueTypeId,
      parentIssueId,
      createdAt,
      updatedAt,
    } = await prisma.issue.delete({ where: { id: issueId } });

    this.cache.delete(`@issue:${id}`);
    this.cacheList.delete(`@issues:board:${boardId}`);
    this.cacheList.delete(`@issues:column:${columnId}`);
    this.cacheList.delete(`@issues:issueType:${issueTypeId}`);

    return new Issue(
      id,
      name,
      description,
      priority,
      boardId,
      columnId,
      issueTypeId,
      parentIssueId,
      [],
      createdAt,
      updatedAt,
    );
  }
}
