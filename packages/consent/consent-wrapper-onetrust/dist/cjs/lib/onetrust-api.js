"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNormalizedCategoriesFromGroupIds = exports.getNormalizedCategoriesFromGroupData = exports.getGroupDataFromGroupIds = exports.getAllGroups = exports.getConsentedGroupIds = exports.getOneTrustActiveGroups = exports.getOneTrustGlobal = void 0;
const validation_1 = require("./validation");
/**
 * @example
 * ",C0001,C0002" => ["C0001", "C0002"]
 */
const normalizeActiveGroupIds = (oneTrustActiveGroups) => {
    return oneTrustActiveGroups.trim().split(',').filter(Boolean);
};
const getOneTrustGlobal = () => {
    const oneTrust = window.OneTrust;
    if (!oneTrust)
        return undefined;
    if (typeof oneTrust === 'object' &&
        'OnConsentChanged' in oneTrust &&
        'IsAlertBoxClosed' in oneTrust &&
        'GetDomainData' in oneTrust) {
        return oneTrust;
    }
    // if "show banner" is unchecked, window.OneTrust returns {geolocationResponse: {…}} before it actually returns the OneTrust object
    if ('geolocationResponse' in oneTrust) {
        return undefined;
    }
    console.error(
    // OneTrust API has some gotchas -- since this function is often as a polling loop, not
    // throwing an error since it's possible that some setup is happening behind the scenes and
    // the OneTrust API is not available yet (e.g. see the geolocationResponse edge case).
    new validation_1.OneTrustApiValidationError('window.OneTrust is unexpected type', oneTrust).message);
};
exports.getOneTrustGlobal = getOneTrustGlobal;
const getOneTrustActiveGroups = () => {
    const groups = window.OnetrustActiveGroups;
    if (!groups)
        return undefined;
    if (typeof groups !== 'string') {
        throw new validation_1.OneTrustApiValidationError(`window.OnetrustActiveGroups is not a string`, groups);
    }
    return groups;
};
exports.getOneTrustActiveGroups = getOneTrustActiveGroups;
const getConsentedGroupIds = (groups = (0, exports.getOneTrustActiveGroups)()) => {
    if (!groups) {
        return [];
    }
    return normalizeActiveGroupIds(groups || '');
};
exports.getConsentedGroupIds = getConsentedGroupIds;
const normalizeGroupInfo = (groupInfo) => ({
    groupId: groupInfo.CustomGroupId.trim(),
});
/**
 * get *all* groups / categories, not just active ones
 */
const getAllGroups = () => {
    const oneTrustGlobal = (0, exports.getOneTrustGlobal)();
    if (!oneTrustGlobal)
        return [];
    return oneTrustGlobal.GetDomainData().Groups.map(normalizeGroupInfo);
};
exports.getAllGroups = getAllGroups;
// derive the groupIds from the active groups
const getGroupDataFromGroupIds = (userSetConsentGroupIds = (0, exports.getConsentedGroupIds)()) => {
    // partition all groups into "consent" or "deny"
    const userConsentGroupData = (0, exports.getAllGroups)().reduce((acc, group) => {
        if (userSetConsentGroupIds.includes(group.groupId)) {
            acc.userSetConsentGroups.push(group);
        }
        else {
            acc.userDeniedConsentGroups.push(group);
        }
        return acc;
    }, { userSetConsentGroups: [], userDeniedConsentGroups: [] });
    return userConsentGroupData;
};
exports.getGroupDataFromGroupIds = getGroupDataFromGroupIds;
const getNormalizedCategoriesFromGroupData = (groupData = (0, exports.getGroupDataFromGroupIds)()) => {
    const { userSetConsentGroups, userDeniedConsentGroups } = groupData;
    const consentedCategories = userSetConsentGroups.reduce((acc, c) => {
        return {
            ...acc,
            [c.groupId]: true,
        };
    }, {});
    const deniedCategories = userDeniedConsentGroups.reduce((acc, c) => {
        return {
            ...acc,
            [c.groupId]: false,
        };
    }, {});
    return { ...consentedCategories, ...deniedCategories };
};
exports.getNormalizedCategoriesFromGroupData = getNormalizedCategoriesFromGroupData;
const getNormalizedCategoriesFromGroupIds = (groupIds) => {
    return (0, exports.getNormalizedCategoriesFromGroupData)((0, exports.getGroupDataFromGroupIds)(groupIds));
};
exports.getNormalizedCategoriesFromGroupIds = getNormalizedCategoriesFromGroupIds;
//# sourceMappingURL=onetrust-api.js.map