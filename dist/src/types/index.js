"use strict";
exports.__esModule = true;
exports.FixtureNodeVariation = exports.ResolverType = void 0;
var ResolverType;
(function (ResolverType) {
    ResolverType["Query"] = "Query";
    ResolverType["Mutation"] = "Mutation";
    ResolverType["Field"] = "Field";
    ResolverType["Unknown"] = "Unknown";
})(ResolverType = exports.ResolverType || (exports.ResolverType = {}));
var FixtureNodeVariation;
(function (FixtureNodeVariation) {
    FixtureNodeVariation["BaseFixtureNode"] = "BaseFixtureNode";
    FixtureNodeVariation["EnumFixtureNode"] = "EnumFixtureNode";
    FixtureNodeVariation["ListFixtureNode"] = "ListFixtureNode";
    FixtureNodeVariation["FunctionFixtureNode"] = "FunctionFixtureNode";
    FixtureNodeVariation["NonNullNode"] = "NonNullNode";
    FixtureNodeVariation["ObjectFixtureNode"] = "ObjectFixtureNode";
    FixtureNodeVariation["RootFixtureNode"] = "RootFixtureNode";
    FixtureNodeVariation["ScalarFixtureNode"] = "ScalarFixtureNode";
    FixtureNodeVariation["UnionFixtureNode"] = "UnionFixtureNode";
    FixtureNodeVariation["UnknownFixtureNode"] = "UnknownFixtureNode";
})(FixtureNodeVariation = exports.FixtureNodeVariation || (exports.FixtureNodeVariation = {}));
