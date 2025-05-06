import { AnalyticsConsentError } from '../types/errors';
import { ValidationError } from './validation/validation-error';
/**
 * Thrown when a load should be cancelled.
 */
export class AbortLoadError extends AnalyticsConsentError {
    constructor(loadSegmentNormally) {
        super('AbortLoadError', '');
        this.loadSegmentNormally = loadSegmentNormally;
    }
}
export class LoadContext {
    /**
     * Abort the load (this function will always throw)
     */
    abort(options) {
        if (typeof options !== 'object') {
            throw new ValidationError('arg should be an object', options);
        }
        throw new AbortLoadError(options.loadSegmentNormally);
    }
}
//# sourceMappingURL=load-cancellation.js.map