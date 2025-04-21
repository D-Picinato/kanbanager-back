export interface SendEmailOptionsVO {
  readonly to: string;
  readonly subject: string;
  readonly text?: string;
  readonly html?: string;
}
