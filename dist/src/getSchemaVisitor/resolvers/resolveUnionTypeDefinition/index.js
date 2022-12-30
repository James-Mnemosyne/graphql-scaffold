'use strict';
exports.__esModule = true;
exports.resolveUnionTypeDefinition = void 0;
var graphql_1 = require('graphql');
function resolveUnionTypeDefinition(node) {
  if (node.kind !== graphql_1.Kind.UNION_TYPE_DEFINITION) {
    throw new Error('Cannot use resolveUnionTypeDefinition with type '.concat(node.kind, '.'));
  }
  throw new Error('resolveUnionTypeDefinition unsupported.');
}
exports.resolveUnionTypeDefinition = resolveUnionTypeDefinition;
