/**
 * Everyday variadic pipe function (reverse of 'compose')
 * @example pipe(fn1, fn2, fn3)(value) // fn3(fn2(fn1(value)))
 */
export declare const pipe: <T extends any[], U>(fn: (...args: T) => U, ...fns: ((a: U) => U)[]) => (...args: T) => U;
//# sourceMappingURL=pipe.d.ts.map