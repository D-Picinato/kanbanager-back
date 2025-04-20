export class SendEmailOptionsVO {
  constructor(
    public readonly to: string,
    public readonly subject: string,
    public readonly text?: string,
    public readonly html?: string,
  ) {
    Object.freeze(this);
  }
}
