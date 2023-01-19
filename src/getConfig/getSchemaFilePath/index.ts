import * as glob from 'glob';

function getGreaterThanOneError(globString: string, results: string[]) {
  return `Multiple results returned matching ${globString}.
Are you sure that you should have multiple resolvers with the same name?
Results:
${JSON.stringify(results, null, 2)}`;
}

export function getSchemaFilePath(baseFilePath: string, resolverName: string): string {
  const globString = `${baseFilePath}/**/${resolverName}/schema.graphql`;
  const results = glob.sync(globString, { sync: true });
  if (results.length < 1) {
    throw new Error(`No results returned matching ${globString}.`);
  }
  if (results.length > 1) {
    throw new Error(getGreaterThanOneError(globString, results));
  }
  return results[0];
}
