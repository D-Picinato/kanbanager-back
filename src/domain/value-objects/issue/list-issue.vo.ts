import { Issue } from '@/domain/entities/issue';

export interface ListIssueVO {
  readonly boardId: Issue['boardId'];
  readonly columnId?: Issue['columnId'];
  readonly issueTypeId?: Issue['issueTypeId'];
  readonly parentIssueId?: Issue['parentIssueId'];
  readonly priority?: Issue['priority'];
}
