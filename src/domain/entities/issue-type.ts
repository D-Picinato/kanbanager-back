import { Board } from '@/domain/entities/board';

export class IssueType {
  constructor(
    public id: string,
    public name: string,
    public description: string | null,
    public color: string,
    public boardId: Board['id'],
  ) {}
}
