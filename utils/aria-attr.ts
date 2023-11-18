export function ariaAttr<T>(guard: boolean | undefined, value?: T) {
  return guard ? value ?? 'true' : undefined;
}
