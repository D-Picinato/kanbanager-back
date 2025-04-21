import { User } from '@/domain/entities/user';

export interface GetUserVO {
  id?: User['id'];
  email?: User['email'];
}
