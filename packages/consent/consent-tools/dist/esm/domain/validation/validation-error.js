import { AnalyticsConsentError } from '../../types/errors';
export class ValidationError extends AnalyticsConsentError {
    constructor(message, received) {
        if (arguments.length === 2) {
            // to ensure that explicitly passing undefined as second argument still works
            message += ` (Received: ${JSON.stringify(received)})`;
        }
        super('ValidationError', `[Validation] ${message}`);
    }
}
//# sourceMappingURL=validation-error.js.map