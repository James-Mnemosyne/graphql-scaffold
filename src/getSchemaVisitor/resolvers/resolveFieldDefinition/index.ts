import { FieldDefinitionNode, Kind } from 'graphql';

import { FixtureNode, FixtureNodeVariation, FunctionFixtureNode } from '../../../types';
import { resolve } from '../index';

export function resolveFieldDefinition(node: FieldDefinitionNode): FunctionFixtureNode | FixtureNode {
  if (node.kind !== Kind.FIELD_DEFINITION) {
    throw new Error(`Cannot use resolveFieldDefinition with type ${node.kind}.`);
  }

  // If the field is not a function.
  // TODO (Orange): verify this.
  if (!node.arguments) {
    return resolve(node.type);
  }

  const name = node.name.value;

  const result: FunctionFixtureNode = {
    variation: FixtureNodeVariation.FunctionFixtureNode,
    name,
    inputs: node.arguments.map((argNode) => resolve(argNode)),
    response: resolve(node.type),
  };

  return result;
}
