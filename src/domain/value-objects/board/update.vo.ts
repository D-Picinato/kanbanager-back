import { Board } from '@/domain/entities/board';

export class BoardUpdateVO {
  constructor(
    public readonly name: Board['name'] | null,
    public readonly description: Board['description'] | null,
  ) {}
}
