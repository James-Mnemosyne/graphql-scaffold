"use strict";
exports.__esModule = true;
exports.generate = void 0;
var appendSchema_1 = require("./appendSchema");
var generateAuthorizer_1 = require("./generateAuthorizer");
var generateResolver_1 = require("./generateResolver");
var generateResolverTestFile_1 = require("./generateResolverTestFile");
function generate(config) {
    console.log('Starting.');
    (0, appendSchema_1.appendSchema)(config);
    console.log('Exported schema file.');
    (0, generateAuthorizer_1.generateAuthorizer)(config);
    console.log("Generated authorizer file in ".concat(config.authorizerFilePath, "."));
    (0, generateResolver_1.generateResolver)(config);
    console.log("Generated resolver file in ".concat(config.resolverFilePath, "."));
    (0, generateResolverTestFile_1.generateResolverTestFile)(config);
    console.log("Generated resolver test file in ".concat(config.resolverTestFilePath, "."));
    console.log('Finished.');
}
exports.generate = generate;
