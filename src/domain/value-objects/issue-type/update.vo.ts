import { IssueType } from '@/domain/entities/issue-type';

export class IssueTypeUpdateVO {
  constructor(
    public readonly name: IssueType['name'] | null,
    public readonly description: IssueType['description'] | null,
    public readonly color: IssueType['color'] | null,
  ) {}
}
