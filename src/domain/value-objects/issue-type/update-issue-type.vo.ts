import { IssueType } from '@/domain/entities/issue-type';

export interface UpdateIssueTypeVO {
  readonly name?: IssueType['name'];
  readonly description?: IssueType['description'] | null;
  readonly color?: IssueType['color'];
}
