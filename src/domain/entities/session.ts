import { User } from '@/domain/entities/user';

export class Session {
  constructor(
    public token: string,
    public ip: string,
    public userId: User['id'],
  ) {}
}
