import { IssueType } from '@/domain/entities/issue-type';
import { MetaInputVO } from '@/domain/value-objects/meta/meta-input.vo';

export interface ListIssueTypeVO extends MetaInputVO<IssueType> {
  readonly boardId: IssueType['boardId'];
}
