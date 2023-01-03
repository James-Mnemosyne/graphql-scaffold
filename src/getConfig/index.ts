import * as fs from 'fs';
import { Config } from '../types';
import * as yup from 'yup';
import * as minimist from 'minimist';

const error = `
This package requires the existence of a .gqlTestGenerator.json file (or file specified via --config flag), to specify it's purpose.

This file should be in JSON format, with the following type:
{
  schemaFilePath: string; // The path to all schemas for the project.
  resolverFilePath: string; // The path to the resolver function.
  resolverName: string; // The name of the resolver function.
  typeFilePath?: string; // The path to the types file that should be accessed for enums or related typings.
  maxFixtures?: number; // The maximum number of fixtures/tests that should be generated. Default is 100.
}`;

function getError(extension: string) {
  return (
    error +
    `

${extension}.
`
  );
}

function getRequiredString(name: string) {
  return yup
    .string()
    .min(1, getError(`${name} must be at least 1 character.`))
    .defined(getError(`${name} is not defined.`))
    .required(getError(`${name} is required.`));
}

const configSchema = yup
  .object({
    resolverName: getRequiredString('resolverName'),
    schemaFilePath: getRequiredString('schemaFilePath'),
    resolverFilePath: getRequiredString('resolverFilePath'),
    typeFilePath: yup.string().min(1).optional(),
    maxFixtures: yup.number().optional(),
  })
  .defined()
  .required();

export function getConfig(): Config {
  const args = minimist(process.argv.slice(2));
  const configFilePath = args.config ?? '.gqlTestGenerator.json';
  const exists = fs.existsSync(configFilePath);
  if (!exists) {
    throw new Error(error);
  }
  // This seems to be expected, but for the life of me, I cannot figure out why.
  const file = fs.readFileSync(configFilePath) as unknown as string;
  const config = JSON.parse(file) as Config;
  configSchema.validateSync(config);
  return config;
}
