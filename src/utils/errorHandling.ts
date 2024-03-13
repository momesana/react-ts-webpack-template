export function throwError(reason: string): never {
  throw Error(reason);
}

export function mustNotHappen(): never {
  throwError("This is a bug. Please report it.");
}
