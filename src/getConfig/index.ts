import * as fs from 'fs';
import { Config } from '../types';
import * as yup from 'yup';

const error = `
This package requires the existence of a .gqlTestGenerator.json file, to specify it's purpose.

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
  const exists = fs.existsSync('.gqlTestGenerator.json');
  if (!exists) {
    throw new Error(error);
  }
  // This seems to be expected, but for the life of me, I cannot figure out why.
  const file = fs.readFileSync('.gqlTestGenerator.json') as unknown as string;
  const config = JSON.parse(file) as Config;
  configSchema.validateSync(config);
  return config;
}
