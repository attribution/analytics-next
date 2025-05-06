/**
 * Base Consent Error
 */
export declare abstract class AnalyticsConsentError extends Error {
    name: string;
    /**
     *
     * @param name - Pass the name explicitly to work around the limitation that 'name' is automatically set to the parent class.
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends#using_extends
     * @param message - Error message
     */
    constructor(name: string, message: string);
}
//# sourceMappingURL=errors.d.ts.map