"use strict";
exports.__esModule = true;
exports.generateFixtures = void 0;
var types_1 = require("../types");
var generateFixturesForEnumFixtureNode_1 = require("./generateFixturesForEnumFixtureNode");
var generateFixturesForFunctionFixtureNode_1 = require("./generateFixturesForFunctionFixtureNode");
var generateFixturesForListFixtureNode_1 = require("./generateFixturesForListFixtureNode");
var generateFixturesForObjectFixtureNode_1 = require("./generateFixturesForObjectFixtureNode");
var generateFixturesForScalarNode_1 = require("./generateFixturesForScalarNode");
var generateFixturesForUnionNode_1 = require("./generateFixturesForUnionNode");
var utils_1 = require("./utils");
function generateFixtures(node, fixtureNodes, maxFixtures) {
    switch (node.variation) {
        case types_1.FixtureNodeVariation.ScalarFixtureNode:
            var scalarResults = (0, generateFixturesForScalarNode_1.generateFixturesForScalarNode)(node, fixtureNodes, maxFixtures);
            return (0, utils_1.compress)(scalarResults, maxFixtures);
        case types_1.FixtureNodeVariation.UnionFixtureNode:
            var unionResults = (0, generateFixturesForUnionNode_1.generateFixturesForUnionNode)(node, fixtureNodes, maxFixtures);
            return (0, utils_1.compress)(unionResults, maxFixtures);
        case types_1.FixtureNodeVariation.FunctionFixtureNode:
            var functionResults = (0, generateFixturesForFunctionFixtureNode_1.generateFixturesForFunctionFixtureNode)(node, fixtureNodes, maxFixtures);
            return (0, utils_1.compress)(functionResults, maxFixtures);
        case types_1.FixtureNodeVariation.ObjectFixtureNode:
            var objectResults = (0, generateFixturesForObjectFixtureNode_1.generateFixturesForObjectFixtureNode)(node, fixtureNodes, maxFixtures);
            return (0, utils_1.compress)(objectResults, maxFixtures);
        case types_1.FixtureNodeVariation.EnumFixtureNode:
            var enumResults = (0, generateFixturesForEnumFixtureNode_1.generateFixturesForEnumFixtureNode)(node);
            return (0, utils_1.compress)(enumResults, maxFixtures);
        case types_1.FixtureNodeVariation.ListFixtureNode:
            var listResults = (0, generateFixturesForListFixtureNode_1.generateFixturesForListFixtureNode)(node, fixtureNodes, maxFixtures);
            return (0, utils_1.compress)(listResults, maxFixtures);
        default:
            throw new Error("Unsupported generic fixture type generation for ".concat(node.variation, "."));
    }
}
exports.generateFixtures = generateFixtures;
