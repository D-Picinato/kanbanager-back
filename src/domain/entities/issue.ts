export class Issue {
  constructor(
    public id: string,
    public name: string,
    public description: string | null,
    public priority: number,
    public boardId: string,
    public columnId: string | null,
    public issueTypeId: string,
    public parentIssueId: string | null,
    public childIssues: Issue[] = [],
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
