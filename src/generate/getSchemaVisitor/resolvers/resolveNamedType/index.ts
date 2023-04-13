import { Kind, NamedTypeNode } from 'graphql';

import { FixtureNodeVariation, ScalarFixtureNode } from '../../../generateFixtures/types';

export function resolveNamedType(node: NamedTypeNode): ScalarFixtureNode {
  if (node.kind !== Kind.NAMED_TYPE) {
    throw new Error(`Cannot use resolveNamedType with type ${node.kind}.`);
  }

  const name = node.name.value;
  const result: ScalarFixtureNode = {
    variation: FixtureNodeVariation.ScalarFixtureNode,
    name: '',
    scalarName: name,
  };

  return result;
}
