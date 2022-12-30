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
exports.resolveNonNullType = void 0;
var graphql_1 = require("graphql");
var __1 = require("..");
function resolveNonNullType(node) {
    if (node.kind !== graphql_1.Kind.NON_NULL_TYPE) {
        throw new Error("Cannot use resolveNonNullType with type ".concat(node.kind, "."));
    }
    var result = __assign(__assign({}, (0, __1.resolve)(node.type)), { defined: true });
    return result;
}
exports.resolveNonNullType = resolveNonNullType;
