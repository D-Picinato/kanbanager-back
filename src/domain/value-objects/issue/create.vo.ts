import { Issue } from '@/domain/entities/issue';

export class IssueCreateVO {
  constructor(
    public readonly id: Issue['id'],
    public readonly name: Issue['name'],
    public readonly description: Issue['description'] | null,
    public readonly priority: Issue['priority'],
    public readonly boardId: Issue['boardId'],
    public readonly columnId: Issue['columnId'] | null,
    public readonly issueTypeId: Issue['issueTypeId'],
    public readonly parentIssueId: Issue['parentIssueId'] | null,
    public readonly createdAt: Issue['createdAt'],
    public readonly updatedAt: Issue['updatedAt'],
  ) {}
}
