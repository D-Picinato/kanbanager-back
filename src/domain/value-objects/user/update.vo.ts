import { User } from '@/domain/entities/user';

export class UserUpdateVO {
  constructor(
    public readonly name?: User['name'],
    public readonly email?: User['email'],
    public readonly hashPassword?: User['hashPassword'],
  ) {}
}
