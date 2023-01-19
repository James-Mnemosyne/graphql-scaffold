import { mockGraphQLResolveContext, mockGraphQLResolveInfo } from 'graphql-retail/testing/fixtures/graphql';
import { thing0 } from '.';

/**
 * Tests for thing0 query
 */
describe('thing0 query', () => {
  beforeAll(async () => {});

  it('Runs on null input.', async () => {
    const response = await thing0(
      {},
      null, // This is probably not valid input.
      mockGraphQLResolveContext,
      mockGraphQLResolveInfo
    );
    expect(response).toEqual(null);
  });
});
