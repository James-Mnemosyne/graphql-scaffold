"use strict";
exports.__esModule = true;
exports.resolveInterfaceTypeDefinition = void 0;
var graphql_1 = require("graphql");
function resolveInterfaceTypeDefinition(node) {
    if (node.kind !== graphql_1.Kind.INTERFACE_TYPE_DEFINITION) {
        throw new Error("Cannot use resolveInterfaceTypeDefinition with type ".concat(node.kind, "."));
    }
    throw new Error('resolveInterfaceTypeDefinition unsupported.');
}
exports.resolveInterfaceTypeDefinition = resolveInterfaceTypeDefinition;
