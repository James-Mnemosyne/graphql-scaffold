"use strict";
exports.__esModule = true;
exports.resolveInputObjectTypeDefinition = void 0;
var graphql_1 = require("graphql");
var types_1 = require("../../../types");
var __1 = require("..");
function resolveInputObjectTypeDefinition(node) {
    if (node.kind !== graphql_1.Kind.INPUT_OBJECT_TYPE_DEFINITION) {
        throw new Error("Cannot use resolveInputObjectTypeDefinition with type ".concat(node.kind, "."));
    }
    var result = {
        variation: types_1.FixtureNodeVariation.ObjectFixtureNode,
        fields: node.fields.map(function (field) { return (0, __1.resolve)(field); }),
        name: node.name.value
    };
    return result;
}
exports.resolveInputObjectTypeDefinition = resolveInputObjectTypeDefinition;
