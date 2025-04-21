import { Board } from '@/domain/entities/board';
import { Column } from '@/domain/entities/column';
import { IssueType } from '@/domain/entities/issue-type';

export class Issue {
  constructor(
    public id: string,
    public name: string,
    public description: string | null,
    public priority: number,
    public boardId: Board['id'],
    public columnId: Column['id'] | null,
    public issueTypeId: IssueType['id'],
    public parentIssueId: Issue['id'] | null,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
