"use strict";
exports.__esModule = true;
exports.resolveObjectTypeDefinition = void 0;
var graphql_1 = require("graphql");
var types_1 = require("../../../types");
var __1 = require("..");
function resolveObjectTypeDefinition(node) {
    if (node.kind !== graphql_1.Kind.OBJECT_TYPE_DEFINITION) {
        throw new Error("Cannot use resolveObjectTypeDefinition with type ".concat(node.kind, "."));
    }
    var result = {
        variation: types_1.FixtureNodeVariation.ObjectFixtureNode,
        name: node.name.value,
        fields: node.fields.map(function (field) { return (0, __1.resolve)(field); })
    };
    return result;
}
exports.resolveObjectTypeDefinition = resolveObjectTypeDefinition;
