import { InterfaceTypeDefinitionNode, Kind } from 'graphql';

import { FixtureNode, FunctionFixtureNode } from '../../../types';

export function resolveInterfaceTypeDefinition(node: InterfaceTypeDefinitionNode): FunctionFixtureNode | FixtureNode {
  if (node.kind !== Kind.INTERFACE_TYPE_DEFINITION) {
    throw new Error(`Cannot use resolveInterfaceTypeDefinition with type ${node.kind}.`);
  }

  throw new Error('resolveInterfaceTypeDefinition unsupported.');
}
