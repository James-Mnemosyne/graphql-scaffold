import * as graphql from 'graphql';
import { loadSchema } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

import * as fs from 'fs';
import { FixtureNode, Config } from '../types';
import { getNewResolve } from '../getSchemaVisitor';
import { generateFixtures } from '../generateFixtures';
import { IsObjectFixtureNodeOrUndefined } from '../utils/filters';
import { getTests } from '../getTests';
import { getDocumentNodeFromSchema, memoize1 } from '@graphql-tools/utils';
import { GraphQLSchema } from 'graphql';

const getCachedDocumentNodeFromSchema = memoize1(getDocumentNodeFromSchema);

function getFileName(config: Config) {
  const initialFileNameSegments = config.resolverFilePath.split('/');
  const fileName = initialFileNameSegments.pop();
  const fileNameSegments = fileName.split('.');
  const extension = fileNameSegments.pop();
  const newFileName = [...fileNameSegments, 'spec', extension].join('.');
  const newPath = [...initialFileNameSegments, newFileName].join('/');
  return newPath;
}

export async function generateTypes(config: Config): Promise<string> {
  const schema: GraphQLSchema = await loadSchema(config.schemaFilePath, { loaders: [new GraphQLFileLoader()] });
  const ast = getCachedDocumentNodeFromSchema(schema);
  const fixtureNodes: Record<string, FixtureNode> = {};
  const newResolve = getNewResolve(fixtureNodes);

  graphql.visit(ast, { leave: newResolve });

  const queryNode = fixtureNodes?.Query;
  const mutationNode = fixtureNodes?.Mutation;
  if (!IsObjectFixtureNodeOrUndefined(queryNode)) {
    throw new Error('Query is not object or undefined.');
  }
  if (!IsObjectFixtureNodeOrUndefined(mutationNode)) {
    throw new Error('Mutation is not object or undefined.');
  }
  const baseNode =
    queryNode?.fields?.find((field) => field.name === config.resolverName) ??
    mutationNode?.fields?.find((field) => field.name === config.resolverName);
  const fixtures = generateFixtures(baseNode, fixtureNodes, config.maxFixtures ?? 100);

  const result = getTests(fixtures, config);
  console.log(result);

  const fileName = getFileName(config);
  fs.writeFileSync(fileName, result);

  return result;
}
