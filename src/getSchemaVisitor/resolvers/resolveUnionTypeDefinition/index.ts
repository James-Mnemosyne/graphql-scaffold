import { Kind, UnionTypeDefinitionNode } from 'graphql';

import { FixtureNodeVariation, UnionFixtureNode } from '../../../types';
import { resolve } from '..';

export function resolveUnionTypeDefinition(node: UnionTypeDefinitionNode): UnionFixtureNode {
  if (node.kind !== Kind.UNION_TYPE_DEFINITION) {
    throw new Error(`Cannot use resolveUnionTypeDefinition with type ${node.kind}.`);
  }

  const result: UnionFixtureNode = {
    variation: FixtureNodeVariation.UnionFixtureNode,
    name: node.name.value,
    elements: node.types?.map(resolve) ?? [],
  };

  return result;
}
