import { lruCache } from '@/infrastructure/configs/lru.config';
import { prisma } from '@/infrastructure/configs/prisma.config';

import { User } from '@/domain/entities/user';
import { UserRepository } from '@/domain/repositories/user.repository';
import { UserUpdateVO } from '@/domain/value-objects/user/update.vo';

export class PrismaUserRepository implements UserRepository {
  private cache = lruCache<User>();

  async create(user: User): Promise<void> {
    await prisma.user.create({ data: user });
    this.cache.set(`@user:${user.id}`, user);
  }

  async getByEmail(userEmail: User['email']): Promise<User> {
    const cachedUser = this.cache.get(`@user:email:${userEmail}`);
    if (cachedUser) return cachedUser;

    const { id, name, email, hashPassword, createdAt, updatedAt } =
      await prisma.user.findUniqueOrThrow({ where: { email: userEmail } });

    const user = new User(id, name, email, hashPassword, createdAt, updatedAt);

    this.cache.set(`@user:${id}`, user);
    this.cache.set(`@user:email:${email}`, user);

    return user;
  }

  async getById(userId: User['id']): Promise<User> {
    const cachedUser = this.cache.get(`@user:${userId}`);
    if (cachedUser) return cachedUser;

    const { id, name, email, hashPassword, createdAt, updatedAt } =
      await prisma.user.findUniqueOrThrow({ where: { id: userId } });

    const user = new User(id, name, email, hashPassword, createdAt, updatedAt);

    this.cache.set(`@user:${id}`, user);
    this.cache.set(`@user:email:${email}`, user);

    return user;
  }

  async update(userId: User['id'], userUpdateVO: UserUpdateVO): Promise<User> {
    const { id, name, email, hashPassword, createdAt, updatedAt } =
      await prisma.user.update({
        where: { id: userId },
        data: {
          name: userUpdateVO.name || undefined,
          email: userUpdateVO.email || undefined,
          hashPassword: userUpdateVO.hashPassword || undefined,
        },
      });

    const user = new User(id, name, email, hashPassword, createdAt, updatedAt);

    this.cache.set(`@user:${id}`, user);
    this.cache.set(`@user:email:${email}`, user);

    return user;
  }

  async delete(userId: User['id']): Promise<User> {
    const { id, name, email, hashPassword, createdAt, updatedAt } =
      await prisma.user.delete({ where: { id: userId } });

    this.cache.delete(`@user:${id}`);
    this.cache.delete(`@user:email:${email}`);

    return new User(id, name, email, hashPassword, createdAt, updatedAt);
  }
}
