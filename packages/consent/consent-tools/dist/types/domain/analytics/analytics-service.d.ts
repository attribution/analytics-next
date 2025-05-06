import { AnyAnalytics, Categories, CDNSettings, CreateWrapperSettings, MaybeInitializedAnalytics } from '../../types';
/**
 * This class is a wrapper around the analytics.js library.
 */
export declare class AnalyticsService {
    cdnSettings: Promise<CDNSettings>;
    /**
     * The original analytics.load fn
     */
    loadNormally: AnyAnalytics['load'];
    private get analytics();
    private _uninitializedAnalytics;
    constructor(analytics: AnyAnalytics);
    /**
     * Replace the load fn with a new one
     */
    replaceLoadMethod(loadFn: AnyAnalytics['load']): void;
    page(): void;
    configureConsentStampingMiddleware({ getCategories, pruneUnmappedCategories, integrationCategoryMappings, }: Pick<CreateWrapperSettings, 'getCategories' | 'pruneUnmappedCategories' | 'integrationCategoryMappings'>): void;
    /**
     * Dispatch an event that looks like:
     * ```ts
     * {
     * "type": "track",
     *  "event": "Segment Consent Preference",
     *  "context": {
     *    "consent": {
     *      "categoryPreferences" : {
     *         "C0001": true,
     *         "C0002": false,
     *    }
     *  }
     * ...
     * ```
     */
    consentChange(categories: Categories): void;
}
/**
 * Get possibly-initialized analytics.
 *
 * Reason:
 * There is a known bug for people who attempt to to wrap the library: the analytics reference does not get updated when the analytics.js library loads.
 * Thus, we need to proxy events to the global reference instead.
 *
 * There is a universal fix here: however, many users may not have updated it:
 * https://github.com/segmentio/snippet/commit/081faba8abab0b2c3ec840b685c4ff6d6cccf79c
 */
export declare const getInitializedAnalytics: (analytics: AnyAnalytics) => MaybeInitializedAnalytics;
//# sourceMappingURL=analytics-service.d.ts.map