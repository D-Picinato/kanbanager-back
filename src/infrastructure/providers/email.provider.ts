import { ENV } from '@/configs/env.config';
import { emailTransporter } from '@/infrastructure/configs/email-transporter.config';

import { EmailProvider } from '@/domain/providers/email.provider';
import { SendEmailOptionsVO } from '@/domain/value-objects/send-email-options.vo';

export class InfraEmailProvider implements EmailProvider {
  public async sendEmail(options: SendEmailOptionsVO) {
    try {
      await emailTransporter.sendMail({
        ...options,
        from: `"${ENV.EMAIL_SYSTEM_NAME}" <${ENV.EMAIL_ADDRESS}>`,
      });
    } catch (error) {
      console.error(`Error to send e-mail to ${options.to}:`, error);
    }
  }
}
