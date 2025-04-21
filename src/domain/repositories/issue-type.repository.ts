import { IssueType } from '@/domain/entities/issue-type';
import { UpdateIssueTypeVO } from '@/domain/value-objects/issue-type/update-issue-type.vo';

export interface IssueTypeRepository {
  create(issueType: IssueType): Promise<void>;
  listByBoardId(boardId: IssueType['boardId']): Promise<IssueType[]>;
  getById(issueTypeId: IssueType['id']): Promise<IssueType>;
  update(
    issueTypeId: IssueType['id'],
    updateIssueTypeVO: UpdateIssueTypeVO,
  ): Promise<IssueType>;
  delete(issueTypeId: IssueType['id']): Promise<IssueType>;
}
