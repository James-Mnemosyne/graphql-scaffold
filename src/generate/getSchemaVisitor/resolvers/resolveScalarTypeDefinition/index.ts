import { Kind, ScalarTypeDefinitionNode } from 'graphql';

import { FixtureNode, FixtureNodeVariation, ScalarFixtureNode } from '../../../generateFixtures/types';

export function resolveScalarTypeDefinition(node: ScalarTypeDefinitionNode): ScalarFixtureNode | FixtureNode {
  if (node.kind !== Kind.SCALAR_TYPE_DEFINITION) {
    throw new Error(`Cannot use resolveScalarTypeDefinition with type ${node.kind}.`);
  }

  const name = node.name.value;
  const result: ScalarFixtureNode = {
    variation: FixtureNodeVariation.ScalarFixtureNode,
    name: '',
    scalarName: name,
  };

  return result;
}
