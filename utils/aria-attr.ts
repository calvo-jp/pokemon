export function ariaAttr<T>(guard: unknown, value: T) {
  return guard ? value : undefined;
}
