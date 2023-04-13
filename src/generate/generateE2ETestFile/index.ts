import { Config } from '../../types';
import { writeFileWithRecursiveDirCreation } from '../../utils/writeFileWithRecursiveDirCreation';

function getE2ETestBody(config: Config, fixture: Object) {
  const resolverName = config.resolverName;

  return `import { getTestUserToken } from 'src/graphql-retail/testing/utils/getTestUserToken';
  import { makeGraphQLRequest } from 'src/graphql-retail/testing/utils/makeGraphQLRequest';
  import gql from 'graphql-tag';
  
  const query = gql\`
    query ${resolverName} {
      ${resolverName} {
        __typename
      }
    }
  \`;
  
  // This is an e2e test for ${resolverName}, that verifies that it progressese through the entire server, with no issues
  describe('${resolverName}', () => {
    it('fetches correctly', async () => {
      const userToken = (await getTestUserToken({ email: 'usere2etestemail+titan123@gmail.com' })).token;
      const result = await makeGraphQLRequest({ query, variables: ${JSON.stringify(
        fixture
      )}, headers: { authorization: \`Bearer \${userToken}\` } });
  
      expect(result.data).toMatchSnapshot();
      expect(result.errors).toEqual(undefined);
    }, 25000);
  });
  
`;
}

// TODO (orange): re-enable ability to parse schema for better handling.
export function generateE2ETestFile(config: Config, fixture: Object): void {
  const resolverTestBody = getE2ETestBody(config, fixture);
  const fileName = config.resolverE2ETestFilePath;
  writeFileWithRecursiveDirCreation(fileName, resolverTestBody);
}
