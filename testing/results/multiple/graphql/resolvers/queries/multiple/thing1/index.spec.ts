import { mockGraphQLResolveContext, mockGraphQLResolveInfo } from 'src/graphql-retail/testing/fixtures/graphql';
import { thing1 } from '.';

/**
 * Tests for thing1 query
 */
describe('thing1 query', () => {
  beforeAll(async () => {});

  it('Runs on null input.', async () => {
    const response = await thing1(
      {},
      {}, // This is probably not valid input.
      mockGraphQLResolveContext,
      mockGraphQLResolveInfo
    );
    expect(response).toEqual(null);
  });
});
