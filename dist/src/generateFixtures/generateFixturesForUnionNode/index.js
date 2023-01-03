'use strict';
exports.__esModule = true;
exports.generateFixturesForUnionNode = void 0;
var utils_1 = require('../utils');
var __1 = require('..');
var types_1 = require('../../types');
function generateFixturesForUnionNode(node, fixtureNodes, maxFixtures) {
  if (node.variation !== types_1.FixtureNodeVariation.UnionFixtureNode) {
    throw new Error('Cannot use generateFixturesForUnionNode with type '.concat(node.variation, '.'));
  }
  var elements = node.elements;
  var results = [undefined, null];
  elements.forEach(function (element) {
    var elementResults = (0, __1.generateFixtures)(element, fixtureNodes, maxFixtures);
    results.push.apply(results, elementResults);
  });
  return (0, utils_1.filterDefinedIfNotNullable)(node, results);
}
exports.generateFixturesForUnionNode = generateFixturesForUnionNode;
