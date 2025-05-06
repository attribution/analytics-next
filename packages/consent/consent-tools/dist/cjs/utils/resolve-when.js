"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveWhen = void 0;
/**
 *
 * @param condition - predicate function that, if true, will cause the promise to resolve.
 * @param delayMs - The frequency, in milliseconds (thousandths of a second), to check the condition.
 * @example
 * ```ts
 * // check 'readyState' every 500ms
 * await resolveWhen(() => document.readyState === 'complete', 500)
 * ```
 */
async function resolveWhen(condition, delayMs) {
    return new Promise((resolve, _reject) => {
        if (condition()) {
            resolve();
            return;
        }
        const check = () => setTimeout(() => {
            if (condition()) {
                resolve();
            }
            else {
                check();
            }
        }, delayMs);
        check();
    });
}
exports.resolveWhen = resolveWhen;
//# sourceMappingURL=resolve-when.js.map