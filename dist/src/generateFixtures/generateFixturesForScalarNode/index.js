"use strict";
exports.__esModule = true;
exports.generateFixturesForScalarNode = void 0;
var utils_1 = require("../utils");
var __1 = require("..");
var types_1 = require("../../types");
function generateFixturesForScalarNode(node, fixtureNodes, maxFixtures) {
    if (node.variation !== types_1.FixtureNodeVariation.ScalarFixtureNode) {
        throw new Error("Cannot use generateFixturesForScalarNode with type ".concat(node.variation, "."));
    }
    var lowercaseScalarName = node.scalarName.toLowerCase();
    var lowercaseName = node.name.toLowerCase();
    var results = [undefined, null];
    switch (lowercaseScalarName) {
        case 'string':
            results.push.apply(results, ['', 'random string']);
            if (lowercaseName.includes('email')) {
                results.push.apply(results, ['james@bob.edu']);
            }
            if (lowercaseName.includes('url')) {
                results.push.apply(results, ['http://www.google.com']);
            }
            if (lowercaseName.includes('image') || lowercaseName.includes('picture') || lowercaseName.includes('photo')) {
                results.push.apply(results, ['http://www.google.com/thing.png']);
            }
            if (lowercaseName.includes('video')) {
                results.push.apply(results, ['http://www.google.com/thing.mp4']);
            }
            return (0, utils_1.filterDefinedIfNotNullable)(node, results);
        case 'number':
            results.push.apply(results, [-1000.5, -1, 0, 1, 2005970.7898]);
            return (0, utils_1.filterDefinedIfNotNullable)(node, results);
        case 'float':
            results.push.apply(results, [-1000.5, 0, 2000345.7898]);
            return (0, utils_1.filterDefinedIfNotNullable)(node, results);
        case 'integer':
        case 'int':
            results.push.apply(results, [-1000, 0, 1, 2004560]);
            return (0, utils_1.filterDefinedIfNotNullable)(node, results);
        case 'boolean':
            results.push.apply(results, [false, true]);
            return (0, utils_1.filterDefinedIfNotNullable)(node, results);
    }
    var scalarName = node.scalarName;
    if (fixtureNodes[scalarName]) {
        return (0, utils_1.filterDefinedIfNotNullable)(node, (0, __1.generateFixtures)(fixtureNodes[scalarName], fixtureNodes, maxFixtures));
    }
    throw new Error("Unable to find existing fixutre node for scalar type ".concat(scalarName));
}
exports.generateFixturesForScalarNode = generateFixturesForScalarNode;
