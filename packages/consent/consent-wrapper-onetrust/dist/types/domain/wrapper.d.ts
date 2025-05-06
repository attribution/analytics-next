import { AnyAnalytics, CreateWrapperSettings } from '@segment/analytics-consent-tools';
export interface OneTrustSettings {
    integrationCategoryMappings?: CreateWrapperSettings['integrationCategoryMappings'];
    disableConsentChangedEvent?: boolean;
}
/**
 *
 * @param analyticsInstance - An analytics instance. Either `window.analytics`, or the instance returned by `new AnalyticsBrowser()` or `AnalyticsBrowser.load({...})`
 * @param settings - Optional settings for configuring your OneTrust wrapper
 */
export declare const withOneTrust: <Analytics extends AnyAnalytics>(analyticsInstance: Analytics, settings?: OneTrustSettings) => Analytics;
//# sourceMappingURL=wrapper.d.ts.map