
import { GraphQLResolveInfo } from 'graphql';
import { getSomething } from './testing/results/enum/index.ts';
import { SomethingEnum } from './testing/fixtures/types.generated.ts';


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

describe('getSomething smoke tests', () => {
  beforeAll(() => {
    // Do something here.
  });

  beforeEach(() => {
    // Do something here.
  });

  it('case0', async () => {
    const params = {"thing":SomethingEnum.Something0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });

  it('case1', async () => {
    const params = {"thing":SomethingEnum.Something1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });

  it('case2', async () => {
    const params = {"thing":SomethingEnum.Something2};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
});
