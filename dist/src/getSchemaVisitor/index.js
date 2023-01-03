"use strict";
exports.__esModule = true;
exports.getNewResolve = void 0;
var graphql_1 = require("graphql");
var resolvers_1 = require("./resolvers");
var typeDefinitionNodes = new Set([
    graphql_1.Kind.SCALAR_TYPE_DEFINITION,
    graphql_1.Kind.OBJECT_TYPE_DEFINITION,
    graphql_1.Kind.INTERFACE_TYPE_DEFINITION,
    graphql_1.Kind.ENUM_TYPE_DEFINITION,
    graphql_1.Kind.UNION_TYPE_DEFINITION,
    graphql_1.Kind.INPUT_OBJECT_TYPE_DEFINITION,
]);
function getNewResolve(result) {
    var newResolve = function (node) {
        if (typeDefinitionNodes.has(node.kind)) {
            var typedNode = node;
            result[typedNode.name.value] = (0, resolvers_1.resolve)(node);
        }
        return node;
    };
    return newResolve;
}
exports.getNewResolve = getNewResolve;
