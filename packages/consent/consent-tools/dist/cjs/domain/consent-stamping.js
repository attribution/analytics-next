"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConsentStampingMiddleware = void 0;
const validation_1 = require("./validation");
/**
 * Create analytics addSourceMiddleware fn that stamps each event
 */
const createConsentStampingMiddleware = (getCategories) => async ({ payload, next }) => {
    const categories = await getCategories();
    (0, validation_1.validateCategories)(categories);
    payload.obj.context.consent = {
        ...payload.obj.context.consent,
        categoryPreferences: categories,
    };
    next(payload);
};
exports.createConsentStampingMiddleware = createConsentStampingMiddleware;
//# sourceMappingURL=consent-stamping.js.map