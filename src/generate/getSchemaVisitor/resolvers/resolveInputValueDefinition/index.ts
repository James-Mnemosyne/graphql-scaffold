import { InputValueDefinitionNode, Kind } from 'graphql';

import { FixtureNode } from '../../../generateFixtures/types';
import { resolve } from '..';

export function resolveInputValueDefinition(node: InputValueDefinitionNode): FixtureNode {
  if (node.kind !== Kind.INPUT_VALUE_DEFINITION) {
    throw new Error(`Cannot use resolveInputValueDefinition with type ${node.kind}.`);
  }

  const result = {
    ...resolve(node.type),
    name: node.name.value,
  };

  return result;
}
