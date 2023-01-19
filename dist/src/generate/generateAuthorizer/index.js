'use strict';
exports.__esModule = true;
exports.generateAuthorizer = void 0;
var fs = require('fs');
var appendImports_1 = require('../../utils/appendImports');
function getAuthorizerBody(config) {
  var resolverName = config.resolverName;
  var lowercaseResolverType = config.resolverType.toLowerCase();
  return "import { AuthenticationContextType } from 'graphql-retail/middleware/authenticate/types';\n\n/**\n * Authorizer for "
    .concat(resolverName, ' ')
    .concat(lowercaseResolverType, '\n */\nexport async function ')
    .concat(
      resolverName,
      '(context: AuthenticationContextType) {\n  // DEAR CODE REVIEWER,\n  // IF YOU ARE SEEING THIS, YOU SHOULD NOT ALLOW THIS THROUGH CODE REVIEW.\n  // THIS IS AN AUTO-GENERATED FUNCTION\n  // AND SHOULD BE REPLACED WITH VALID AUTHENTICATION LOGIC.\n};\n'
    );
}
function generateAuthorizer(config) {
  (0, appendImports_1.appendImports)(config.authorizerFilePath, config);
  var resolverBody = getAuthorizerBody(config);
  var fileName = config.authorizerFilePath;
  fs.writeFileSync(fileName, resolverBody);
}
exports.generateAuthorizer = generateAuthorizer;
