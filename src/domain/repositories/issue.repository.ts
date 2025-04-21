import { Issue } from '@/domain/entities/issue';
import { ListIssueVO } from '@/domain/value-objects/issue/list-issue.vo';
import { UpdateIssueVO } from '@/domain/value-objects/issue/update-issue.vo';

export interface IssueRepository {
  create(issue: Issue): Promise<Issue>;
  list(listIssueVO: ListIssueVO): Promise<Issue[]>;
  getById(issueId: Issue['id']): Promise<Issue>;
  update(issueId: Issue['id'], updateIssueVO: UpdateIssueVO): Promise<Issue>;
  delete(issueId: Issue['id']): Promise<Issue>;
}
