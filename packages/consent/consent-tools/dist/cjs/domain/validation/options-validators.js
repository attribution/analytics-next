"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAnalyticsInstance = exports.validateSettings = exports.validateCategories = void 0;
const common_validators_1 = require("./common-validators");
const validation_error_1 = require("./validation-error");
function validateCategories(ctgs) {
    let hasError = true;
    if (ctgs && typeof ctgs === 'object' && !Array.isArray(ctgs)) {
        hasError = false;
        for (const k in ctgs) {
            if (typeof ctgs[k] !== 'boolean') {
                hasError = true;
                break;
            }
        }
    }
    if (hasError) {
        throw new validation_error_1.ValidationError(`Consent Categories should be {[categoryName: string]: boolean}`, ctgs);
    }
}
exports.validateCategories = validateCategories;
function validateSettings(options) {
    if (typeof options !== 'object' || !options) {
        throw new validation_error_1.ValidationError('Options should be an object', options);
    }
    (0, common_validators_1.assertIsFunction)(options.getCategories, 'getCategories');
    options.shouldLoadSegment &&
        (0, common_validators_1.assertIsFunction)(options.shouldLoadSegment, 'shouldLoadSegment');
    options.shouldEnableIntegration &&
        (0, common_validators_1.assertIsFunction)(options.shouldEnableIntegration, 'shouldEnableIntegration');
    options.shouldDisableSegment &&
        (0, common_validators_1.assertIsFunction)(options.shouldDisableSegment, 'shouldDisableSegment');
    options.integrationCategoryMappings &&
        (0, common_validators_1.assertIsObject)(options.integrationCategoryMappings, 'integrationCategoryMappings');
    options.registerOnConsentChanged &&
        (0, common_validators_1.assertIsFunction)(options.registerOnConsentChanged, 'registerOnConsentChanged');
}
exports.validateSettings = validateSettings;
function validateAnalyticsInstance(analytics) {
    (0, common_validators_1.assertIsObject)(analytics, 'analytics');
    if ('load' in analytics &&
        'on' in analytics &&
        'addSourceMiddleware' in analytics) {
        return;
    }
    throw new validation_error_1.ValidationError('analytics is not an Analytics instance', analytics);
}
exports.validateAnalyticsInstance = validateAnalyticsInstance;
//# sourceMappingURL=options-validators.js.map