/**
 * An Errot that represents that the OneTrust API is not in the expected format.
 * This is not something that could happen unless our API types are wrong and something is very wonky.
 * Not a recoverable error.
 */
export class OneTrustApiValidationError extends Error {
    constructor(message, received) {
        super(`Invariant: ${message} (Received: ${JSON.stringify(received)})`);
        this.name = 'OtConsentWrapperValidationError';
    }
}
//# sourceMappingURL=onetrust-api-error.js.map