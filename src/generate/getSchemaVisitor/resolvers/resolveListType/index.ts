import { Kind, ListTypeNode } from 'graphql';

import { FixtureNodeVariation, ListFixtureNode } from '../../../generateFixtures/types';
import { resolve } from '..';

export function resolveListType(node: ListTypeNode): ListFixtureNode {
  if (node.kind !== Kind.LIST_TYPE) {
    throw new Error(`Cannot use resolveListType with type ${node.kind}.`);
  }

  const result: ListFixtureNode = {
    variation: FixtureNodeVariation.ListFixtureNode,
    child: resolve(node.type),
    name: '',
  };

  return result;
}
