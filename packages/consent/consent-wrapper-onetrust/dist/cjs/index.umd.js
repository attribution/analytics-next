"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withOneTrust = void 0;
/**
 * This file is meant to be used to create a webpack bundle.
 */
const index_1 = require("./index");
Object.defineProperty(exports, "withOneTrust", { enumerable: true, get: function () { return index_1.withOneTrust; } });
// this will almost certainly be executed in the browser, but since this is UMD,
// we are checking just for the sake of being thorough
if (typeof window !== 'undefined') {
    ;
    window.withOneTrust = index_1.withOneTrust;
}
//# sourceMappingURL=index.umd.js.map