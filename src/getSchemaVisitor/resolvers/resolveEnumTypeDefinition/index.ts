import { EnumTypeDefinitionNode, Kind } from 'graphql';

import { FixtureNode, FunctionFixtureNode } from '../../../types';

export function resolveEnumTypeDefinition(node: EnumTypeDefinitionNode): FunctionFixtureNode | FixtureNode {
  if (node.kind !== Kind.ENUM_TYPE_DEFINITION) {
    throw new Error(`Cannot use resolveEnumTypeDefinition with type ${node.kind}.`);
  }

  throw new Error('resolveEnumTypeDefinition unsupported.');
}
