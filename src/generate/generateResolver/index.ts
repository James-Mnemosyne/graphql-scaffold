import * as fs from 'fs';
import { appendImports } from '../../utils/appendImports';
import { Config, ResolverType } from '../../types';

function getResolverTypeName(resolverType: ResolverType) {
  return resolverType === ResolverType.Mutation ? 'Mutations' : resolverType === ResolverType.Query ? 'Queries' : '';
}

function getResolverBody(config) {
  const resolverName = config.resolverName;
  const lowercaseResolverType = config.resolverType.toLowerCase();
  const resolverTypeName = getResolverTypeName(config.resolverType);

  return `import { ${resolverTypeName} } from 'graphql-retail/types';

/**
 * ${resolverName} ${lowercaseResolverType}
 */
export const ${resolverName}: ${resolverTypeName}['${resolverName}'] = async function (
  _parent,
  input,
  _context
) {
  // TODO implement
  console.log('input', input);
  throw new Error('Unsupported ${lowercaseResolverType} ${resolverName}.')
};
`;
}

export function generateResolver(config: Config): void {
  appendImports(config.resolverFilePath, config);

  const resolverBody = getResolverBody(config);
  const fileName = config.resolverFilePath;
  fs.writeFileSync(fileName, resolverBody);
}
