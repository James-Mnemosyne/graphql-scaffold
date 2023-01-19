'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
exports.__esModule = true;
exports.getConfig = void 0;
var fs = require('fs');
var types_1 = require('../types');
var minimist = require('minimist');
var getFileConfig_1 = require('./getFileConfig');
var configSchema_1 = require('./configSchema');
function getConfig() {
  var _a;
  var args = minimist(process.argv.slice(2));
  var schemaFilePath = args.schemaFilePath;
  var fileConfig = (0, getFileConfig_1.getFileConfig)();
  var testType = (_a = fileConfig.testType) !== null && _a !== void 0 ? _a : 'spec';
  var schemaSplit = schemaFilePath.split('/schemas/');
  if ((schemaSplit === null || schemaSplit === void 0 ? void 0 : schemaSplit.length) !== 2) {
    throw new Error('Invalid schema path. /schemas/ is not unary.');
  }
  if (!schemaSplit[1].endsWith('/schema.graphql')) {
    throw new Error('Invalid schema path. schema is not schema.graphql');
  }
  var baseFilePath = schemaSplit[0];
  var endDirectory = schemaSplit[1].replace(/\/schema.graphql$/, '');
  var schemaIndexFilePath = schemaFilePath.replace(/\/schema.graphql$/, '/index.ts');
  var endPath = ''.concat(endDirectory, '/index.ts');
  // This annoys me, but I also want to one-line it.
  var resolverName = endDirectory.split('/')[endDirectory.split('/').length - 1];
  var testEndPath = schemaSplit[1].replace(/\/schema.graphql$/, '/index.'.concat(testType, '.ts'));
  var resolverType = endPath.startsWith('mutations')
    ? types_1.ResolverType.Mutation
    : endPath.startsWith('queries')
    ? types_1.ResolverType.Query
    : types_1.ResolverType.Unknown;
  var resolverFilePath = ''.concat(baseFilePath, '/resolvers/').concat(endPath);
  var resolverTestFilePath = ''.concat(baseFilePath, '/resolvers/').concat(testEndPath);
  var authorizerFilePath = ''.concat(baseFilePath, '/authorizers/').concat(endPath);
  var exists = fs.existsSync(schemaFilePath);
  if (!exists) {
    throw new Error(''.concat(schemaFilePath, ' does not exist.'));
  }
  var file = fs.readFileSync(schemaFilePath).toString();
  // TODO (Orange): figure out a better way to do this (or at least add validation on only one export)
  if (!file.toLowerCase().includes(resolverType.toLowerCase())) {
    throw new Error('Invalid schema file. '.concat(resolverType, ' is not contained in resolverType directory.'));
  }
  if (!file.includes(resolverName)) {
    throw new Error('Invalid schema file. '.concat(resolverName, ' is not contained in schema file.'));
  }
  var config = __assign(__assign({}, fileConfig), {
    baseFilePath: baseFilePath,
    resolverFilePath: resolverFilePath,
    resolverTestFilePath: resolverTestFilePath,
    authorizerFilePath: authorizerFilePath,
    resolverType: resolverType,
    resolverName: resolverName,
    schemaIndexFilePath: schemaIndexFilePath,
    schemaFilePath: schemaFilePath,
  });
  configSchema_1.configSchema.validateSync(config);
  return config;
}
exports.getConfig = getConfig;
