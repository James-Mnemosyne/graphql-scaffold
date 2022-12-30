
import { GraphQLResolveInfo } from 'graphql';
import { getSomething } from './testing/results/comprehensive/index.ts'; // TODO: resolverPath

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
    const params = {"input0":{"value0":SomethingEnum.Something0,"value4Email":""},"input1":{"value0":SomethingEnum.Something0,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case1', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value3":0,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something0,"value3":0,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case2', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value2":null,"value3":-1000.5,"value4Email":""},"input1":{"value0":SomethingEnum.Something0,"value2":null,"value3":-1000.5,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case3', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value2":-1000,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something0,"value2":-1000,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case4', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value2":-1000,"value3":2000345.7898,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something0,"value2":-1000,"value3":2000345.7898,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case5', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value2":0,"value3":0,"value4Email":""},"input1":{"value0":SomethingEnum.Something0,"value2":0,"value3":0,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case6', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value2":1,"value3":null,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something0,"value2":1,"value3":null,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case7', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value2":2004560,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something0,"value2":2004560,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case8', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value2":2004560,"value3":2000345.7898,"value4Email":""},"input1":{"value0":SomethingEnum.Something0,"value2":2004560,"value3":2000345.7898,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case9', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value1":null,"value3":-1000.5,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something0,"value1":null,"value3":-1000.5,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case10', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value1":null,"value2":null,"value3":null,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something0,"value1":null,"value2":null,"value3":null,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case11', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value1":null,"value2":null,"value3":2000345.7898,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something0,"value1":null,"value2":null,"value3":2000345.7898,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case12', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value1":null,"value2":-1000,"value3":0,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something0,"value1":null,"value2":-1000,"value3":0,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case13', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value1":null,"value2":0,"value3":-1000.5,"value4Email":""},"input1":{"value0":SomethingEnum.Something0,"value1":null,"value2":0,"value3":-1000.5,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case14', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value1":null,"value2":1,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something0,"value1":null,"value2":1,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case15', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value1":null,"value2":1,"value3":2000345.7898,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something0,"value1":null,"value2":1,"value3":2000345.7898,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case16', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value1":null,"value2":2004560,"value3":0,"value4Email":""},"input1":{"value0":SomethingEnum.Something0,"value1":null,"value2":2004560,"value3":0,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case17', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value1":"","value3":null,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something0,"value1":"","value3":null,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case18', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value1":"","value2":null,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something0,"value1":"","value2":null,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case19', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value1":"","value2":null,"value3":2000345.7898,"value4Email":""},"input1":{"value0":SomethingEnum.Something0,"value1":"","value2":null,"value3":2000345.7898,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case20', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value1":"","value2":-1000,"value3":-1000.5,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something0,"value1":"","value2":-1000,"value3":-1000.5,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case21', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value1":"","value2":0,"value3":null,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something0,"value1":"","value2":0,"value3":null,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case22', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value1":"","value2":0,"value3":2000345.7898,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something0,"value1":"","value2":0,"value3":2000345.7898,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case23', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value1":"","value2":1,"value3":0,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something0,"value1":"","value2":1,"value3":0,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case24', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value1":"","value2":2004560,"value3":-1000.5,"value4Email":""},"input1":{"value0":SomethingEnum.Something0,"value1":"","value2":2004560,"value3":-1000.5,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case25', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value1":"random string","value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something0,"value1":"random string","value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case26', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value1":"random string","value3":2000345.7898,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something0,"value1":"random string","value3":2000345.7898,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case27', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value1":"random string","value2":null,"value3":0,"value4Email":""},"input1":{"value0":SomethingEnum.Something0,"value1":"random string","value2":null,"value3":0,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case28', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value1":"random string","value2":-1000,"value3":null,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something0,"value1":"random string","value2":-1000,"value3":null,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case29', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value1":"random string","value2":0,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something0,"value1":"random string","value2":0,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case30', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value1":"random string","value2":0,"value3":2000345.7898,"value4Email":""},"input1":{"value0":SomethingEnum.Something0,"value1":"random string","value2":0,"value3":2000345.7898,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case31', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value1":"random string","value2":1,"value3":-1000.5,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something0,"value1":"random string","value2":1,"value3":-1000.5,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case32', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value1":"random string","value2":2004560,"value3":null,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something0,"value1":"random string","value2":2004560,"value3":null,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case33', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value4Email":""},"input1":{"value0":SomethingEnum.Something1,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case34', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value3":0,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something1,"value3":0,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case35', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value2":null,"value3":-1000.5,"value4Email":""},"input1":{"value0":SomethingEnum.Something1,"value2":null,"value3":-1000.5,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case36', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value2":-1000,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something1,"value2":-1000,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case37', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value2":-1000,"value3":2000345.7898,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something1,"value2":-1000,"value3":2000345.7898,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case38', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value2":0,"value3":0,"value4Email":""},"input1":{"value0":SomethingEnum.Something1,"value2":0,"value3":0,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case39', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value2":1,"value3":null,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something1,"value2":1,"value3":null,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case40', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value2":2004560,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something1,"value2":2004560,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case41', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value2":2004560,"value3":2000345.7898,"value4Email":""},"input1":{"value0":SomethingEnum.Something1,"value2":2004560,"value3":2000345.7898,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case42', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value1":null,"value3":-1000.5,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something1,"value1":null,"value3":-1000.5,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case43', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value1":null,"value2":null,"value3":null,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something1,"value1":null,"value2":null,"value3":null,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case44', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value1":null,"value2":-1000,"value4Email":""},"input1":{"value0":SomethingEnum.Something1,"value1":null,"value2":-1000,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case45', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value1":null,"value2":-1000,"value3":0,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something1,"value1":null,"value2":-1000,"value3":0,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case46', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value1":null,"value2":0,"value3":-1000.5,"value4Email":""},"input1":{"value0":SomethingEnum.Something1,"value1":null,"value2":0,"value3":-1000.5,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case47', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value1":null,"value2":1,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something1,"value1":null,"value2":1,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case48', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value1":null,"value2":1,"value3":2000345.7898,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something1,"value1":null,"value2":1,"value3":2000345.7898,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case49', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value1":null,"value2":2004560,"value3":0,"value4Email":""},"input1":{"value0":SomethingEnum.Something1,"value1":null,"value2":2004560,"value3":0,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case50', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value1":"","value3":null,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something1,"value1":"","value3":null,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case51', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value1":"","value2":null,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something1,"value1":"","value2":null,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case52', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value1":"","value2":null,"value3":2000345.7898,"value4Email":""},"input1":{"value0":SomethingEnum.Something1,"value1":"","value2":null,"value3":2000345.7898,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case53', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value1":"","value2":-1000,"value3":-1000.5,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something1,"value1":"","value2":-1000,"value3":-1000.5,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case54', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value1":"","value2":0,"value3":null,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something1,"value1":"","value2":0,"value3":null,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case55', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value1":"","value2":1,"value4Email":""},"input1":{"value0":SomethingEnum.Something1,"value1":"","value2":1,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case56', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value1":"","value2":1,"value3":0,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something1,"value1":"","value2":1,"value3":0,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case57', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value1":"","value2":2004560,"value3":-1000.5,"value4Email":""},"input1":{"value0":SomethingEnum.Something1,"value1":"","value2":2004560,"value3":-1000.5,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case58', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value1":"random string","value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something1,"value1":"random string","value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case59', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value1":"random string","value3":2000345.7898,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something1,"value1":"random string","value3":2000345.7898,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case60', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value1":"random string","value2":null,"value3":0,"value4Email":""},"input1":{"value0":SomethingEnum.Something1,"value1":"random string","value2":null,"value3":0,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case61', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value1":"random string","value2":-1000,"value3":null,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something1,"value1":"random string","value2":-1000,"value3":null,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case62', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value1":"random string","value2":0,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something1,"value1":"random string","value2":0,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case63', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value1":"random string","value2":0,"value3":2000345.7898,"value4Email":""},"input1":{"value0":SomethingEnum.Something1,"value1":"random string","value2":0,"value3":2000345.7898,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case64', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value1":"random string","value2":1,"value3":-1000.5,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something1,"value1":"random string","value2":1,"value3":-1000.5,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case65', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something1,"value1":"random string","value2":2004560,"value3":null,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something1,"value1":"random string","value2":2004560,"value3":null,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case66', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value4Email":""},"input1":{"value0":SomethingEnum.Something2,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case67', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value3":0,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something2,"value3":0,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case68', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value2":null,"value3":-1000.5,"value4Email":""},"input1":{"value0":SomethingEnum.Something2,"value2":null,"value3":-1000.5,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case69', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value2":-1000,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something2,"value2":-1000,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case70', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value2":-1000,"value3":2000345.7898,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something2,"value2":-1000,"value3":2000345.7898,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case71', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value2":0,"value3":0,"value4Email":""},"input1":{"value0":SomethingEnum.Something2,"value2":0,"value3":0,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case72', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value2":1,"value3":null,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something2,"value2":1,"value3":null,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case73', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value2":2004560,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something2,"value2":2004560,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case74', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value2":2004560,"value3":2000345.7898,"value4Email":""},"input1":{"value0":SomethingEnum.Something2,"value2":2004560,"value3":2000345.7898,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case75', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":null,"value3":-1000.5,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something2,"value1":null,"value3":-1000.5,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case76', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":null,"value2":null,"value3":null,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something2,"value1":null,"value2":null,"value3":null,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case77', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":null,"value2":null,"value3":2000345.7898,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something2,"value1":null,"value2":null,"value3":2000345.7898,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case78', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":null,"value2":-1000,"value3":0,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something2,"value1":null,"value2":-1000,"value3":0,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case79', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":null,"value2":0,"value3":-1000.5,"value4Email":""},"input1":{"value0":SomethingEnum.Something2,"value1":null,"value2":0,"value3":-1000.5,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case80', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":null,"value2":1,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something2,"value1":null,"value2":1,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case81', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":null,"value2":1,"value3":2000345.7898,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something2,"value1":null,"value2":1,"value3":2000345.7898,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case82', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":null,"value2":2004560,"value3":0,"value4Email":""},"input1":{"value0":SomethingEnum.Something2,"value1":null,"value2":2004560,"value3":0,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case83', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":"","value3":null,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something2,"value1":"","value3":null,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case84', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":"","value2":null,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something2,"value1":"","value2":null,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case85', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":"","value2":null,"value3":2000345.7898,"value4Email":""},"input1":{"value0":SomethingEnum.Something2,"value1":"","value2":null,"value3":2000345.7898,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case86', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":"","value2":-1000,"value3":-1000.5,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something2,"value1":"","value2":-1000,"value3":-1000.5,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case87', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":"","value2":0,"value3":null,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something2,"value1":"","value2":0,"value3":null,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case88', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":"","value2":0,"value3":2000345.7898,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something2,"value1":"","value2":0,"value3":2000345.7898,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case89', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":"","value2":1,"value3":0,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something2,"value1":"","value2":1,"value3":0,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case90', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":"","value2":2004560,"value3":-1000.5,"value4Email":""},"input1":{"value0":SomethingEnum.Something2,"value1":"","value2":2004560,"value3":-1000.5,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case91', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":"random string","value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something2,"value1":"random string","value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case92', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":"random string","value3":2000345.7898,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something2,"value1":"random string","value3":2000345.7898,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case93', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":"random string","value2":null,"value3":0,"value4Email":""},"input1":{"value0":SomethingEnum.Something2,"value1":"random string","value2":null,"value3":0,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case94', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":"random string","value2":-1000,"value3":null,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something2,"value1":"random string","value2":-1000,"value3":null,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case95', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":"random string","value2":0,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something2,"value1":"random string","value2":0,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case96', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":"random string","value2":0,"value3":2000345.7898,"value4Email":""},"input1":{"value0":SomethingEnum.Something2,"value1":"random string","value2":0,"value3":2000345.7898,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case97', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":"random string","value2":1,"value3":-1000.5,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something2,"value1":"random string","value2":1,"value3":-1000.5,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case98', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":"random string","value2":2004560,"value3":null,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something2,"value1":"random string","value2":2004560,"value3":null,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case99', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something2,"value1":"random string","value2":2004560,"value3":2000345.7898,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something2,"value1":"random string","value2":2004560,"value3":2000345.7898,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  

});
