"use strict";
exports.__esModule = true;
exports.generateFixturesForObjectFixtureNode = void 0;
var utils_1 = require("../utils");
var __1 = require("..");
var types_1 = require("../../types");
function generateFixturesForObjectFixtureNode(node, fixtureNodes, maxFixtures) {
    if (node.variation !== types_1.FixtureNodeVariation.ObjectFixtureNode) {
        throw new Error("Cannot use generateFixturesForObjectFixtureNode with type ".concat(node.variation, "."));
    }
    var fieldVariants = {};
    node.fields.forEach(function (field) {
        fieldVariants[field.name] = (0, __1.generateFixtures)(field, fixtureNodes, maxFixtures);
    });
    var results = (0, utils_1.buildObjectVariants)(fieldVariants);
    return (0, utils_1.filterDefinedIfNotNullable)(node, results);
}
exports.generateFixturesForObjectFixtureNode = generateFixturesForObjectFixtureNode;
