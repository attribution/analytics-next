"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrunedCategories = void 0;
const utils_1 = require("../utils");
const validation_error_1 = require("./validation/validation-error");
const getPrunedCategories = async (getCategories, cdnSettings, integrationCategoryMappings) => {
    // we don't want to send _every_ category to segment, only the ones that the user has explicitly configured in their integrations
    let allCategories;
    // We need to get all the unique categories so we can prune the consent object down to only the categories that are configured
    // There can be categories that are not included in any integration in the integrations object (e.g. 2 cloud mode categories), which is why we need a special allCategories array
    if (integrationCategoryMappings) {
        allCategories = (0, utils_1.uniq)(Object.values(integrationCategoryMappings).reduce((p, n) => p.concat(n)));
    }
    else {
        allCategories = cdnSettings.consentSettings?.allCategories || [];
    }
    if (!allCategories.length) {
        // No configured integrations found, so no categories will be sent (should not happen unless there's a configuration error)
        throw new validation_error_1.ValidationError('Invariant: No consent categories defined in Segment', []);
    }
    const categories = await getCategories();
    return (0, utils_1.pick)(categories, allCategories);
};
exports.getPrunedCategories = getPrunedCategories;
//# sourceMappingURL=pruned-categories.js.map