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

const enumRegex = /123GeneratedEnumStart-[a-zA-Z0-9]*\.[a-zA-Z0-9]*-321GeneratedEnumEnd/g;

function getEnums(fixtures: any[]): string[] {
  const json = JSON.stringify(fixtures);
  const matches =
    json
      .match(enumRegex)
      ?.map(
        (match) => match.split('123GeneratedEnumStart-').join('').split('-321GeneratedEnumEnd').join('').split('.')[0]
      ) ?? [];
  return Array.from(new Set<string>(matches));
}

// TODO (Orange): update to host mockGraphQLResolveInfo in other file/do something else.
export function getTests(fixtures: any[], config: Config) {
  const enums = getEnums(fixtures);
  const enumImports = enums?.length ? `import { ${enums.join(', ')} } from '${config.typeFilePath}';\n` : '';
  return (
    `
import { GraphQLResolveInfo } from 'graphql';
import { ${config.resolverName} } from '${config.resolverFilePath}';
${enumImports}

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
