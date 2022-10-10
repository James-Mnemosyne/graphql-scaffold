import { Kind, ObjectTypeDefinitionNode } from 'graphql';

import { FixtureNodeVariation, ObjectFixtureNode } from '../../../types';
import { resolve } from '..';

export function resolveObjectTypeDefinition(node: ObjectTypeDefinitionNode): ObjectFixtureNode {
  if (node.kind !== Kind.OBJECT_TYPE_DEFINITION) {
    throw new Error(`Cannot use resolveObjectTypeDefinition with type ${node.kind}.`);
  }

  const result: ObjectFixtureNode = {
    variation: FixtureNodeVariation.ObjectFixtureNode,
    name: node.name.value,
    fields: node.fields.map((field) => resolve(field)),
  };

  return result;
}
