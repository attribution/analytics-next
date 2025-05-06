import { validateCategories } from './validation';
/**
 * Create analytics addSourceMiddleware fn that stamps each event
 */
export const createConsentStampingMiddleware = (getCategories) => async ({ payload, next }) => {
    const categories = await getCategories();
    validateCategories(categories);
    payload.obj.context.consent = {
        ...payload.obj.context.consent,
        categoryPreferences: categories,
    };
    next(payload);
};
//# sourceMappingURL=consent-stamping.js.map