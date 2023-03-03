export default interface WriteInterface<T> {
  create: (item: T) => Promise<T>;
  update: (id: string, item: Partial<T>) => Promise<T | null>;
}
