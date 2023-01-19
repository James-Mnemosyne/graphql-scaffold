"use strict";
exports.__esModule = true;
exports.Defined = exports.IsObjectFixtureNodeOrUndefined = exports.Truthy = void 0;
var types_1 = require("../../types");
function Truthy(x) {
    return Boolean(x);
}
exports.Truthy = Truthy;
function IsObjectFixtureNode(item) {
    return (item === null || item === void 0 ? void 0 : item.variation) === types_1.FixtureNodeVariation.ObjectFixtureNode;
}
function IsObjectFixtureNodeOrUndefined(item) {
    return !Defined(item) || IsObjectFixtureNode(item);
}
exports.IsObjectFixtureNodeOrUndefined = IsObjectFixtureNodeOrUndefined;
function Defined(item) {
    return NotUndefined(item) && NonNull(item);
}
exports.Defined = Defined;
function NotUndefined(item) {
    return item !== undefined;
}
function NonNull(item) {
    return item !== null;
}
