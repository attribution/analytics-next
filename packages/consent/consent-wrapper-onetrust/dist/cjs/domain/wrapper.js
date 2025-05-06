"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withOneTrust = void 0;
const analytics_consent_tools_1 = require("@segment/analytics-consent-tools");
const onetrust_api_1 = require("../lib/onetrust-api");
/**
 *
 * @param analyticsInstance - An analytics instance. Either `window.analytics`, or the instance returned by `new AnalyticsBrowser()` or `AnalyticsBrowser.load({...})`
 * @param settings - Optional settings for configuring your OneTrust wrapper
 */
const withOneTrust = (analyticsInstance, settings = {}) => {
    return (0, analytics_consent_tools_1.createWrapper)({
        // wait for OneTrust global to be available before wrapper is loaded
        shouldLoadWrapper: async () => {
            await (0, analytics_consent_tools_1.resolveWhen)(() => (0, onetrust_api_1.getOneTrustGlobal)() !== undefined, 500);
        },
        // wait for AlertBox to be closed before segment can be loaded. If no consented groups, do not load Segment.
        shouldLoadSegment: async () => {
            await (0, analytics_consent_tools_1.resolveWhen)(() => {
                const OneTrust = (0, onetrust_api_1.getOneTrustGlobal)();
                return (
                // if any groups at all are consented to
                Boolean((0, onetrust_api_1.getConsentedGroupIds)().length) &&
                    // if show banner is unchecked in the UI
                    (OneTrust.GetDomainData().ShowAlertNotice === false ||
                        // if alert box is closed by end user
                        OneTrust.IsAlertBoxClosed()));
            }, 500);
        },
        getCategories: () => {
            const results = (0, onetrust_api_1.getNormalizedCategoriesFromGroupData)();
            return results;
        },
        registerOnConsentChanged: settings.disableConsentChangedEvent
            ? undefined
            : (setCategories) => {
                (0, onetrust_api_1.getOneTrustGlobal)().OnConsentChanged((event) => {
                    const normalizedCategories = (0, onetrust_api_1.getNormalizedCategoriesFromGroupIds)(event.detail);
                    setCategories(normalizedCategories);
                });
            },
        integrationCategoryMappings: settings.integrationCategoryMappings,
    })(analyticsInstance);
};
exports.withOneTrust = withOneTrust;
//# sourceMappingURL=wrapper.js.map