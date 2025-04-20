import nodemailer from 'nodemailer';

import { ENV } from '@/configs/env.config';

export const emailTransporter = nodemailer.createTransport({
  host: ENV.EMAIL_HOST,
  port: ENV.EMAIL_PORT,
  secure: true,
  auth: { user: ENV.EMAIL_ADDRESS, pass: ENV.EMAIL_PASSWORD },
});
