import { LRUCache } from 'lru-cache';

import { ENV } from '@/configs/env.config';

import { Session } from '@/domain/entities/session';
import { SessionRepository } from '@/domain/repositories/session.repository';

import { ResponseFormat } from '@/presentation/utils/response-format';

export class LRUSessionRepository implements SessionRepository {
  private lruSession = new LRUCache<string, Session>({
    max: 100,
    ttl: 1000 * ENV.LRU_SESSION_TIME_PERSIST,
  });

  create(session: Session): void {
    this.lruSession.set(`@sessionToken:${session.token}`, session);
  }

  getByToken(sessionToken: Session['token']): Session {
    const sessionData = this.lruSession.get(`@sessionToken:${sessionToken}`);
    if (!sessionData) {
      throw new ResponseFormat(404, 'Sessão inválida!');
    }
    const { ip, token, userId } = sessionData;
    return new Session(token, ip, userId);
  }

  listByUserId(userId: Session['userId']): Session[] {
    const sessions: Session[] = [];
    this.lruSession.forEach(session => {
      if (session.userId == userId) sessions.push(session);
    });
    return sessions;
  }

  delete(sessionToken: Session['token']): void {
    this.lruSession.delete(`@sessionToken:${sessionToken}`);
  }
}
