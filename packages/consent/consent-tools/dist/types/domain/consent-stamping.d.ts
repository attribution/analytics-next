import { AnyAnalytics, Categories } from '../types';
type CreateConsentMw = (getCategories: () => Promise<Categories>) => AnyAnalytics['addSourceMiddleware'];
/**
 * Create analytics addSourceMiddleware fn that stamps each event
 */
export declare const createConsentStampingMiddleware: CreateConsentMw;
export {};
//# sourceMappingURL=consent-stamping.d.ts.map