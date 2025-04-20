import { Issue } from '@/domain/entities/issue';

export class IssueUpdateVO {
  constructor(
    public readonly name: Issue['name'] | null,
    public readonly description: Issue['description'] | null,
    public readonly priority: Issue['priority'] | null,
  ) {}
}
