import { mockGraphQLResolveContext, mockGraphQLResolveInfo } from 'src/graphql-retail/testing/fixtures/graphql';
import { thing } from '.';

/**
 * Tests for thing query
 */
describe('thing query', () => {
  beforeAll(async () => {});

  it('Runs on null input.', async () => {
    const response = await thing(
      {},
      {"floatInput":0,"stringInput":"random string","optionalBooleanInput":false}, // This is probably not valid input.
      mockGraphQLResolveContext,
      mockGraphQLResolveInfo
    );
    expect(response).toEqual(null);
  });
});
