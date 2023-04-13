'use strict';
exports.__esModule = true;
exports.generateE2ETestFile = void 0;
var writeFileWithRecursiveDirCreation_1 = require('../../utils/writeFileWithRecursiveDirCreation');
function getE2ETestBody(config, fixture) {
  var resolverName = config.resolverName;
  return "import { getTestUserToken } from 'src/graphql-retail/testing/utils/getTestUserToken';\n  import { makeGraphQLRequest } from 'src/graphql-retail/testing/utils/makeGraphQLRequest';\n  import gql from 'graphql-tag';\n  \n  const query = gql`\n    query "
    .concat(resolverName, ' {\n      ')
    .concat(resolverName, ' {\n        __typename\n      }\n    }\n  `;\n  \n  // This is an e2e test for ')
    .concat(resolverName, ", that verifies that it progressese through the entire server, with no issues\n  describe('")
    .concat(
      resolverName,
      "', () => {\n    it('fetches correctly', async () => {\n      const userToken = (await getTestUserToken({ email: 'usere2etestemail+titan123@gmail.com' })).token;\n      const result = await makeGraphQLRequest({ query, variables: "
    )
    .concat(
      JSON.stringify(fixture),
      ', headers: { authorization: `Bearer ${userToken}` } });\n  \n      expect(result.data).toMatchSnapshot();\n      expect(result.errors).toEqual(undefined);\n    }, 25000);\n  });\n  \n'
    );
}
// TODO (orange): re-enable ability to parse schema for better handling.
function generateE2ETestFile(config, fixture) {
  var resolverTestBody = getE2ETestBody(config, fixture);
  var fileName = config.resolverE2ETestFilePath;
  (0, writeFileWithRecursiveDirCreation_1.writeFileWithRecursiveDirCreation)(fileName, resolverTestBody);
}
exports.generateE2ETestFile = generateE2ETestFile;
