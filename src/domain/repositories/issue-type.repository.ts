import { IssueType } from '@/domain/entities/issue-type';
import { IssueTypeUpdateVO } from '@/domain/value-objects/issue-type/update.vo';

export interface IssueTypeRepository {
  create(issueType: IssueType): Promise<void>;
  listByBoardId(boardId: IssueType['boardId']): Promise<IssueType[]>;
  getById(issueTypeId: IssueType['id']): Promise<IssueType>;
  update(
    issueTypeId: IssueType['id'],
    userUpdateVO: IssueTypeUpdateVO,
  ): Promise<IssueType>;
  delete(issueTypeId: IssueType['id']): Promise<IssueType>;
}
