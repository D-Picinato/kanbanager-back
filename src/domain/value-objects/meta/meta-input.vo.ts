export interface MetaInputVO<T> {
  readonly search?: string;
  readonly searchFields?: (keyof T)[];
  readonly order?: 'asc' | 'desc';
  readonly sortBy?: keyof T;
  readonly page?: number;
  readonly itemsPerPage?: number;
}
