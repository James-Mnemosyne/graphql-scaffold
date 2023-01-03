"use strict";
exports.__esModule = true;
exports.getConfig = void 0;
var fs = require("fs");
var yup = require("yup");
var error = "\nThis package requires the existence of a .gqlTestGenerator.json file, to specify it's purpose.\n\nThis file should be in JSON format, with the following type:\n{\n  schemaFilePath: string; // The path to all schemas for the project.\n  resolverFilePath: string; // The path to the resolver function.\n  resolverName: string; // The name of the resolver function.\n  typeFilePath?: string; // The path to the types file that should be accessed for enums or related typings.\n  maxFixtures?: number; // The maximum number of fixtures/tests that should be generated. Default is 100.\n}";
function getError(extension) {
    return (error +
        "\n\n".concat(extension, ".\n"));
}
function getRequiredString(name) {
    return yup
        .string()
        .min(1, getError("".concat(name, " must be at least 1 character.")))
        .defined(getError("".concat(name, " is not defined.")))
        .required(getError("".concat(name, " is required.")));
}
var configSchema = yup
    .object({
    resolverName: getRequiredString('resolverName'),
    schemaFilePath: getRequiredString('schemaFilePath'),
    resolverFilePath: getRequiredString('resolverFilePath'),
    typeFilePath: yup.string().min(1).optional(),
    maxFixtures: yup.number().optional()
})
    .defined()
    .required();
function getConfig() {
    var exists = fs.existsSync('.gqlTestGenerator.json');
    if (!exists) {
        throw new Error(error);
    }
    // This seems to be expected, but for the life of me, I cannot figure out why.
    var file = fs.readFileSync('.gqlTestGenerator.json');
    var config = JSON.parse(file);
    configSchema.validateSync(config);
    return config;
}
exports.getConfig = getConfig;
