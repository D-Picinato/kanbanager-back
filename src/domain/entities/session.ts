import { UserRepository } from '@/domain/repositories/user.repository';

export class Session {
  constructor(
    public token: string,
    public ip: string,
    public userId: string,
  ) {}

  async getUser(userRepository: UserRepository) {
    userRepository.getById(this.userId);
  }
}
