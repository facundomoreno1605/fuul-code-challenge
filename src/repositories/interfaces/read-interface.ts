export default interface ReadInterface<T> {
  findById: (id: string) => Promise<T | null>;
}
