import * as fs from 'fs';
import { appendImports } from '../../utils/appendImports';
import { Config } from '../../types';

function getAuthorizerBody(config) {
  const resolverName = config.resolverName;
  const lowercaseResolverType = config.resolverType.toLowerCase();

  return `import { AuthenticationContextType } from 'src/graphql-retail/middleware/authenticate/types';

/**
 * Authorizer for ${resolverName} ${lowercaseResolverType}
 */
export async function ${resolverName}(context: AuthenticationContextType) {
  // DEAR CODE REVIEWER,
  // IF YOU ARE SEEING THIS, YOU SHOULD NOT ALLOW THIS THROUGH CODE REVIEW.
  // THIS IS AN AUTO-GENERATED FUNCTION
  // AND SHOULD BE REPLACED WITH VALID AUTHENTICATION LOGIC.
};
`;
}

export function generateAuthorizer(config: Config): void {
  appendImports(config.authorizerFilePath, config);

  const resolverBody = getAuthorizerBody(config);
  const fileName = config.authorizerFilePath;
  fs.writeFileSync(fileName, resolverBody);
}
