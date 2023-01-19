import { getSchemaFilePath } from '../../../src/getConfig/getSchemaFilePath';

const baseFilePath = 'testing/fixtures/getSchemaFilePath';

describe('Query', () => {
  it('succeeds with one result.', async () => {
    const resolverName = 'stuff';
    const results = getSchemaFilePath(baseFilePath, resolverName);

    expect(results).toEqual('testing/fixtures/getSchemaFilePath/stuff/schema.graphql');
  });

  it('throws with 0 results', async () => {
    const resolverName = 'adfasdfasdfasdf';

    expect(() => {
      getSchemaFilePath(baseFilePath, resolverName);
    }).toThrow(`No results returned matching testing/fixtures/getSchemaFilePath/**/adfasdfasdfasdf/schema.graphql.`);
  });

  it('throws on multiple results', async () => {
    const resolverName = 'thing';
    expect(() => {
      getSchemaFilePath(baseFilePath, resolverName);
    }).toThrow(`Multiple results returned matching testing/fixtures/getSchemaFilePath/**/thing/schema.graphql.
Are you sure that you should have multiple resolvers with the same name?
Results:
[
  \"testing/fixtures/getSchemaFilePath/stuff/thing/schema.graphql\",
  \"testing/fixtures/getSchemaFilePath/thing/schema.graphql\"
]`);
  });
});
