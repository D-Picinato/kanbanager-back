import { Board } from '@/domain/entities/board';

export class Column {
  constructor(
    public id: string,
    public name: string,
    public description: string | null,
    public boardId: Board['id'],
  ) {}
}
