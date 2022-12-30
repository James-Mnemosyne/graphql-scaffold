import { Config } from 'types';

function getTest(fixture: any, index: number, config: Config) {
  return `
  it('case${index}', async () => {
    const params = ${JSON.stringify(fixture)};
    const result = await ${config.resolverName}({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  `
    .split('"123GeneratedEnumStart-')
    .join('')
    .split('-321GeneratedEnumEnd"')
    .join('');
}

// TODO (Orange): update to host mockGraphQLResolveInfo in other file/do something else.
export function getTests(fixtures: any[], config: Config) {
  return (
    `
import { GraphQLResolveInfo } from 'graphql';
import { ${config.resolverName} } from '${config.resolverFilePath}'; // TODO: resolverPath

// We never actually use the info object.
export const mockGraphQLResolveInfo = {
  fieldName: '',
  fieldNodes: [],
  returnType: undefined,
  parentType: undefined,
  path: undefined,
  schema: undefined,
  fragments: undefined,
  rootValue: undefined,
  operation: undefined,
  variableValues: {},
  cacheControl: undefined,
} as unknown as GraphQLResolveInfo;

describe('${config.resolverName} smoke tests', () => {
  beforeAll(() => {
    // Do something here.
  });

  beforeEach(() => {
    // Do something here.
  });

    ` +
    fixtures.map((fixture, index) => getTest(fixture, index, config)).join('\n\n') +
    `

});
`
  );
}
