'use strict';
exports.__esModule = true;
exports.resolveListType = void 0;
var graphql_1 = require('graphql');
var types_1 = require('../../../generateFixtures/types');
var __1 = require('..');
function resolveListType(node) {
  if (node.kind !== graphql_1.Kind.LIST_TYPE) {
    throw new Error('Cannot use resolveListType with type '.concat(node.kind, '.'));
  }
  var result = {
    variation: types_1.FixtureNodeVariation.ListFixtureNode,
    child: (0, __1.resolve)(node.type),
    name: '',
  };
  return result;
}
exports.resolveListType = resolveListType;
