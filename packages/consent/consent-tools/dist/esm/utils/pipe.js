/**
 * Everyday variadic pipe function (reverse of 'compose')
 * @example pipe(fn1, fn2, fn3)(value) // fn3(fn2(fn1(value)))
 */
export const pipe = (fn, ...fns) => {
    const piped = fns.reduce((prevFn, nextFn) => (value) => nextFn(prevFn(value)), (value) => value);
    return (...args) => piped(fn(...args));
};
//# sourceMappingURL=pipe.js.map