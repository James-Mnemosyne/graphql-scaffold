"use strict";
exports.__esModule = true;
exports.resolveFieldDefinition = void 0;
var graphql_1 = require("graphql");
var types_1 = require("../../../types");
var index_1 = require("../index");
function resolveFieldDefinition(node) {
    if (node.kind !== graphql_1.Kind.FIELD_DEFINITION) {
        throw new Error("Cannot use resolveFieldDefinition with type ".concat(node.kind, "."));
    }
    // If the field is not a function.
    // TODO (Orange): verify this.
    if (!node.arguments) {
        return (0, index_1.resolve)(node.type);
    }
    var name = node.name.value;
    var result = {
        variation: types_1.FixtureNodeVariation.FunctionFixtureNode,
        name: name,
        inputs: node.arguments.map(function (argNode) { return (0, index_1.resolve)(argNode); }),
        response: (0, index_1.resolve)(node.type)
    };
    return result;
}
exports.resolveFieldDefinition = resolveFieldDefinition;
