import { buildSchema } from 'graphql';
import { plugin } from '../src/index';

describe('Query', () => {
  it('with basic object type', async () => {
    const schema = buildSchema(/* GraphQL */ `
      input Something {
        str: String!
      }

      type SomethingResult {
        str: String!
      }

      type Query {
        getSomething(strategyKey: String!, something: Something!): SomethingResult!
      }
    `);
    const result = await plugin(schema, [], { resolverName: 'getSomething' }, {});
    expect(result).toEqual(null);
  });
});
