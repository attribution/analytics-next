/**
 * @example
 * pick({ a: 1, b: 2, c: 3 }, ['a', 'c']) => { a: 1, c: 3 }
 */
export const pick = (obj, keys) => {
    return keys.reduce((acc, k) => {
        if (k in obj) {
            acc[k] = obj[k];
        }
        return acc;
    }, {});
};
//# sourceMappingURL=pick.js.map