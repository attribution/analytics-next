import { AnyAnalytics, Categories, CreateWrapperSettings } from '../../types';
export declare function validateCategories(ctgs: unknown): asserts ctgs is NonNullable<Categories>;
export declare function validateSettings(options: {
    [k in keyof CreateWrapperSettings]: unknown;
}): asserts options is CreateWrapperSettings;
export declare function validateAnalyticsInstance(analytics: unknown): asserts analytics is AnyAnalytics;
//# sourceMappingURL=options-validators.d.ts.map