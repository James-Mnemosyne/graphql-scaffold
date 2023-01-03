"use strict";
exports.__esModule = true;
exports.resolveNamedType = void 0;
var graphql_1 = require("graphql");
var types_1 = require("../../../types");
function resolveNamedType(node) {
    if (node.kind !== graphql_1.Kind.NAMED_TYPE) {
        throw new Error("Cannot use resolveNamedType with type ".concat(node.kind, "."));
    }
    var name = node.name.value;
    var result = {
        variation: types_1.FixtureNodeVariation.ScalarFixtureNode,
        name: '',
        scalarName: name
    };
    return result;
}
exports.resolveNamedType = resolveNamedType;
