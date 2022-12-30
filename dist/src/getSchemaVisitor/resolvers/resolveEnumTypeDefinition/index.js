'use strict';
exports.__esModule = true;
exports.resolveEnumTypeDefinition = void 0;
var graphql_1 = require('graphql');
var types_1 = require('../../../types');
function resolveEnumValueDefinition(node) {
  if (node.kind !== graphql_1.Kind.ENUM_VALUE_DEFINITION) {
    throw new Error('Cannot use resolveEnumValueDefinition with type '.concat(node.kind, '.'));
  }
  return node.name.value;
}
function resolveEnumTypeDefinition(node) {
  if (node.kind !== graphql_1.Kind.ENUM_TYPE_DEFINITION) {
    throw new Error('Cannot use resolveEnumTypeDefinition with type '.concat(node.kind, '.'));
  }
  var result = {
    variation: types_1.FixtureNodeVariation.EnumFixtureNode,
    name: node.name.value,
    keys: node.values.map(function (node) {
      return resolveEnumValueDefinition(node);
    }),
  };
  return result;
}
exports.resolveEnumTypeDefinition = resolveEnumTypeDefinition;
