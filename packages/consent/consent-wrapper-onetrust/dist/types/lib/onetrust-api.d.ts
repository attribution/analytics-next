import { Categories } from '@segment/analytics-consent-tools';
/**
 * @example ["C0001", "C0002"]
 */
type ConsentGroupIds = string[];
type GroupInfoDto = {
    CustomGroupId: string;
};
type OtConsentChangedEvent = CustomEvent<ConsentGroupIds>;
export interface OneTrustDomainData {
    ShowAlertNotice: boolean;
    Groups: GroupInfoDto[];
}
/**
 * The data model used by the OneTrust lib
 */
export interface OneTrustGlobal {
    GetDomainData: () => OneTrustDomainData;
    /**
     *  This callback appears to fire whenever the alert box is closed, no matter what.
     * E.g:
     * - if a user continues without accepting
     * - if a user makes a selection
     * - if a user rejects all
     */
    OnConsentChanged: (cb: (event: OtConsentChangedEvent) => void) => void;
    IsAlertBoxClosed: () => boolean;
}
export declare const getOneTrustGlobal: () => OneTrustGlobal | undefined;
export declare const getOneTrustActiveGroups: () => string | undefined;
export declare const getConsentedGroupIds: (groups?: string | undefined) => ConsentGroupIds;
export type GroupInfo = {
    groupId: string;
};
/**
 * get *all* groups / categories, not just active ones
 */
export declare const getAllGroups: () => GroupInfo[];
type UserConsentGroupData = {
    userSetConsentGroups: GroupInfo[];
    userDeniedConsentGroups: GroupInfo[];
};
export declare const getGroupDataFromGroupIds: (userSetConsentGroupIds?: ConsentGroupIds) => UserConsentGroupData;
export declare const getNormalizedCategoriesFromGroupData: (groupData?: UserConsentGroupData) => Categories;
export declare const getNormalizedCategoriesFromGroupIds: (groupIds: ConsentGroupIds) => Categories;
export {};
//# sourceMappingURL=onetrust-api.d.ts.map