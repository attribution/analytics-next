"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = void 0;
/**
 * @example
 * pick({ a: 1, b: 2, c: 3 }, ['a', 'c']) => { a: 1, c: 3 }
 */
const pick = (obj, keys) => {
    return keys.reduce((acc, k) => {
        if (k in obj) {
            acc[k] = obj[k];
        }
        return acc;
    }, {});
};
exports.pick = pick;
//# sourceMappingURL=pick.js.map