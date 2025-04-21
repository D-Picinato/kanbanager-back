import { User } from '@/domain/entities/user';

export interface UpdateUserVO {
  readonly name?: User['name'];
  readonly email?: User['email'];
  readonly hashPassword?: User['hashPassword'];
}
