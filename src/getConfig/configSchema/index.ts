import * as yup from 'yup';

const error = `An error was found while parsing the schema:`;

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

export const configSchema = yup
  .object({
    beforeCommands: yup.array().of(yup.string()),
    afterCommands: yup.array().of(yup.string()),
    baseFilePath: getRequiredString('baseFilePath'),
    resolverFilePath: getRequiredString('resolverFilePath'),
    resolverTestFilePath: getRequiredString('resolverTestFilePath'),
    authorizerFilePath: getRequiredString('authorizerFilePath'),
    resolverType: getRequiredString('resolverType'),
    schemaIndexFilePath: getRequiredString('schemaIndexFilePath'),
    schemaFilePath: getRequiredString('schemaFilePath'),
    testType: getRequiredString('testType'),
  })
  .defined()
  .required();
