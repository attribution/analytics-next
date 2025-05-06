/**
 * @example
 * pick({ a: 1, b: 2, c: 3 }, ['a', 'c']) => { a: 1, c: 3 }
 */
export declare const pick: <Obj extends Record<string, unknown>, Key extends keyof Obj>(obj: Obj, keys: Key[]) => Pick<Obj, Key>;
//# sourceMappingURL=pick.d.ts.map