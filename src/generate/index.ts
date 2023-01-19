import { runBeforeCommands } from '../commands/runBeforeCommands';
import { runAfterCommands } from '../commands/runAfterCommands';
import { Config } from '../types';
import { appendSchema } from './appendSchema';
import { generateAuthorizer } from './generateAuthorizer';
import { generateResolver } from './generateResolver';
import { generateResolverTestFile } from './generateResolverTestFile';

export async function generate(config: Config) {
  console.log('Starting.');
  console.log('Running before commands.');
  await runBeforeCommands(config);
  console.log('Before commands complete.');
  appendSchema(config);
  console.log(`Exported schema file through ${config.schemaIndexFilePath}`);
  generateAuthorizer(config);
  console.log(`Generated authorizer file in ${config.authorizerFilePath}.`);
  generateResolver(config);
  console.log(`Generated resolver file in ${config.resolverFilePath}.`);
  generateResolverTestFile(config);
  console.log(`Generated resolver test file in ${config.resolverTestFilePath}.`);
  console.log('Running after commands.');
  await runAfterCommands(config);
  console.log('After commands complete.');
  console.log('Finished.');
}
