import { Kind, NameNode } from 'graphql';

import { FixtureNodeVariation, UnknownFixtureNode } from '../../../types';

export function resolveName(node: NameNode): UnknownFixtureNode {
  if (node.kind !== Kind.NAME) {
    throw new Error(`Cannot use resolveName with type ${node.kind}.`);
  }

  const name = node.value;

  return {
    variation: FixtureNodeVariation.UnknownFixtureNode,
    name,
    location: 'resolveName',
  };
}
