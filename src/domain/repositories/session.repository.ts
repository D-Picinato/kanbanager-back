import { Session } from '@/domain/entities/session';

export interface SessionRepository {
  create(session: Session): Session;
  listByUserId(userId: Session['userId']): Session[];
  getByToken(sessionToken: Session['token']): Session;
  delete(sessionToken: Session['token']): Session;
}
