import { InputObjectTypeDefinitionNode, Kind } from 'graphql';

import { FixtureNodeVariation, ObjectFixtureNode } from '../../../types';
import { resolve } from '..';

export function resolveInputObjectTypeDefinition(node: InputObjectTypeDefinitionNode): ObjectFixtureNode {
  if (node.kind !== Kind.INPUT_OBJECT_TYPE_DEFINITION) {
    throw new Error(`Cannot use resolveInputObjectTypeDefinition with type ${node.kind}.`);
  }

  const result: ObjectFixtureNode = {
    variation: FixtureNodeVariation.ObjectFixtureNode,
    fields: node.fields.map((field) => resolve(field)),
    name: node.name.value,
  };

  return result;
}
