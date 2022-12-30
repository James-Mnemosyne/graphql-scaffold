"use strict";
exports.__esModule = true;
exports.resolveScalarTypeDefinition = void 0;
var graphql_1 = require("graphql");
var types_1 = require("../../../types");
function resolveScalarTypeDefinition(node) {
    if (node.kind !== graphql_1.Kind.SCALAR_TYPE_DEFINITION) {
        throw new Error("Cannot use resolveScalarTypeDefinition with type ".concat(node.kind, "."));
    }
    var name = node.name.value;
    var result = {
        variation: types_1.FixtureNodeVariation.ScalarFixtureNode,
        name: '',
        scalarName: name
    };
    return result;
}
exports.resolveScalarTypeDefinition = resolveScalarTypeDefinition;
