import { runBeforeCommands } from '../commands/runBeforeCommands';
import { runAfterCommands } from '../commands/runAfterCommands';
import { Config } from '../types';
import { generateAuthorizer } from './generateAuthorizer';
import { generateResolver } from './generateResolver';
import { generateResolverTestFile } from './generateResolverTestFile';
import { generateE2ETestFile } from './generateE2ETestFile';
import { generateFixture } from './generateTypes';

export async function generate(config: Config) {
  console.log('Starting.');
  console.log('Running before commands.');
  await runBeforeCommands(config);
  console.log('Before commands complete.');
  generateAuthorizer(config);
  console.log(`Generated authorizer file in ${config.authorizerFilePath}.`);
  generateResolver(config);
  console.log(`Generated resolver file in ${config.resolverFilePath}.`);
  const fixture = await generateFixture(config);
  console.log(`Generated fixture for tests.`);
  generateResolverTestFile(config, fixture);
  console.log(`Generated resolver test file in ${config.resolverTestFilePath}.`);
  generateE2ETestFile(config, fixture);
  console.log(`Generated e2e test file in ${config.resolverE2ETestFilePath}.`);
  console.log('Running after commands.');
  await runAfterCommands(config);
  console.log('After commands complete.');
  console.log('Finished.');
}
