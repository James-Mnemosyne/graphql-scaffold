"use strict";
exports.__esModule = true;
exports.resolveUnionTypeDefinition = void 0;
var graphql_1 = require("graphql");
var types_1 = require("../../../types");
var __1 = require("..");
function resolveUnionTypeDefinition(node) {
    var _a, _b;
    if (node.kind !== graphql_1.Kind.UNION_TYPE_DEFINITION) {
        throw new Error("Cannot use resolveUnionTypeDefinition with type ".concat(node.kind, "."));
    }
    var result = {
        variation: types_1.FixtureNodeVariation.UnionFixtureNode,
        name: node.name.value,
        elements: (_b = (_a = node.types) === null || _a === void 0 ? void 0 : _a.map(__1.resolve)) !== null && _b !== void 0 ? _b : []
    };
    return result;
}
exports.resolveUnionTypeDefinition = resolveUnionTypeDefinition;
