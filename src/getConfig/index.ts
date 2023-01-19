import * as fs from 'fs';
import { Config, ResolverType } from '../types';
import * as minimist from 'minimist';
import { getFileConfig } from './getFileConfig';
import { configSchema } from './configSchema';

export function getConfig(): Config {
  const args = minimist(process.argv.slice(2));
  const schemaFilePath = args.schemaFilePath;
  const fileConfig = getFileConfig();

  const testType = fileConfig.testType ?? 'spec';

  const schemaSplit = schemaFilePath.split('/schemas/');
  if (schemaSplit?.length !== 2) {
    throw new Error('Invalid schema path. /schemas/ is not unary.');
  }
  if (!schemaSplit[1].endsWith('/schema.graphql')) {
    throw new Error('Invalid schema path. schema is not schema.graphql');
  }

  const baseFilePath = schemaSplit[0];
  const endDirectory = schemaSplit[1].replace(/\/schema.graphql$/, '');
  const schemaIndexFilePath = schemaFilePath.replace(/\/schema.graphql$/, '/index.ts');
  const endPath = `${endDirectory}/index.ts`;
  // This annoys me, but I also want to one-line it.
  const resolverName = endDirectory.split('/')[endDirectory.split('/').length - 1];
  const testEndPath = schemaSplit[1].replace(/\/schema.graphql$/, `/index.${testType}.ts`);
  const resolverType: ResolverType = endPath.startsWith('mutations')
    ? ResolverType.Mutation
    : endPath.startsWith('queries')
    ? ResolverType.Query
    : ResolverType.Unknown;

  const resolverFilePath = `${baseFilePath}/resolvers/${endPath}`;
  const resolverTestFilePath = `${baseFilePath}/resolvers/${testEndPath}`;
  const authorizerFilePath = `${baseFilePath}/authorizers/${endPath}`;

  const exists = fs.existsSync(schemaFilePath);
  if (!exists) {
    throw new Error(`${schemaFilePath} does not exist.`);
  }
  const file = fs.readFileSync(schemaFilePath).toString();
  // TODO (Orange): figure out a better way to do this (or at least add validation on only one export)
  if (!file.toLowerCase().includes(resolverType.toLowerCase())) {
    throw new Error(`Invalid schema file. ${resolverType} is not contained in resolverType directory.`);
  }
  if (!file.includes(resolverName)) {
    throw new Error(`Invalid schema file. ${resolverName} is not contained in schema file.`);
  }

  const config: Config = {
    ...fileConfig,
    baseFilePath,
    resolverFilePath,
    resolverTestFilePath,
    authorizerFilePath,
    resolverType,
    resolverName,
    schemaIndexFilePath,
    schemaFilePath,
  };

  configSchema.validateSync(config);

  return config;
}
