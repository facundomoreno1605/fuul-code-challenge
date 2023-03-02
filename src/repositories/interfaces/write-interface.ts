export default interface WriteInterface<T> {
  create: (item: T) => Promise<T>;
}
