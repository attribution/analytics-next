import type { LegacySettings } from '@segment/analytics-next';
type RemotePlugin = NonNullable<LegacySettings['remotePlugins']>[0];
export type DestinationSettingsBuilderConfig = Partial<RemotePlugin> & {
    creationName: string;
    consentSettings?: {
        categories: string[];
    };
};
export declare class CDNSettingsBuilder {
    private settings;
    constructor({ writeKey, baseCDNSettings, }?: {
        writeKey?: string;
        baseCDNSettings?: LegacySettings;
    });
    addActionDestinationSettings(...destinations: DestinationSettingsBuilderConfig[]): this;
    build(): LegacySettings;
    toJSON(): LegacySettings;
}
export {};
//# sourceMappingURL=cdn-settings-builder.d.ts.map