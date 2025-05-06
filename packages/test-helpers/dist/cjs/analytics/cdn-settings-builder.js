"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CDNSettingsBuilder = void 0;
var tslib_1 = require("tslib");
var CDNSettingsBuilder = /** @class */ (function () {
    function CDNSettingsBuilder(_a) {
        var _b = _a === void 0 ? {} : _a, writeKey = _b.writeKey, baseCDNSettings = _b.baseCDNSettings;
        var settings = baseCDNSettings || {
            integrations: {
                'Segment.io': {
                    apiKey: writeKey,
                    unbundledIntegrations: [],
                    addBundledMetadata: true,
                    maybeBundledConfigIds: {},
                    versionSettings: { version: '4.4.7', componentTypes: ['browser'] },
                    apiHost: 'api.segment.io/v1',
                },
            },
            plan: {
                track: { __default: { enabled: true, integrations: {} } },
                identify: { __default: { enabled: true } },
                group: { __default: { enabled: true } },
            },
            middlewareSettings: {},
            enabledMiddleware: {},
            metrics: { sampleRate: 0.1, host: 'api.segment.io/v1' },
            legacyVideoPluginsEnabled: false,
            remotePlugins: [],
        };
        this.settings = settings;
    }
    CDNSettingsBuilder.prototype.addActionDestinationSettings = function () {
        var _this = this;
        var destinations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            destinations[_i] = arguments[_i];
        }
        destinations.forEach(function (p) {
            var _a;
            var _b, _c, _d, _e;
            var remotePlugin = {
                creationName: (_b = p.creationName) !== null && _b !== void 0 ? _b : 'mockCreationName',
                libraryName: (_c = p.libraryName) !== null && _c !== void 0 ? _c : 'mockLibraryName',
                name: (_d = p.name) !== null && _d !== void 0 ? _d : 'mockName',
                url: (_e = p.url) !== null && _e !== void 0 ? _e : 'https://mock.com/mock.js',
                settings: tslib_1.__assign({ subscriptions: [] }, (p.settings || {})),
            };
            _this.settings.remotePlugins.push(remotePlugin);
            var _f = remotePlugin.settings, subscriptions = _f.subscriptions, remotePluginSettings = tslib_1.__rest(_f, ["subscriptions"]);
            _this.settings.integrations = tslib_1.__assign(tslib_1.__assign({}, _this.settings.integrations), (_a = {}, _a[p.creationName] = tslib_1.__assign(tslib_1.__assign({}, remotePluginSettings), (p.consentSettings ? { consentSettings: p.consentSettings } : {})), _a));
        });
        return this;
    };
    CDNSettingsBuilder.prototype.build = function () {
        return this.settings;
    };
    CDNSettingsBuilder.prototype.toJSON = function () {
        return this.settings;
    };
    return CDNSettingsBuilder;
}());
exports.CDNSettingsBuilder = CDNSettingsBuilder;
//# sourceMappingURL=cdn-settings-builder.js.map