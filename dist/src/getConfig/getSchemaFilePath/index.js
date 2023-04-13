'use strict';
exports.__esModule = true;
exports.getSchemaFilePath = void 0;
var glob = require('glob');
function getGreaterThanOneError(globString, results) {
  return 'Multiple results returned matching '
    .concat(globString, '.\nAre you sure that you should have multiple resolvers with the same name?\nResults:\n')
    .concat(JSON.stringify(results, null, 2));
}
function getSchemaFilePath(baseFilePath, resolverName) {
  var globString = ''.concat(baseFilePath, '/**/').concat(resolverName, '/schema.graphql');
  var results = glob.sync(globString, { sync: true });
  if (results.length < 1) {
    throw new Error('No results returned matching '.concat(globString, '.'));
  }
  if (results.length > 1) {
    throw new Error(getGreaterThanOneError(globString, results));
  }
  return results[0];
}
exports.getSchemaFilePath = getSchemaFilePath;
