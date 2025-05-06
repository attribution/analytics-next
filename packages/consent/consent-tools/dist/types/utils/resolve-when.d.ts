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
export declare function resolveWhen(condition: () => boolean, delayMs: number): Promise<void>;
//# sourceMappingURL=resolve-when.d.ts.map