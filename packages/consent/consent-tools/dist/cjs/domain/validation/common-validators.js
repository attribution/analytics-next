"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertIsObject = exports.assertIsFunction = void 0;
const validation_error_1 = require("./validation-error");
function assertIsFunction(val, variableName) {
    if (typeof val !== 'function') {
        throw new validation_error_1.ValidationError(`${variableName} is not a function`, val);
    }
}
exports.assertIsFunction = assertIsFunction;
function assertIsObject(val, variableName) {
    if (val === null || typeof val !== 'object') {
        throw new validation_error_1.ValidationError(`${variableName} is not an object`, val);
    }
}
exports.assertIsObject = assertIsObject;
//# sourceMappingURL=common-validators.js.map