'use strict';
exports.__esModule = true;
exports.generateResolverTestFile = void 0;
var fs = require('fs');
function getResolverTestBody(config) {
  var resolverName = config.resolverName;
  var lowercaseResolverType = config.resolverType.toLowerCase();
  return "import { mockGraphQLResolveContext, mockGraphQLResolveInfo } from 'graphql-retail/testing/fixtures/graphql';\nimport { "
    .concat(resolverName, " } from '.';\n\n/**\n * Tests for ")
    .concat(resolverName, ' ')
    .concat(lowercaseResolverType, "\n */\ndescribe('")
    .concat(resolverName, ' ')
    .concat(
      lowercaseResolverType,
      "', () => {\n  beforeAll(async () => {});\n\n  it('Runs on null input.', async () => {\n    const response = await "
    )
    .concat(
      resolverName,
      '(\n      {},\n      null, // This is probably not valid input.\n      mockGraphQLResolveContext,\n      mockGraphQLResolveInfo\n    );\n    expect(response).toEqual(null);\n  });\n});\n'
    );
}
// TODO (orange): re-enable ability to parse schema for better handling.
function generateResolverTestFile(config) {
  var resolverTestBody = getResolverTestBody(config);
  var fileName = config.resolverTestFilePath;
  fs.writeFileSync(fileName, resolverTestBody);
}
exports.generateResolverTestFile = generateResolverTestFile;
