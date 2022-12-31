'use strict';
exports.__esModule = true;
exports.getTests = void 0;
function getTest(fixture, index, config) {
  return "  it('case"
    .concat(index, "', async () => {\n    const params = ")
    .concat(JSON.stringify(fixture), ';\n    const result = await ')
    .concat(
      config.resolverName,
      '({}, params, undefined, mockGraphQLResolveInfo)\n    expect(result).toMatchSnapshot();\n  });'
    )
    .split('"123GeneratedEnumStart-')
    .join('')
    .split('-321GeneratedEnumEnd"')
    .join('');
}
var enumRegex = /123GeneratedEnumStart-[a-zA-Z0-9]*\.[a-zA-Z0-9]*-321GeneratedEnumEnd/g;
function getEnums(fixtures) {
  var _a, _b;
  var json = JSON.stringify(fixtures);
  var matches =
    (_b =
      (_a = json.match(enumRegex)) === null || _a === void 0
        ? void 0
        : _a.map(function (match) {
            return match.split('123GeneratedEnumStart-').join('').split('-321GeneratedEnumEnd').join('').split('.')[0];
          })) !== null && _b !== void 0
      ? _b
      : [];
  return Array.from(new Set(matches));
}
// TODO (Orange): update to host mockGraphQLResolveInfo in other file/do something else.
function getTests(fixtures, config) {
  var enums = getEnums(fixtures);
  var enumImports = (enums === null || enums === void 0 ? void 0 : enums.length)
    ? 'import { '.concat(enums.join(', '), " } from '").concat(config.typeFilePath, "';\n")
    : '';
  return (
    "\nimport { GraphQLResolveInfo } from 'graphql';\nimport { "
      .concat(config.resolverName, " } from '")
      .concat(config.resolverFilePath, "';\n")
      .concat(
        enumImports,
        "\n\n// We never actually use the info object.\nexport const mockGraphQLResolveInfo = {\n  fieldName: '',\n  fieldNodes: [],\n  returnType: undefined,\n  parentType: undefined,\n  path: undefined,\n  schema: undefined,\n  fragments: undefined,\n  rootValue: undefined,\n  operation: undefined,\n  variableValues: {},\n  cacheControl: undefined,\n} as unknown as GraphQLResolveInfo;\n\ndescribe('"
      )
      .concat(
        config.resolverName,
        " smoke tests', () => {\n  beforeAll(() => {\n    // Do something here.\n  });\n\n  beforeEach(() => {\n    // Do something here.\n  });\n\n"
      ) +
    fixtures
      .map(function (fixture, index) {
        return getTest(fixture, index, config);
      })
      .join('\n\n') +
    '\n});\n'
  );
}
exports.getTests = getTests;
