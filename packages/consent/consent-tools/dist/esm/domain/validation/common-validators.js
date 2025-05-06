import { ValidationError } from './validation-error';
export function assertIsFunction(val, variableName) {
    if (typeof val !== 'function') {
        throw new ValidationError(`${variableName} is not a function`, val);
    }
}
export function assertIsObject(val, variableName) {
    if (val === null || typeof val !== 'object') {
        throw new ValidationError(`${variableName} is not an object`, val);
    }
}
//# sourceMappingURL=common-validators.js.map