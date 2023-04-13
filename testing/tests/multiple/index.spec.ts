import { generate } from '../../../src/generate';
import * as fs from 'fs';
import { Config, ResolverType } from '../../../src/types';

const resolverName0 = 'thing0';
const resolverName1 = 'thing1';
const extensionPath = 'queries/multiple';
const baseFilePath = `testing/results/multiple/graphql`;

const config0: Config = {
  beforeCommands: [],
  afterCommands: [],
  baseFilePath: `${baseFilePath}`,
  resolverFilePath: `${baseFilePath}/resolvers/${extensionPath}/${resolverName0}/index.ts`,
  resolverTestFilePath: `${baseFilePath}/resolvers/${extensionPath}/${resolverName0}/index.spec.ts`,
  resolverE2ETestFilePath: `${baseFilePath}/e2eTests/${extensionPath}/${resolverName0}/index.spec.ts`,
  authorizerFilePath: `${baseFilePath}/authorizers/${extensionPath}/${resolverName0}/index.ts`,
  resolverType: ResolverType.Query,
  resolverName: resolverName0,
  schemaFilePath: `${baseFilePath}/schemas/${extensionPath}/${resolverName0}/schema.graphql`,
  testType: 'spec',
};

const config1: Config = {
  beforeCommands: [],
  afterCommands: [],
  baseFilePath: `${baseFilePath}`,
  resolverFilePath: `${baseFilePath}/resolvers/${extensionPath}/${resolverName1}/index.ts`,
  resolverTestFilePath: `${baseFilePath}/resolvers/${extensionPath}/${resolverName1}/index.spec.ts`,
  resolverE2ETestFilePath: `${baseFilePath}/e2eTests/${extensionPath}/${resolverName1}/index.spec.ts`,
  authorizerFilePath: `${baseFilePath}/authorizers/${extensionPath}/${resolverName1}/index.ts`,
  resolverType: ResolverType.Query,
  resolverName: resolverName1,
  schemaFilePath: `${baseFilePath}/schemas/${extensionPath}/${resolverName1}/schema.graphql`,
  testType: 'spec',
};

const schemaFileContents0 = `type Query {
  thing0: Int!
}
`;
const schemaFileContents1 = `type Query {
  thing1: Int!
}
`;

describe('Query', () => {
  it('with only basic object', async () => {
    if (fs.existsSync('testing/results/multiple')) {
      fs.rmdirSync('testing/results/multiple', { recursive: true });
    }
    fs.mkdirSync(`testing/results/multiple/graphql/schemas/queries/multiple/${resolverName0}`, { recursive: true });
    fs.writeFileSync(
      `testing/results/multiple/graphql/schemas/queries/multiple/${resolverName0}/schema.graphql`,
      schemaFileContents0
    );
    fs.mkdirSync(`testing/results/multiple/graphql/schemas/queries/multiple/${resolverName1}`, { recursive: true });
    fs.writeFileSync(
      `testing/results/multiple/graphql/schemas/queries/multiple/${resolverName1}/schema.graphql`,
      schemaFileContents1
    );

    await generate(config0);
    await generate(config1);

    expect(fs.existsSync(config0.authorizerFilePath)).toBeTruthy();
    expect(fs.existsSync(config1.authorizerFilePath)).toBeTruthy();
    expect(fs.existsSync('testing/results/multiple/graphql/authorizers/queries/multiple/index.ts')).toBeTruthy();
    expect(fs.existsSync('testing/results/multiple/graphql/authorizers/queries/index.ts')).toBeTruthy();
    expect(fs.existsSync('testing/results/multiple/graphql/authorizers/index.ts')).toBeTruthy();
    expect(fs.existsSync(config0.resolverFilePath)).toBeTruthy();
    expect(fs.existsSync(config1.resolverFilePath)).toBeTruthy();
    expect(fs.existsSync(config0.resolverTestFilePath)).toBeTruthy();
    expect(fs.existsSync(config1.resolverTestFilePath)).toBeTruthy();
    expect(fs.existsSync('testing/results/multiple/graphql/resolvers/queries/multiple/index.ts')).toBeTruthy();
    expect(fs.existsSync('testing/results/multiple/graphql/resolvers/queries/index.ts')).toBeTruthy();

    expect(fs.readFileSync(config0.authorizerFilePath).toString()).toMatchSnapshot();
    expect(fs.readFileSync(config1.authorizerFilePath).toString()).toMatchSnapshot();
    expect(
      fs.readFileSync('testing/results/multiple/graphql/authorizers/queries/multiple/index.ts').toString()
    ).toMatchSnapshot();
    expect(
      fs.readFileSync('testing/results/multiple/graphql/authorizers/queries/index.ts').toString()
    ).toMatchSnapshot();
    expect(fs.readFileSync('testing/results/multiple/graphql/authorizers/index.ts').toString()).toMatchSnapshot();
    expect(fs.readFileSync(config0.resolverFilePath).toString()).toMatchSnapshot();
    expect(fs.readFileSync(config1.resolverFilePath).toString()).toMatchSnapshot();
    expect(fs.readFileSync(config0.resolverTestFilePath).toString()).toMatchSnapshot();
    expect(fs.readFileSync(config1.resolverTestFilePath).toString()).toMatchSnapshot();
    expect(
      fs.readFileSync('testing/results/multiple/graphql/resolvers/queries/multiple/index.ts').toString()
    ).toMatchSnapshot();
    expect(fs.readFileSync('testing/results/multiple/graphql/resolvers/queries/index.ts').toString()).toMatchSnapshot();
  });
});
