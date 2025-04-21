export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public hashPassword: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
