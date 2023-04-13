'use strict';
exports.__esModule = true;
exports.generateFixturesForEnumFixtureNode = void 0;
var types_1 = require('../../generateFixtures/types');
function generateFixturesForEnumFixtureNode(node) {
  if (node.variation !== types_1.FixtureNodeVariation.EnumFixtureNode) {
    throw new Error('Cannot use generateFixturesForEnumFixtureNode with type '.concat(node.variation, '.'));
  }
  return node.keys.map(function (key) {
    return '123GeneratedEnumStart-'.concat(node.name, '.').concat(key, '-321GeneratedEnumEnd');
  });
}
exports.generateFixturesForEnumFixtureNode = generateFixturesForEnumFixtureNode;
