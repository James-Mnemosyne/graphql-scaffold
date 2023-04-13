import { generate } from '../../../src/generate';
import * as fs from 'fs';
import { Config, ResolverType } from '../../../src/types';

const resolverName = 'thing';
const extensionPath = 'queries/withInputs';
const baseFilePath = `testing/results/withInputs/graphql`;

const config: Config = {
  beforeCommands: ['echo "in beforeCommands0"', 'echo "in beforeCommands1"'],
  afterCommands: ['echo "in afterCommands0"', 'echo "in afterCommands1"'],
  baseFilePath: `${baseFilePath}`,
  resolverFilePath: `${baseFilePath}/resolvers/${extensionPath}/${resolverName}/index.ts`,
  resolverTestFilePath: `${baseFilePath}/resolvers/${extensionPath}/${resolverName}/index.spec.ts`,
  resolverE2ETestFilePath: `${baseFilePath}/e2eTests/${extensionPath}/${resolverName}/index.spec.ts`,
  authorizerFilePath: `${baseFilePath}/authorizers/${extensionPath}/${resolverName}/index.ts`,
  resolverType: ResolverType.Query,
  resolverName,
  schemaFilePath: `${baseFilePath}/schemas/${extensionPath}/${resolverName}/schema.graphql`,
  testType: 'spec',
};

const schemaFileContents = `type Query {
  thing(floatInput: Float!, stringInput: String!, optionalBooleanInput: Boolean!): Int!
}
`;

describe('Query', () => {
  it('with only basic object', async () => {
    if (fs.existsSync('testing/results/withInputs')) {
      fs.rmdirSync('testing/results/withInputs', { recursive: true });
    }
    fs.mkdirSync('testing/results/withInputs/graphql/schemas/queries/withInputs/thing', { recursive: true });
    fs.writeFileSync(
      'testing/results/withInputs/graphql/schemas/queries/withInputs/thing/schema.graphql',
      schemaFileContents
    );

    await generate(config);

    expect(fs.existsSync(config.authorizerFilePath)).toBeTruthy();
    expect(fs.existsSync('testing/results/withInputs/graphql/authorizers/queries/withInputs/index.ts')).toBeTruthy();
    expect(fs.existsSync('testing/results/withInputs/graphql/authorizers/queries/index.ts')).toBeTruthy();
    expect(fs.existsSync('testing/results/withInputs/graphql/authorizers/index.ts')).toBeTruthy();
    expect(fs.existsSync(config.resolverFilePath)).toBeTruthy();
    expect(fs.existsSync(config.resolverTestFilePath)).toBeTruthy();
    expect(fs.existsSync('testing/results/withInputs/graphql/resolvers/queries/withInputs/index.ts')).toBeTruthy();
    expect(fs.existsSync('testing/results/withInputs/graphql/resolvers/queries/index.ts')).toBeTruthy();

    expect(fs.readFileSync(config.authorizerFilePath).toString()).toMatchSnapshot();
    expect(
      fs.readFileSync('testing/results/withInputs/graphql/authorizers/queries/withInputs/index.ts').toString()
    ).toMatchSnapshot();
    expect(
      fs.readFileSync('testing/results/withInputs/graphql/authorizers/queries/index.ts').toString()
    ).toMatchSnapshot();
    expect(fs.readFileSync('testing/results/withInputs/graphql/authorizers/index.ts').toString()).toMatchSnapshot();
    expect(fs.readFileSync(config.resolverFilePath).toString()).toMatchSnapshot();
    expect(fs.readFileSync(config.resolverTestFilePath).toString()).toMatchSnapshot();
    expect(
      fs.readFileSync('testing/results/withInputs/graphql/resolvers/queries/withInputs/index.ts').toString()
    ).toMatchSnapshot();
    expect(
      fs.readFileSync('testing/results/withInputs/graphql/resolvers/queries/index.ts').toString()
    ).toMatchSnapshot();
  });
});
