"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.segmentShouldBeDisabled = void 0;
/**
 * @returns whether or not analytics.js should be completely disabled (never load, or drop cookies)
 */
const segmentShouldBeDisabled = (consentCategories, consentSettings) => {
    if (!consentSettings || consentSettings.hasUnmappedDestinations) {
        return false;
    }
    // disable if _all_ of the the consented categories are irrelevant to segment
    return Object.keys(consentCategories)
        .filter((c) => consentCategories[c])
        .every((c) => !consentSettings.allCategories.includes(c));
};
exports.segmentShouldBeDisabled = segmentShouldBeDisabled;
//# sourceMappingURL=disable-segment.js.map