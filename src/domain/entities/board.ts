import { User } from '@/domain/entities/user';

export class Board {
  constructor(
    public id: string,
    public name: string,
    public description: string | null,
    public userId: User['id'],
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
