"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneTrustApiValidationError = void 0;
/**
 * An Errot that represents that the OneTrust API is not in the expected format.
 * This is not something that could happen unless our API types are wrong and something is very wonky.
 * Not a recoverable error.
 */
class OneTrustApiValidationError extends Error {
    constructor(message, received) {
        super(`Invariant: ${message} (Received: ${JSON.stringify(received)})`);
        this.name = 'OtConsentWrapperValidationError';
    }
}
exports.OneTrustApiValidationError = OneTrustApiValidationError;
//# sourceMappingURL=onetrust-api-error.js.map