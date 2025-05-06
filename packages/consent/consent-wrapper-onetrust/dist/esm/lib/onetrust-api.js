import { OneTrustApiValidationError } from './validation';
/**
 * @example
 * ",C0001,C0002" => ["C0001", "C0002"]
 */
const normalizeActiveGroupIds = (oneTrustActiveGroups) => {
    return oneTrustActiveGroups.trim().split(',').filter(Boolean);
};
export const getOneTrustGlobal = () => {
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
    new OneTrustApiValidationError('window.OneTrust is unexpected type', oneTrust).message);
};
export const getOneTrustActiveGroups = () => {
    const groups = window.OnetrustActiveGroups;
    if (!groups)
        return undefined;
    if (typeof groups !== 'string') {
        throw new OneTrustApiValidationError(`window.OnetrustActiveGroups is not a string`, groups);
    }
    return groups;
};
export const getConsentedGroupIds = (groups = getOneTrustActiveGroups()) => {
    if (!groups) {
        return [];
    }
    return normalizeActiveGroupIds(groups || '');
};
const normalizeGroupInfo = (groupInfo) => ({
    groupId: groupInfo.CustomGroupId.trim(),
});
/**
 * get *all* groups / categories, not just active ones
 */
export const getAllGroups = () => {
    const oneTrustGlobal = getOneTrustGlobal();
    if (!oneTrustGlobal)
        return [];
    return oneTrustGlobal.GetDomainData().Groups.map(normalizeGroupInfo);
};
// derive the groupIds from the active groups
export const getGroupDataFromGroupIds = (userSetConsentGroupIds = getConsentedGroupIds()) => {
    // partition all groups into "consent" or "deny"
    const userConsentGroupData = getAllGroups().reduce((acc, group) => {
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
export const getNormalizedCategoriesFromGroupData = (groupData = getGroupDataFromGroupIds()) => {
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
export const getNormalizedCategoriesFromGroupIds = (groupIds) => {
    return getNormalizedCategoriesFromGroupData(getGroupDataFromGroupIds(groupIds));
};
//# sourceMappingURL=onetrust-api.js.map