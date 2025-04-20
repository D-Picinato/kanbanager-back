import { Issue } from '@/domain/entities/issue';
import { IssueUpdateVO } from '@/domain/value-objects/issue/update.vo';

export interface IssueRepository {
  create(issue: Issue): Promise<void>;
  listByBoardId(boardId: Issue['boardId']): Promise<Issue[]>;
  listByColumnId(boardId: Issue['columnId']): Promise<Issue[]>;
  listByIssueTypeId(boardId: Issue['issueTypeId']): Promise<Issue[]>;
  getById(issueId: Issue['id']): Promise<Issue>;
  update(issueId: Issue['id'], issueUpdateVO: IssueUpdateVO): Promise<Issue>;
  delete(issueId: Issue['id']): Promise<Issue>;
}
