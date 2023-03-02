export default interface ReadInterface<T> {
  findById: (id: string) => Promise<T | null>;
  findOne: (searchParams: object) => Promise<T | null>;
  findAll: () => Promise<T[] | []>;
}
