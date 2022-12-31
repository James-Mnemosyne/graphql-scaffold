import { InterfaceTypeDefinitionNode, Kind } from 'graphql';
import { resolve } from '..';

import { FixtureNodeVariation, ObjectFixtureNode } from '../../../types';

export function resolveInterfaceTypeDefinition(node: InterfaceTypeDefinitionNode): ObjectFixtureNode {
  if (node.kind !== Kind.INTERFACE_TYPE_DEFINITION) {
    throw new Error(`Cannot use resolveInterfaceTypeDefinition with type ${node.kind}.`);
  }

  const result: ObjectFixtureNode = {
    variation: FixtureNodeVariation.ObjectFixtureNode,
    fields: node.fields.map((field) => resolve(field)),
    name: node.name.value,
  };

  return result;
}
