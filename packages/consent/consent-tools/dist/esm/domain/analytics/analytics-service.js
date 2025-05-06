import { createConsentStampingMiddleware } from '../consent-stamping';
import { getPrunedCategories } from '../pruned-categories';
import { validateAnalyticsInstance, validateCategories } from '../validation';
/**
 * This class is a wrapper around the analytics.js library.
 */
export class AnalyticsService {
    get analytics() {
        return getInitializedAnalytics(this._uninitializedAnalytics);
    }
    constructor(analytics) {
        validateAnalyticsInstance(analytics);
        this._uninitializedAnalytics = analytics;
        this.loadNormally = analytics.load.bind(this._uninitializedAnalytics);
        this.cdnSettings = new Promise((resolve) => this.analytics.on('initialize', resolve));
    }
    /**
     * Replace the load fn with a new one
     */
    replaceLoadMethod(loadFn) {
        this.analytics.load = loadFn;
    }
    page() {
        this.analytics.page();
    }
    configureConsentStampingMiddleware({ getCategories, pruneUnmappedCategories, integrationCategoryMappings, }) {
        // normalize getCategories pruning is turned on or off
        const getCategoriesForConsentStamping = async () => {
            if (pruneUnmappedCategories) {
                return getPrunedCategories(getCategories, await this.cdnSettings, integrationCategoryMappings);
            }
            else {
                return getCategories();
            }
        };
        const MW = createConsentStampingMiddleware(getCategoriesForConsentStamping);
        return this.analytics.addSourceMiddleware(MW);
    }
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
    consentChange(categories) {
        try {
            validateCategories(categories);
        }
        catch (e) {
            // not sure if there's a better way to handle this
            return console.error(e);
        }
        const CONSENT_CHANGED_EVENT = 'Segment Consent Preference';
        this.analytics.track(CONSENT_CHANGED_EVENT, undefined, {
            consent: { categoryPreferences: categories },
        });
    }
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
export const getInitializedAnalytics = (analytics) => {
    const isSnippetUser = Array.isArray(analytics);
    if (isSnippetUser) {
        const opts = analytics._loadOptions ?? {};
        const globalAnalytics = window[opts?.globalAnalyticsKey ?? 'analytics'];
        // we could probably skip this check and always return globalAnalytics, since they _should_ be set to the same thing at this point
        // however, it is safer to keep buffering.
        if (globalAnalytics?.initialized) {
            return globalAnalytics;
        }
    }
    return analytics;
};
//# sourceMappingURL=analytics-service.js.map