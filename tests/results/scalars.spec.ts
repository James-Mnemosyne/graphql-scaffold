import { GraphQLResolveInfo } from 'graphql';
import { getSomething } from './tests/results/scalars.ts'; // TODO: resolverPath

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

  it('smoke test: case0', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: -1000.5, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case1', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: -1000.5, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case2', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: -1000.5, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case3', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: -1000.5, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case4', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: -1000.5, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case5', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: -1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case6', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: -1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case7', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: -1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case8', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: -1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case9', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: -1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case10', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: 0, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case11', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: 0, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case12', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: 0, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case13', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: 0, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case14', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: 0, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case15', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: 1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case16', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: 1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case17', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: 1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case18', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: 1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case19', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: 1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case20', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case21', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case22', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case23', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case24', async () => {
    const params = { str: '', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case25', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: -1000.5, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case26', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: -1000.5, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case27', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: -1000.5, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case28', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: -1000.5, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case29', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: -1000.5, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case30', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: -1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case31', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: -1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case32', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: -1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case33', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: -1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case34', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: -1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case35', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: 0, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case36', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: 0, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case37', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: 0, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case38', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: 0, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case39', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: 0, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case40', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: 1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case41', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: 1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case42', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: 1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case43', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: 1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case44', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: 1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case45', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: 2000000.7898, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case46', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: 2000000.7898, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case47', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: 2000000.7898, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case48', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: 2000000.7898, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case49', async () => {
    const params = { str: '', addressEmail: '', url: 'random string', numFloat: 2000000.7898, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case50', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: -1000.5, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case51', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: -1000.5, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case52', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: -1000.5, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case53', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: -1000.5, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case54', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: -1000.5, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case55', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: -1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case56', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: -1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case57', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: -1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case58', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: -1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case59', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: -1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case60', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: 0, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case61', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: 0, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case62', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: 0, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case63', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: 0, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case64', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: 0, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case65', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: 1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case66', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: 1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case67', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: 1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case68', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: 1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case69', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: 1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case70', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: 2000000.7898, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case71', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: 2000000.7898, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case72', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: 2000000.7898, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case73', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: 2000000.7898, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case74', async () => {
    const params = { str: '', addressEmail: 'random string', url: '', numFloat: 2000000.7898, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case75', async () => {
    const params = { str: '', addressEmail: 'random string', url: 'random string', numFloat: -1000.5, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case76', async () => {
    const params = { str: '', addressEmail: 'random string', url: 'random string', numFloat: -1000.5, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case77', async () => {
    const params = { str: '', addressEmail: 'random string', url: 'random string', numFloat: -1000.5, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case78', async () => {
    const params = { str: '', addressEmail: 'random string', url: 'random string', numFloat: -1000.5, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case79', async () => {
    const params = {
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case80', async () => {
    const params = { str: '', addressEmail: 'random string', url: 'random string', numFloat: -1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case81', async () => {
    const params = { str: '', addressEmail: 'random string', url: 'random string', numFloat: -1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case82', async () => {
    const params = { str: '', addressEmail: 'random string', url: 'random string', numFloat: -1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case83', async () => {
    const params = { str: '', addressEmail: 'random string', url: 'random string', numFloat: -1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case84', async () => {
    const params = { str: '', addressEmail: 'random string', url: 'random string', numFloat: -1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case85', async () => {
    const params = { str: '', addressEmail: 'random string', url: 'random string', numFloat: 0, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case86', async () => {
    const params = { str: '', addressEmail: 'random string', url: 'random string', numFloat: 0, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case87', async () => {
    const params = { str: '', addressEmail: 'random string', url: 'random string', numFloat: 0, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case88', async () => {
    const params = { str: '', addressEmail: 'random string', url: 'random string', numFloat: 0, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case89', async () => {
    const params = { str: '', addressEmail: 'random string', url: 'random string', numFloat: 0, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case90', async () => {
    const params = { str: '', addressEmail: 'random string', url: 'random string', numFloat: 1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case91', async () => {
    const params = { str: '', addressEmail: 'random string', url: 'random string', numFloat: 1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case92', async () => {
    const params = { str: '', addressEmail: 'random string', url: 'random string', numFloat: 1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case93', async () => {
    const params = { str: '', addressEmail: 'random string', url: 'random string', numFloat: 1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case94', async () => {
    const params = { str: '', addressEmail: 'random string', url: 'random string', numFloat: 1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case95', async () => {
    const params = {
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case96', async () => {
    const params = { str: '', addressEmail: 'random string', url: 'random string', numFloat: 2000000.7898, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case97', async () => {
    const params = { str: '', addressEmail: 'random string', url: 'random string', numFloat: 2000000.7898, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case98', async () => {
    const params = { str: '', addressEmail: 'random string', url: 'random string', numFloat: 2000000.7898, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case99', async () => {
    const params = {
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case100', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: -1000.5, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case101', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: -1000.5, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case102', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: -1000.5, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case103', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: -1000.5, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case104', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: -1000.5, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case105', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: -1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case106', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: -1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case107', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: -1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case108', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: -1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case109', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: -1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case110', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: 0, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case111', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: 0, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case112', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: 0, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case113', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: 0, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case114', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: 0, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case115', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: 1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case116', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: 1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case117', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: 1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case118', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: 1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case119', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: 1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case120', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case121', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case122', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case123', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case124', async () => {
    const params = { str: 'random string', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case125', async () => {
    const params = { str: 'random string', addressEmail: '', url: 'random string', numFloat: -1000.5, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case126', async () => {
    const params = { str: 'random string', addressEmail: '', url: 'random string', numFloat: -1000.5, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case127', async () => {
    const params = { str: 'random string', addressEmail: '', url: 'random string', numFloat: -1000.5, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case128', async () => {
    const params = { str: 'random string', addressEmail: '', url: 'random string', numFloat: -1000.5, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case129', async () => {
    const params = {
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case130', async () => {
    const params = { str: 'random string', addressEmail: '', url: 'random string', numFloat: -1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case131', async () => {
    const params = { str: 'random string', addressEmail: '', url: 'random string', numFloat: -1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case132', async () => {
    const params = { str: 'random string', addressEmail: '', url: 'random string', numFloat: -1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case133', async () => {
    const params = { str: 'random string', addressEmail: '', url: 'random string', numFloat: -1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case134', async () => {
    const params = { str: 'random string', addressEmail: '', url: 'random string', numFloat: -1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case135', async () => {
    const params = { str: 'random string', addressEmail: '', url: 'random string', numFloat: 0, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case136', async () => {
    const params = { str: 'random string', addressEmail: '', url: 'random string', numFloat: 0, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case137', async () => {
    const params = { str: 'random string', addressEmail: '', url: 'random string', numFloat: 0, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case138', async () => {
    const params = { str: 'random string', addressEmail: '', url: 'random string', numFloat: 0, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case139', async () => {
    const params = { str: 'random string', addressEmail: '', url: 'random string', numFloat: 0, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case140', async () => {
    const params = { str: 'random string', addressEmail: '', url: 'random string', numFloat: 1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case141', async () => {
    const params = { str: 'random string', addressEmail: '', url: 'random string', numFloat: 1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case142', async () => {
    const params = { str: 'random string', addressEmail: '', url: 'random string', numFloat: 1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case143', async () => {
    const params = { str: 'random string', addressEmail: '', url: 'random string', numFloat: 1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case144', async () => {
    const params = { str: 'random string', addressEmail: '', url: 'random string', numFloat: 1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case145', async () => {
    const params = {
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case146', async () => {
    const params = { str: 'random string', addressEmail: '', url: 'random string', numFloat: 2000000.7898, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case147', async () => {
    const params = { str: 'random string', addressEmail: '', url: 'random string', numFloat: 2000000.7898, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case148', async () => {
    const params = { str: 'random string', addressEmail: '', url: 'random string', numFloat: 2000000.7898, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case149', async () => {
    const params = {
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case150', async () => {
    const params = { str: 'random string', addressEmail: 'random string', url: '', numFloat: -1000.5, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case151', async () => {
    const params = { str: 'random string', addressEmail: 'random string', url: '', numFloat: -1000.5, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case152', async () => {
    const params = { str: 'random string', addressEmail: 'random string', url: '', numFloat: -1000.5, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case153', async () => {
    const params = { str: 'random string', addressEmail: 'random string', url: '', numFloat: -1000.5, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case154', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case155', async () => {
    const params = { str: 'random string', addressEmail: 'random string', url: '', numFloat: -1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case156', async () => {
    const params = { str: 'random string', addressEmail: 'random string', url: '', numFloat: -1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case157', async () => {
    const params = { str: 'random string', addressEmail: 'random string', url: '', numFloat: -1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case158', async () => {
    const params = { str: 'random string', addressEmail: 'random string', url: '', numFloat: -1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case159', async () => {
    const params = { str: 'random string', addressEmail: 'random string', url: '', numFloat: -1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case160', async () => {
    const params = { str: 'random string', addressEmail: 'random string', url: '', numFloat: 0, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case161', async () => {
    const params = { str: 'random string', addressEmail: 'random string', url: '', numFloat: 0, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case162', async () => {
    const params = { str: 'random string', addressEmail: 'random string', url: '', numFloat: 0, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case163', async () => {
    const params = { str: 'random string', addressEmail: 'random string', url: '', numFloat: 0, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case164', async () => {
    const params = { str: 'random string', addressEmail: 'random string', url: '', numFloat: 0, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case165', async () => {
    const params = { str: 'random string', addressEmail: 'random string', url: '', numFloat: 1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case166', async () => {
    const params = { str: 'random string', addressEmail: 'random string', url: '', numFloat: 1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case167', async () => {
    const params = { str: 'random string', addressEmail: 'random string', url: '', numFloat: 1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case168', async () => {
    const params = { str: 'random string', addressEmail: 'random string', url: '', numFloat: 1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case169', async () => {
    const params = { str: 'random string', addressEmail: 'random string', url: '', numFloat: 1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case170', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case171', async () => {
    const params = { str: 'random string', addressEmail: 'random string', url: '', numFloat: 2000000.7898, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case172', async () => {
    const params = { str: 'random string', addressEmail: 'random string', url: '', numFloat: 2000000.7898, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case173', async () => {
    const params = { str: 'random string', addressEmail: 'random string', url: '', numFloat: 2000000.7898, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case174', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case175', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case176', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case177', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case178', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case179', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case180', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case181', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case182', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case183', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case184', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case185', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case186', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case187', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case188', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case189', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case190', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case191', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case192', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case193', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case194', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case195', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case196', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case197', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case198', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case199', async () => {
    const params = {
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case200', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: -1000.5, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case201', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: -1000.5, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case202', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: -1000.5, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case203', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: -1000.5, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case204', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: -1000.5, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case205', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: -1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case206', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: -1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case207', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: -1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case208', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: -1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case209', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: -1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case210', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: 0, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case211', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: 0, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case212', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: 0, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case213', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: 0, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case214', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: 0, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case215', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: 1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case216', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: 1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case217', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: 1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case218', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: 1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case219', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: 1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case220', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case221', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case222', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case223', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case224', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case225', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: -1000.5,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case226', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: 'random string', numFloat: -1000.5, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case227', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: 'random string', numFloat: -1000.5, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case228', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: 'random string', numFloat: -1000.5, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case229', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case230', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: 'random string', numFloat: -1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case231', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: 'random string', numFloat: -1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case232', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: 'random string', numFloat: -1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case233', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: 'random string', numFloat: -1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case234', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: -1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case235', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: 'random string', numFloat: 0, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case236', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: 'random string', numFloat: 0, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case237', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: 'random string', numFloat: 0, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case238', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: 'random string', numFloat: 0, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case239', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: 'random string', numFloat: 0, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case240', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: 'random string', numFloat: 1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case241', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: 'random string', numFloat: 1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case242', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: 'random string', numFloat: 1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case243', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: 'random string', numFloat: 1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case244', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: 'random string', numFloat: 1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case245', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case246', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case247', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: 'random string', numFloat: 2000000.7898, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case248', async () => {
    const params = { optStr: null, str: '', addressEmail: '', url: 'random string', numFloat: 2000000.7898, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case249', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case250', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: -1000.5,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case251', async () => {
    const params = { optStr: null, str: '', addressEmail: 'random string', url: '', numFloat: -1000.5, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case252', async () => {
    const params = { optStr: null, str: '', addressEmail: 'random string', url: '', numFloat: -1000.5, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case253', async () => {
    const params = { optStr: null, str: '', addressEmail: 'random string', url: '', numFloat: -1000.5, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case254', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case255', async () => {
    const params = { optStr: null, str: '', addressEmail: 'random string', url: '', numFloat: -1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case256', async () => {
    const params = { optStr: null, str: '', addressEmail: 'random string', url: '', numFloat: -1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case257', async () => {
    const params = { optStr: null, str: '', addressEmail: 'random string', url: '', numFloat: -1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case258', async () => {
    const params = { optStr: null, str: '', addressEmail: 'random string', url: '', numFloat: -1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case259', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: -1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case260', async () => {
    const params = { optStr: null, str: '', addressEmail: 'random string', url: '', numFloat: 0, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case261', async () => {
    const params = { optStr: null, str: '', addressEmail: 'random string', url: '', numFloat: 0, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case262', async () => {
    const params = { optStr: null, str: '', addressEmail: 'random string', url: '', numFloat: 0, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case263', async () => {
    const params = { optStr: null, str: '', addressEmail: 'random string', url: '', numFloat: 0, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case264', async () => {
    const params = { optStr: null, str: '', addressEmail: 'random string', url: '', numFloat: 0, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case265', async () => {
    const params = { optStr: null, str: '', addressEmail: 'random string', url: '', numFloat: 1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case266', async () => {
    const params = { optStr: null, str: '', addressEmail: 'random string', url: '', numFloat: 1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case267', async () => {
    const params = { optStr: null, str: '', addressEmail: 'random string', url: '', numFloat: 1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case268', async () => {
    const params = { optStr: null, str: '', addressEmail: 'random string', url: '', numFloat: 1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case269', async () => {
    const params = { optStr: null, str: '', addressEmail: 'random string', url: '', numFloat: 1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case270', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case271', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case272', async () => {
    const params = { optStr: null, str: '', addressEmail: 'random string', url: '', numFloat: 2000000.7898, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case273', async () => {
    const params = { optStr: null, str: '', addressEmail: 'random string', url: '', numFloat: 2000000.7898, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case274', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case275', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case276', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case277', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case278', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case279', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case280', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case281', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case282', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case283', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case284', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case285', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case286', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case287', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case288', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case289', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case290', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case291', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case292', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case293', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case294', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case295', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case296', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case297', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case298', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case299', async () => {
    const params = {
      optStr: null,
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case300', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: -1000.5,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case301', async () => {
    const params = { optStr: null, str: 'random string', addressEmail: '', url: '', numFloat: -1000.5, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case302', async () => {
    const params = { optStr: null, str: 'random string', addressEmail: '', url: '', numFloat: -1000.5, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case303', async () => {
    const params = { optStr: null, str: 'random string', addressEmail: '', url: '', numFloat: -1000.5, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case304', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case305', async () => {
    const params = { optStr: null, str: 'random string', addressEmail: '', url: '', numFloat: -1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case306', async () => {
    const params = { optStr: null, str: 'random string', addressEmail: '', url: '', numFloat: -1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case307', async () => {
    const params = { optStr: null, str: 'random string', addressEmail: '', url: '', numFloat: -1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case308', async () => {
    const params = { optStr: null, str: 'random string', addressEmail: '', url: '', numFloat: -1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case309', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: -1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case310', async () => {
    const params = { optStr: null, str: 'random string', addressEmail: '', url: '', numFloat: 0, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case311', async () => {
    const params = { optStr: null, str: 'random string', addressEmail: '', url: '', numFloat: 0, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case312', async () => {
    const params = { optStr: null, str: 'random string', addressEmail: '', url: '', numFloat: 0, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case313', async () => {
    const params = { optStr: null, str: 'random string', addressEmail: '', url: '', numFloat: 0, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case314', async () => {
    const params = { optStr: null, str: 'random string', addressEmail: '', url: '', numFloat: 0, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case315', async () => {
    const params = { optStr: null, str: 'random string', addressEmail: '', url: '', numFloat: 1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case316', async () => {
    const params = { optStr: null, str: 'random string', addressEmail: '', url: '', numFloat: 1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case317', async () => {
    const params = { optStr: null, str: 'random string', addressEmail: '', url: '', numFloat: 1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case318', async () => {
    const params = { optStr: null, str: 'random string', addressEmail: '', url: '', numFloat: 1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case319', async () => {
    const params = { optStr: null, str: 'random string', addressEmail: '', url: '', numFloat: 1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case320', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case321', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: 2000000.7898,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case322', async () => {
    const params = { optStr: null, str: 'random string', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case323', async () => {
    const params = { optStr: null, str: 'random string', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case324', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case325', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1000.5,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case326', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1000.5,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case327', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case328', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case329', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case330', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case331', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case332', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case333', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case334', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case335', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 0,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case336', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 0,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case337', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 0,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case338', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 0,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case339', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 0,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case340', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case341', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case342', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case343', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case344', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case345', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case346', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case347', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case348', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case349', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case350', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1000.5,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case351', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1000.5,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case352', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1000.5,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case353', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1000.5,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case354', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case355', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case356', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case357', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case358', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case359', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case360', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 0,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case361', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 0,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case362', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 0,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case363', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 0,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case364', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 0,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case365', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case366', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case367', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case368', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case369', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case370', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case371', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case372', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case373', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case374', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case375', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case376', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case377', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case378', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case379', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case380', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case381', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case382', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case383', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case384', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case385', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case386', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case387', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case388', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case389', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case390', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case391', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case392', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case393', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case394', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case395', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case396', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case397', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case398', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case399', async () => {
    const params = {
      optStr: null,
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case400', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: -1000.5, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case401', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: -1000.5, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case402', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: -1000.5, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case403', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: -1000.5, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case404', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: -1000.5, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case405', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: -1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case406', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: -1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case407', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: -1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case408', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: -1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case409', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: -1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case410', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: 0, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case411', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: 0, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case412', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: 0, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case413', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: 0, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case414', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: 0, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case415', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: 1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case416', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: 1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case417', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: 1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case418', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: 1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case419', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: 1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case420', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case421', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case422', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case423', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case424', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case425', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: 'random string', numFloat: -1000.5, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case426', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: 'random string', numFloat: -1000.5, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case427', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: 'random string', numFloat: -1000.5, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case428', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: 'random string', numFloat: -1000.5, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case429', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case430', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: 'random string', numFloat: -1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case431', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: 'random string', numFloat: -1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case432', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: 'random string', numFloat: -1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case433', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: 'random string', numFloat: -1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case434', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: 'random string', numFloat: -1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case435', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: 'random string', numFloat: 0, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case436', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: 'random string', numFloat: 0, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case437', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: 'random string', numFloat: 0, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case438', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: 'random string', numFloat: 0, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case439', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: 'random string', numFloat: 0, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case440', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: 'random string', numFloat: 1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case441', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: 'random string', numFloat: 1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case442', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: 'random string', numFloat: 1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case443', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: 'random string', numFloat: 1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case444', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: 'random string', numFloat: 1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case445', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case446', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: 'random string', numFloat: 2000000.7898, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case447', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: 'random string', numFloat: 2000000.7898, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case448', async () => {
    const params = { optStr: '', str: '', addressEmail: '', url: 'random string', numFloat: 2000000.7898, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case449', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case450', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: '', numFloat: -1000.5, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case451', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: '', numFloat: -1000.5, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case452', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: '', numFloat: -1000.5, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case453', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: '', numFloat: -1000.5, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case454', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case455', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: '', numFloat: -1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case456', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: '', numFloat: -1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case457', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: '', numFloat: -1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case458', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: '', numFloat: -1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case459', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: '', numFloat: -1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case460', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: '', numFloat: 0, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case461', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: '', numFloat: 0, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case462', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: '', numFloat: 0, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case463', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: '', numFloat: 0, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case464', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: '', numFloat: 0, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case465', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: '', numFloat: 1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case466', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: '', numFloat: 1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case467', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: '', numFloat: 1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case468', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: '', numFloat: 1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case469', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: '', numFloat: 1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case470', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case471', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: '', numFloat: 2000000.7898, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case472', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: '', numFloat: 2000000.7898, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case473', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: '', numFloat: 2000000.7898, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case474', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case475', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case476', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case477', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case478', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case479', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case480', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case481', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case482', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case483', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case484', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case485', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case486', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case487', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: 'random string', numFloat: 0, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case488', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: 'random string', numFloat: 0, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case489', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case490', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case491', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case492', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: 'random string', numFloat: 1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case493', async () => {
    const params = { optStr: '', str: '', addressEmail: 'random string', url: 'random string', numFloat: 1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case494', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case495', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case496', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case497', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case498', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case499', async () => {
    const params = {
      optStr: '',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case500', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: '', numFloat: -1000.5, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case501', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: '', numFloat: -1000.5, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case502', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: '', numFloat: -1000.5, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case503', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: '', numFloat: -1000.5, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case504', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case505', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: '', numFloat: -1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case506', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: '', numFloat: -1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case507', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: '', numFloat: -1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case508', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: '', numFloat: -1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case509', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: '', numFloat: -1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case510', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: '', numFloat: 0, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case511', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: '', numFloat: 0, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case512', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: '', numFloat: 0, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case513', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: '', numFloat: 0, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case514', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: '', numFloat: 0, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case515', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: '', numFloat: 1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case516', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: '', numFloat: 1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case517', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: '', numFloat: 1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case518', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: '', numFloat: 1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case519', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: '', numFloat: 1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case520', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case521', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case522', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case523', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case524', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case525', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1000.5,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case526', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1000.5,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case527', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case528', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case529', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case530', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case531', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case532', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case533', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case534', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case535', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 0,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case536', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 0,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case537', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: 'random string', numFloat: 0, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case538', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: 'random string', numFloat: 0, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case539', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 0,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case540', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case541', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case542', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: 'random string', numFloat: 1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case543', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: '', url: 'random string', numFloat: 1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case544', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case545', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case546', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case547', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case548', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case549', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case550', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1000.5,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case551', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1000.5,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case552', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1000.5,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case553', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1000.5,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case554', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case555', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case556', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case557', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case558', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case559', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case560', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 0,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case561', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 0,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case562', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: 'random string', url: '', numFloat: 0, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case563', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: 'random string', url: '', numFloat: 0, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case564', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 0,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case565', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case566', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case567', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: 'random string', url: '', numFloat: 1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case568', async () => {
    const params = { optStr: '', str: 'random string', addressEmail: 'random string', url: '', numFloat: 1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case569', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case570', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case571', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case572', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case573', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case574', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case575', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case576', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case577', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case578', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case579', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case580', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case581', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case582', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case583', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case584', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case585', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case586', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case587', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case588', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case589', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case590', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case591', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case592', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case593', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case594', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case595', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case596', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case597', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case598', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case599', async () => {
    const params = {
      optStr: '',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case600', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: '', numFloat: -1000.5, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case601', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: '', numFloat: -1000.5, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case602', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: '', numFloat: -1000.5, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case603', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: '', numFloat: -1000.5, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case604', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: '',
      url: '',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case605', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: '', numFloat: -1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case606', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: '', numFloat: -1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case607', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: '', numFloat: -1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case608', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: '', numFloat: -1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case609', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: '', numFloat: -1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case610', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: '', numFloat: 0, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case611', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: '', numFloat: 0, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case612', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: '', numFloat: 0, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case613', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: '', numFloat: 0, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case614', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: '', numFloat: 0, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case615', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: '', numFloat: 1, numInt: -1000.5 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case616', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: '', numFloat: 1, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case617', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: '', numFloat: 1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case618', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: '', numFloat: 1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case619', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: '', numFloat: 1, numInt: 2000000.7898 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case620', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: '',
      url: '',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case621', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: -1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case622', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case623', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: '', numFloat: 2000000.7898, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case624', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: '',
      url: '',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case625', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: -1000.5,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case626', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: -1000.5,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case627', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case628', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case629', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case630', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: -1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case631', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: -1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case632', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: -1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case633', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: -1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case634', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: -1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case635', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: 0,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case636', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: 0,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case637', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: 'random string', numFloat: 0, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case638', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: 'random string', numFloat: 0, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case639', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: 0,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case640', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: 1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case641', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: 1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case642', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: 'random string', numFloat: 1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case643', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: '', url: 'random string', numFloat: 1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case644', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: 1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case645', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case646', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case647', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case648', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case649', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case650', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: -1000.5,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case651', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: -1000.5,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case652', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: -1000.5,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case653', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: -1000.5,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case654', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case655', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: -1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case656', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: -1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case657', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: -1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case658', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: -1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case659', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: -1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case660', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: 0,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case661', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: 0,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case662', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: 'random string', url: '', numFloat: 0, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case663', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: 'random string', url: '', numFloat: 0, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case664', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: 0,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case665', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: 1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case666', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: 1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case667', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: 'random string', url: '', numFloat: 1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case668', async () => {
    const params = { optStr: 'random string', str: '', addressEmail: 'random string', url: '', numFloat: 1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case669', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: 1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case670', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case671', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case672', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case673', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case674', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case675', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case676', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case677', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case678', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case679', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case680', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case681', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case682', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case683', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case684', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case685', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case686', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case687', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case688', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case689', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case690', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case691', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case692', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case693', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case694', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case695', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case696', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case697', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case698', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case699', async () => {
    const params = {
      optStr: 'random string',
      str: '',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case700', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: -1000.5,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case701', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: -1000.5,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case702', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: -1000.5,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case703', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: -1000.5,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case704', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case705', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: -1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case706', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: -1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case707', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: -1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case708', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: -1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case709', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: -1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case710', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: 0,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case711', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: 0,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case712', async () => {
    const params = { optStr: 'random string', str: 'random string', addressEmail: '', url: '', numFloat: 0, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case713', async () => {
    const params = { optStr: 'random string', str: 'random string', addressEmail: '', url: '', numFloat: 0, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case714', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: 0,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case715', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: 1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case716', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: 1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case717', async () => {
    const params = { optStr: 'random string', str: 'random string', addressEmail: '', url: '', numFloat: 1, numInt: 0 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case718', async () => {
    const params = { optStr: 'random string', str: 'random string', addressEmail: '', url: '', numFloat: 1, numInt: 1 };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case719', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: 1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case720', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case721', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: 2000000.7898,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case722', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: 2000000.7898,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case723', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: 2000000.7898,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case724', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: '',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case725', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1000.5,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case726', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1000.5,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case727', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case728', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case729', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case730', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case731', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case732', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case733', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case734', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: -1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case735', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 0,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case736', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 0,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case737', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 0,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case738', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 0,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case739', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 0,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case740', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case741', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case742', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case743', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case744', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case745', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case746', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case747', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case748', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case749', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: '',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case750', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1000.5,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case751', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1000.5,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case752', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1000.5,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case753', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1000.5,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case754', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case755', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case756', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case757', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case758', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case759', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: -1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case760', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 0,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case761', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 0,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case762', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 0,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case763', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 0,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case764', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 0,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case765', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case766', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case767', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case768', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case769', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case770', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case771', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case772', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case773', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case774', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: '',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case775', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case776', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case777', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case778', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case779', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1000.5,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case780', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case781', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case782', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case783', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case784', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: -1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case785', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case786', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case787', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case788', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case789', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 0,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case790', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case791', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case792', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case793', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case794', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 1,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case795', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1000.5,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case796', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: -1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case797', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 0,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case798', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 1,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });

  it('smoke test: case799', async () => {
    const params = {
      optStr: 'random string',
      str: 'random string',
      addressEmail: 'random string',
      url: 'random string',
      numFloat: 2000000.7898,
      numInt: 2000000.7898,
    };
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo);
    expect(result).toMatchSnapshot();
  });
});
