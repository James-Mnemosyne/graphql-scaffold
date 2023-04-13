import * as fs from 'fs';
import { Config } from '../../types';

function getResolverTestBody(config: Config, fixture: Object) {
  const resolverName = config.resolverName;
  const lowercaseResolverType = config.resolverType.toLowerCase();

  return `import { mockGraphQLResolveContext, mockGraphQLResolveInfo } from 'src/graphql-retail/testing/fixtures/graphql';
import { ${resolverName} } from '.';

/**
 * Tests for ${resolverName} ${lowercaseResolverType}
 */
describe('${resolverName} ${lowercaseResolverType}', () => {
  beforeAll(async () => {});

  it('Runs on null input.', async () => {
    const response = await ${resolverName}(
      {},
      ${JSON.stringify(fixture)}, // This is probably not valid input.
      mockGraphQLResolveContext,
      mockGraphQLResolveInfo
    );
    expect(response).toEqual(null);
  });
});
`;
}

// TODO (orange): re-enable ability to parse schema for better handling.
export function generateResolverTestFile(config: Config, fixture: Object): void {
  const resolverTestBody = getResolverTestBody(config, fixture);
  const fileName = config.resolverTestFilePath;
  fs.writeFileSync(fileName, resolverTestBody);
}
