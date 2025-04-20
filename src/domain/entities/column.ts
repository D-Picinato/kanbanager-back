import { IssueRepository } from '@/domain/repositories/issue.repository';

export class Column {
  constructor(
    public id: string,
    public name: string,
    public description: string | null,
    public boardId: string,
  ) {}

  async getIssues(issueRepository: IssueRepository) {
    issueRepository.listByColumnId(this.id);
  }
}
