'use strict';
exports.__esModule = true;
exports.appendSchema = void 0;
var fs = require('fs');
var appendImports_1 = require('../../utils/appendImports');
function getSchemaIndexFlieBody(config) {
  var resolverName = config.resolverName;
  return 'import '.concat(resolverName, " from './schema.graphql';\n\nexport { ").concat(resolverName, ' };\n');
}
function addSchemaIndexFile(config) {
  var fileBody = getSchemaIndexFlieBody(config);
  fs.writeFileSync(config.schemaIndexFilePath, fileBody);
}
function appendSchema(config) {
  (0, appendImports_1.appendImports)(config.schemaFilePath, config);
  addSchemaIndexFile(config);
}
exports.appendSchema = appendSchema;
