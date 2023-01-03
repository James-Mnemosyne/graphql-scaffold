"use strict";
exports.__esModule = true;
exports.resolveName = void 0;
var graphql_1 = require("graphql");
var types_1 = require("../../../types");
function resolveName(node) {
    if (node.kind !== graphql_1.Kind.NAME) {
        throw new Error("Cannot use resolveName with type ".concat(node.kind, "."));
    }
    var name = node.value;
    return {
        variation: types_1.FixtureNodeVariation.UnknownFixtureNode,
        name: name,
        location: 'resolveName'
    };
}
exports.resolveName = resolveName;
