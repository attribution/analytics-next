"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
const errors_1 = require("../../types/errors");
class ValidationError extends errors_1.AnalyticsConsentError {
    constructor(message, received) {
        if (arguments.length === 2) {
            // to ensure that explicitly passing undefined as second argument still works
            message += ` (Received: ${JSON.stringify(received)})`;
        }
        super('ValidationError', `[Validation] ${message}`);
    }
}
exports.ValidationError = ValidationError;
//# sourceMappingURL=validation-error.js.map