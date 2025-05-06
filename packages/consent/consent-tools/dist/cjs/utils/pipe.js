"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = void 0;
/**
 * Everyday variadic pipe function (reverse of 'compose')
 * @example pipe(fn1, fn2, fn3)(value) // fn3(fn2(fn1(value)))
 */
const pipe = (fn, ...fns) => {
    const piped = fns.reduce((prevFn, nextFn) => (value) => nextFn(prevFn(value)), (value) => value);
    return (...args) => piped(fn(...args));
};
exports.pipe = pipe;
//# sourceMappingURL=pipe.js.map