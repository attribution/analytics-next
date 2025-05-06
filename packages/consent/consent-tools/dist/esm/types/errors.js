/**
 * Base Consent Error
 */
export class AnalyticsConsentError extends Error {
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
//# sourceMappingURL=errors.js.map