import { User } from '@/domain/entities/user';

export class UserUpdateVO {
  constructor(
    public readonly name: User['name'] | null,
    public readonly email: User['email'] | null,
    public readonly hashPassword: User['hashPassword'] | null,
  ) {}
}
