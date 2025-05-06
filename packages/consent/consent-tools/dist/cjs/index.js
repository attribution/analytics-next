"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveWhen = exports.createWrapper = void 0;
/**
 * This is the public API for this package.
 * We avoid using splat (*) exports so that we can control what is exposed.
 */
var create_wrapper_1 = require("./domain/create-wrapper");
Object.defineProperty(exports, "createWrapper", { enumerable: true, get: function () { return create_wrapper_1.createWrapper; } });
var utils_1 = require("./utils");
Object.defineProperty(exports, "resolveWhen", { enumerable: true, get: function () { return utils_1.resolveWhen; } });
//# sourceMappingURL=index.js.map