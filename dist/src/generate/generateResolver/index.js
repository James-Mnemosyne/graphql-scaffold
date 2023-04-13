'use strict';
exports.__esModule = true;
exports.generateResolver = void 0;
var fs = require('fs');
var appendImports_1 = require('../../utils/appendImports');
var types_1 = require('../../types');
function getResolverTypeName(resolverType) {
  return resolverType === types_1.ResolverType.Mutation
    ? 'Mutations'
    : resolverType === types_1.ResolverType.Query
    ? 'Queries'
    : '';
}
function getResolverBody(config) {
  var resolverName = config.resolverName;
  var lowercaseResolverType = config.resolverType.toLowerCase();
  var resolverTypeName = getResolverTypeName(config.resolverType);
  return 'import { '
    .concat(resolverTypeName, " } from 'src/graphql-retail/types';\n\n/**\n * ")
    .concat(resolverName, ' ')
    .concat(lowercaseResolverType, '\n */\nexport const ')
    .concat(resolverName, ': ')
    .concat(resolverTypeName, "['")
    .concat(
      resolverName,
      "'] = async function (\n  _parent,\n  input,\n  _context\n) {\n  // TODO implement\n  console.log('input', input);\n  throw new Error('Unsupported "
    )
    .concat(lowercaseResolverType, ' ')
    .concat(resolverName, ".')\n};\n");
}
function generateResolver(config) {
  (0, appendImports_1.appendImports)(config.resolverFilePath, config);
  var resolverBody = getResolverBody(config);
  var fileName = config.resolverFilePath;
  fs.writeFileSync(fileName, resolverBody);
}
exports.generateResolver = generateResolver;
