import { Kind, OperationTypeDefinitionNode } from 'graphql';

import { FixtureNodeVariation, UnknownFixtureNode } from '../../../types';

export function resolveOperationTypeDefinition(node: OperationTypeDefinitionNode): UnknownFixtureNode {
  if (node.kind !== Kind.OPERATION_TYPE_DEFINITION) {
    throw new Error(`Cannot use resolveOperationTypeDefinition with type ${node.kind}.`);
  }

  if (node.type.kind === Kind.NAMED_TYPE) {
    const result: UnknownFixtureNode = {
      variation: FixtureNodeVariation.UnknownFixtureNode,
      name: node.type.name.value,
      location: 'resolveOperationTypeDefinition',
    };
    return result;
  }

  const result: UnknownFixtureNode = {
    variation: FixtureNodeVariation.UnknownFixtureNode,
    name: 'unknown',
    location: 'resolveOperationTypeDefinition',
  };

  return result;
}
