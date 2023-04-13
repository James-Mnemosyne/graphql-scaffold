'use strict';
exports.__esModule = true;
exports.generateFixturesForListFixtureNode = void 0;
var utils_1 = require('../utils');
var __1 = require('..');
var types_1 = require('../../generateFixtures/types');
function generateFixturesForListFixtureNode(node, fixtureNodes, maxFixtures) {
  if (node.variation !== types_1.FixtureNodeVariation.ListFixtureNode) {
    throw new Error('Cannot use generateFixturesForListFixtureNode with type '.concat(node.variation, '.'));
  }
  console.log('generateFixturesForListFixtureNode', node);
  var entryVariants = (0, __1.generateFixtures)(node.child, fixtureNodes, maxFixtures);
  var results = (0, utils_1.buildListVariants)(entryVariants);
  return (0, utils_1.filterDefinedIfNotNullable)(node, results);
}
exports.generateFixturesForListFixtureNode = generateFixturesForListFixtureNode;
