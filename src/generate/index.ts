import { Config } from '../types';
import { appendSchema } from './appendSchema';
import { generateAuthorizer } from './generateAuthorizer';
import { generateResolver } from './generateResolver';
import { generateResolverTestFile } from './generateResolverTestFile';

export function generate(config: Config) {
  console.log('Starting.')
  appendSchema(config);
  console.log('Exported schema file.')
  generateAuthorizer(config);
  console.log(`Generated authorizer file in ${config.authorizerFilePath}.`)
  generateResolver(config);
  console.log(`Generated resolver file in ${config.resolverFilePath}.`)
  generateResolverTestFile(config);
  console.log(`Generated resolver test file in ${config.resolverTestFilePath}.`)
  console.log('Finished.')
}