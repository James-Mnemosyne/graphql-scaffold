
import { GraphQLResolveInfo } from 'graphql';
import { getSomething } from './testing/results/scalar/index.ts';


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
    const params = {"strategyKey":"","something":{"str":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case1', async () => {
    const params = {"strategyKey":"","something":{"str":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case2', async () => {
    const params = {"strategyKey":"random string","something":{"str":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case3', async () => {
    const params = {"strategyKey":"random string","something":{"str":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  

});
