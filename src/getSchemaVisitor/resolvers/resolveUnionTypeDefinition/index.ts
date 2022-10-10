import { Kind, UnionTypeDefinitionNode } from 'graphql';

import { FixtureNode, FunctionFixtureNode } from '../../../types';

export function resolveUnionTypeDefinition(node: UnionTypeDefinitionNode): FunctionFixtureNode | FixtureNode {
  if (node.kind !== Kind.UNION_TYPE_DEFINITION) {
    throw new Error(`Cannot use resolveUnionTypeDefinition with type ${node.kind}.`);
  }

  throw new Error('resolveUnionTypeDefinition unsupported.');
}
