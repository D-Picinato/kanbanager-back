import { IssueRepository } from '@/domain/repositories/issue.repository';

export class IssueType {
  constructor(
    public id: string,
    public name: string,
    public description: string | null,
    public color: string,
    public boardId: string,
  ) {}

  async getIssues(issueRepository: IssueRepository) {
    issueRepository.listByIssueTypeId(this.id);
  }
}
