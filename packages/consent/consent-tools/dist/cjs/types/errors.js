"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsConsentError = void 0;
/**
 * Base Consent Error
 */
class AnalyticsConsentError extends Error {
    /**
     *
     * @param name - Pass the name explicitly to work around the limitation that 'name' is automatically set to the parent class.
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends#using_extends
     * @param message - Error message
     */
    constructor(name, message) {
        super(message);
        this.name = name;
    }
}
exports.AnalyticsConsentError = AnalyticsConsentError;
//# sourceMappingURL=errors.js.map