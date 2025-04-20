import { ColumnRepository } from '@/domain/repositories/column.repository';
import { IssueTypeRepository } from '@/domain/repositories/issue-type.repository';
import { IssueRepository } from '@/domain/repositories/issue.repository';

export class Board {
  constructor(
    public id: string,
    public name: string,
    public description: string | null,
    public userId: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}

  async getColumns(columnRepository: ColumnRepository) {
    columnRepository.listByBoardId(this.id);
  }

  async getIssueTypes(issueTypeRepository: IssueTypeRepository) {
    issueTypeRepository.listByBoardId(this.id);
  }

  async getIssues(issueRepository: IssueRepository) {
    issueRepository.listByBoardId(this.id);
  }
}
