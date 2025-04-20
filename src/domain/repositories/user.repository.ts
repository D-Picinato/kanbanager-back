import { User } from '@/domain/entities/user';
import { UserUpdateVO } from '@/domain/value-objects/user/update.vo';

export interface UserRepository {
  create(user: User): Promise<void>;
  getById(userId: User['id']): Promise<User>;
  getByEmail(userEmail: User['email']): Promise<User>;
  update(userId: User['id'], userUpdateVO: UserUpdateVO): Promise<User>;
  delete(userId: User['id']): Promise<User>;
}
