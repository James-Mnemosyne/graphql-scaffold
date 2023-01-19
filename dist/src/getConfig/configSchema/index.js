'use strict';
exports.__esModule = true;
exports.configSchema = void 0;
var yup = require('yup');
var error = 'An error was found while parsing the schema:';
function getError(extension) {
  return error + '\n\n'.concat(extension, '.\n');
}
function getRequiredString(name) {
  return yup
    .string()
    .min(1, getError(''.concat(name, ' must be at least 1 character.')))
    .defined(getError(''.concat(name, ' is not defined.')))
    .required(getError(''.concat(name, ' is required.')));
}
exports.configSchema = yup
  .object({
    beforeCommands: yup.array().of(yup.string()),
    afterCommands: yup.array().of(yup.string()),
    baseFilePath: getRequiredString('baseFilePath'),
    resolverFilePath: getRequiredString('resolverFilePath'),
    resolverTestFilePath: getRequiredString('resolverTestFilePath'),
    authorizerFilePath: getRequiredString('authorizerFilePath'),
    resolverType: getRequiredString('resolverType'),
    schemaIndexFilePath: getRequiredString('schemaIndexFilePath'),
    schemaFilePath: getRequiredString('schemaFilePath'),
    testType: getRequiredString('testType'),
  })
  .defined()
  .required();
