/**
 * An Errot that represents that the OneTrust API is not in the expected format.
 * This is not something that could happen unless our API types are wrong and something is very wonky.
 * Not a recoverable error.
 */
export declare class OneTrustApiValidationError extends Error {
    name: string;
    constructor(message: string, received: any);
}
//# sourceMappingURL=onetrust-api-error.d.ts.map