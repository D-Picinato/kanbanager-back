import { User } from '@/domain/entities/user';
import { GetUserVO } from '@/domain/value-objects/user/get-user.vo';
import { UpdateUserVO } from '@/domain/value-objects/user/update-user.vo';

export interface UserRepository {
  create(user: User): Promise<User>;
  get(getUserVO: GetUserVO): Promise<User>;
  update(userId: User['id'], updateUserVO: UpdateUserVO): Promise<User>;
  delete(userId: User['id']): Promise<User>;
}
