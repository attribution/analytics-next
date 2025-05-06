import { AnalyticsConsentError } from '../types/errors';
/**
 * Thrown when a load should be cancelled.
 */
export declare class AbortLoadError extends AnalyticsConsentError {
    loadSegmentNormally: boolean;
    constructor(loadSegmentNormally: boolean);
}
export interface AbortLoadOptions {
    /**
     * Whether or not to disable the consent requirement that is normally enforced by the wrapper.
     * If true -- load segment normally.
     */
    loadSegmentNormally: boolean;
}
export declare class LoadContext {
    /**
     * Abort the load (this function will always throw)
     */
    abort(options: AbortLoadOptions): never;
}
//# sourceMappingURL=load-cancellation.d.ts.map