import { Issue } from '@/domain/entities/issue';

export interface UpdateIssueVO {
  readonly name?: Issue['name'];
  readonly description?: Issue['description'];
  readonly priority?: Issue['priority'];
}
