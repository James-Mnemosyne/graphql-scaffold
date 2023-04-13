'use strict';
exports.__esModule = true;
exports.resolveInterfaceTypeDefinition = void 0;
var graphql_1 = require('graphql');
var __1 = require('..');
var types_1 = require('../../../generateFixtures/types');
function resolveInterfaceTypeDefinition(node) {
  if (node.kind !== graphql_1.Kind.INTERFACE_TYPE_DEFINITION) {
    throw new Error('Cannot use resolveInterfaceTypeDefinition with type '.concat(node.kind, '.'));
  }
  var result = {
    variation: types_1.FixtureNodeVariation.ObjectFixtureNode,
    fields: node.fields.map(function (field) {
      return (0, __1.resolve)(field);
    }),
    name: node.name.value,
  };
  return result;
}
exports.resolveInterfaceTypeDefinition = resolveInterfaceTypeDefinition;
