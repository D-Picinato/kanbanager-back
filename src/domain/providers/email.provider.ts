import { SendEmailOptionsVO } from '@/domain/value-objects/email/send-email-options.vo';

export interface EmailProvider {
  sendEmail: (options: SendEmailOptionsVO) => Promise<void>;
}
