'use strict';
exports.__esModule = true;
exports.generateFixturesForFunctionFixtureNode = void 0;
var utils_1 = require('../utils');
var __1 = require('..');
var types_1 = require('../../generateFixtures/types');
function generateFixturesForFunctionFixtureNode(node, fixtureNodes, maxFixtures) {
  if (node.variation !== types_1.FixtureNodeVariation.FunctionFixtureNode) {
    throw new Error('Cannot use generateFixturesForFunctionFixtureNode with type '.concat(node.variation, '.'));
  }
  var fieldVariants = {};
  node.inputs.forEach(function (input) {
    fieldVariants[input.name] = (0, __1.generateFixtures)(input, fixtureNodes, maxFixtures);
  });
  var results = (0, utils_1.buildObjectVariants)(fieldVariants);
  return (0, utils_1.filterDefinedIfNotNullable)(node, results);
}
exports.generateFixturesForFunctionFixtureNode = generateFixturesForFunctionFixtureNode;
