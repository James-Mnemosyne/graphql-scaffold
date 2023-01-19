import * as fs from 'fs';
import { appendImports } from '../../utils/appendImports';
import { Config } from '../../types';

function getSchemaIndexFileBody(config) {
  const resolverName = config.resolverName;

  return `import ${resolverName} from './schema.graphql';

export { ${resolverName} };
`;
}

function addSchemaIndexFile(config: Config) {
  const fileBody = getSchemaIndexFileBody(config);
  fs.writeFileSync(config.schemaIndexFilePath, fileBody);
}

export function appendSchema(config: Config): void {
  appendImports(config.schemaFilePath, config);
  addSchemaIndexFile(config);
}
