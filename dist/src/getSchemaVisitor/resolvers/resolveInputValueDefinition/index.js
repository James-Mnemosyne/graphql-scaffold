"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.resolveInputValueDefinition = void 0;
var graphql_1 = require("graphql");
var __1 = require("..");
function resolveInputValueDefinition(node) {
    if (node.kind !== graphql_1.Kind.INPUT_VALUE_DEFINITION) {
        throw new Error("Cannot use resolveInputValueDefinition with type ".concat(node.kind, "."));
    }
    var result = __assign(__assign({}, (0, __1.resolve)(node.type)), { name: node.name.value });
    return result;
}
exports.resolveInputValueDefinition = resolveInputValueDefinition;
