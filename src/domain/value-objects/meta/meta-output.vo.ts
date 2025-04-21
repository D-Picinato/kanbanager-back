export class MetaOutputVO {
  public readonly totalPages: number;

  constructor(
    public readonly page: number,
    public readonly itemsPerPage: number,
    public readonly totalItems: number,
  ) {
    this.totalPages = Math.ceil(totalItems / itemsPerPage);
  }
}
