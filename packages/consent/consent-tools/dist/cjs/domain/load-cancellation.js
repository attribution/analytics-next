"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadContext = exports.AbortLoadError = void 0;
const errors_1 = require("../types/errors");
const validation_error_1 = require("./validation/validation-error");
/**
 * Thrown when a load should be cancelled.
 */
class AbortLoadError extends errors_1.AnalyticsConsentError {
    constructor(loadSegmentNormally) {
        super('AbortLoadError', '');
        this.loadSegmentNormally = loadSegmentNormally;
    }
}
exports.AbortLoadError = AbortLoadError;
class LoadContext {
    /**
     * Abort the load (this function will always throw)
     */
    abort(options) {
        if (typeof options !== 'object') {
            throw new validation_error_1.ValidationError('arg should be an object', options);
        }
        throw new AbortLoadError(options.loadSegmentNormally);
    }
}
exports.LoadContext = LoadContext;
//# sourceMappingURL=load-cancellation.js.map