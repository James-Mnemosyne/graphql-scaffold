import { generate } from '../../../src/generate';
import * as fs from 'fs';
import { Config, ResolverType } from '../../../src/types';

const resolverName = 'thing';
const extensionPath = 'queries/base';
const baseFilePath = `testing/results/base/graphql`;

const config: Config = {
  baseFilePath: `${baseFilePath}`,
  resolverFilePath: `${baseFilePath}/resolvers/${extensionPath}/${resolverName}/index.ts`,
  resolverTestFilePath: `${baseFilePath}/resolvers/${extensionPath}/${resolverName}/index.spec.ts`,
  authorizerFilePath: `${baseFilePath}/authorizers/${extensionPath}/${resolverName}/index.ts`,
  resolverType: ResolverType.Query,
  resolverName,
  schemaIndexFilePath: `${baseFilePath}/schemas/${extensionPath}/${resolverName}/index.ts`,
  schemaFilePath: `${baseFilePath}/schemas/${extensionPath}/${resolverName}/schema.graphql`,
};

const schemaFileContents = `type Query {
  thing: Int!
}
`;

describe('Query', () => {
  it('with only basic object', async () => {
    if (fs.existsSync('testing/results/base')) {
      fs.rmdirSync('testing/results/base', { recursive: true });
    }
    fs.mkdirSync('testing/results/base/graphql/schemas/queries/base/thing', { recursive: true });
    fs.writeFileSync('testing/results/base/graphql/schemas/queries/base/thing/schema.graphql', schemaFileContents);

    await generate(config);

    expect(fs.existsSync(config.authorizerFilePath)).toBeTruthy();
    expect(fs.existsSync('testing/results/base/graphql/authorizers/queries/base/index.ts')).toBeTruthy();
    expect(fs.existsSync('testing/results/base/graphql/authorizers/queries/index.ts')).toBeTruthy();
    expect(fs.existsSync('testing/results/base/graphql/authorizers/index.ts')).toBeTruthy();
    expect(fs.existsSync(config.resolverFilePath)).toBeTruthy();
    expect(fs.existsSync(config.resolverTestFilePath)).toBeTruthy();
    expect(fs.existsSync('testing/results/base/graphql/resolvers/queries/base/index.ts')).toBeTruthy();
    expect(fs.existsSync('testing/results/base/graphql/resolvers/queries/index.ts')).toBeTruthy();
    expect(fs.existsSync(config.schemaIndexFilePath)).toBeTruthy();
    expect(fs.existsSync('testing/results/base/graphql/schemas/queries/base/index.ts')).toBeTruthy();
    expect(fs.existsSync('testing/results/base/graphql/schemas/queries/index.ts')).toBeTruthy();
    expect(fs.existsSync('testing/results/base/graphql/schemas/index.ts')).toBeTruthy();

    expect(fs.readFileSync(config.authorizerFilePath).toString()).toMatchSnapshot();
    expect(
      fs.readFileSync('testing/results/base/graphql/authorizers/queries/base/index.ts').toString()
    ).toMatchSnapshot();
    expect(fs.readFileSync('testing/results/base/graphql/authorizers/queries/index.ts').toString()).toMatchSnapshot();
    expect(fs.readFileSync('testing/results/base/graphql/authorizers/index.ts').toString()).toMatchSnapshot();
    expect(fs.readFileSync(config.resolverFilePath).toString()).toMatchSnapshot();
    expect(fs.readFileSync(config.resolverTestFilePath).toString()).toMatchSnapshot();
    expect(
      fs.readFileSync('testing/results/base/graphql/resolvers/queries/base/index.ts').toString()
    ).toMatchSnapshot();
    expect(fs.readFileSync('testing/results/base/graphql/resolvers/queries/index.ts').toString()).toMatchSnapshot();
    expect(fs.readFileSync(config.schemaIndexFilePath).toString()).toMatchSnapshot();
    expect(fs.readFileSync('testing/results/base/graphql/schemas/queries/base/index.ts').toString()).toMatchSnapshot();
    expect(fs.readFileSync('testing/results/base/graphql/schemas/queries/index.ts').toString()).toMatchSnapshot();
    expect(fs.readFileSync('testing/results/base/graphql/schemas/index.ts').toString()).toMatchSnapshot();
  });
});
