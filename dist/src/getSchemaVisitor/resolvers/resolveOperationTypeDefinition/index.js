'use strict';
exports.__esModule = true;
exports.resolveOperationTypeDefinition = void 0;
var graphql_1 = require('graphql');
var types_1 = require('../../../types');
function resolveOperationTypeDefinition(node) {
  if (node.kind !== graphql_1.Kind.OPERATION_TYPE_DEFINITION) {
    throw new Error('Cannot use resolveOperationTypeDefinition with type '.concat(node.kind, '.'));
  }
  if (node.type.kind === graphql_1.Kind.NAMED_TYPE) {
    var result_1 = {
      variation: types_1.FixtureNodeVariation.UnknownFixtureNode,
      name: node.type.name.value,
      location: 'resolveOperationTypeDefinition',
    };
    return result_1;
  }
  var result = {
    variation: types_1.FixtureNodeVariation.UnknownFixtureNode,
    name: 'unknown',
    location: 'resolveOperationTypeDefinition',
  };
  return result;
}
exports.resolveOperationTypeDefinition = resolveOperationTypeDefinition;
