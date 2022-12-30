'use strict';
exports.__esModule = true;
exports.generateFixtures = void 0;
var types_1 = require('../types');
var generateFixturesForEnumFixtureNode_1 = require('./generateFixturesForEnumFixtureNode');
var generateFixturesForFunctionFixtureNode_1 = require('./generateFixturesForFunctionFixtureNode');
var generateFixturesForObjectFixtureNode_1 = require('./generateFixturesForObjectFixtureNode');
var generateFixturesForScalarNode_1 = require('./generateFixturesForScalarNode');
function compress(fixtures, maxFixtures) {
  if (fixtures.length <= maxFixtures) {
    return fixtures;
  }
  var results = [];
  for (var index = 0; index < fixtures.length; index += fixtures.length / (maxFixtures - 1)) {
    var newValue = fixtures[Math.floor(index)];
    results.push(newValue);
  }
  return results;
}
function generateFixtures(node, fixtureNodes, maxFixtures) {
  switch (node.variation) {
    case types_1.FixtureNodeVariation.ScalarFixtureNode:
      var scalarResults = (0, generateFixturesForScalarNode_1.generateFixturesForScalarNode)(
        node,
        fixtureNodes,
        maxFixtures
      );
      return compress(scalarResults, maxFixtures);
    case types_1.FixtureNodeVariation.FunctionFixtureNode:
      var functionResults = (0, generateFixturesForFunctionFixtureNode_1.generateFixturesForFunctionFixtureNode)(
        node,
        fixtureNodes,
        maxFixtures
      );
      return compress(functionResults, maxFixtures);
    case types_1.FixtureNodeVariation.ObjectFixtureNode:
      var objectResults = (0, generateFixturesForObjectFixtureNode_1.generateFixturesForObjectFixtureNode)(
        node,
        fixtureNodes,
        maxFixtures
      );
      return compress(objectResults, maxFixtures);
    case types_1.FixtureNodeVariation.EnumFixtureNode:
      var enumResults = (0, generateFixturesForEnumFixtureNode_1.generateFixturesForEnumFixtureNode)(node);
      return compress(enumResults, maxFixtures);
    default:
      throw new Error('Unsupported generic fixture type generation for '.concat(node.variation, '.'));
  }
}
exports.generateFixtures = generateFixtures;
