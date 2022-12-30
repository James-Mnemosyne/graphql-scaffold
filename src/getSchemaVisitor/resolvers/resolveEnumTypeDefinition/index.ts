import { EnumTypeDefinitionNode, EnumValueDefinitionNode, Kind } from 'graphql';

import { EnumFixtureNode, FixtureNodeVariation } from '../../../types';

function resolveEnumValueDefinition(node: EnumValueDefinitionNode): string {
  if (node.kind !== Kind.ENUM_VALUE_DEFINITION) {
    throw new Error(`Cannot use resolveEnumValueDefinition with type ${node.kind}.`);
  }

  return node.name.value;
}

export function resolveEnumTypeDefinition(node: EnumTypeDefinitionNode): EnumFixtureNode {
  if (node.kind !== Kind.ENUM_TYPE_DEFINITION) {
    throw new Error(`Cannot use resolveEnumTypeDefinition with type ${node.kind}.`);
  }

  const result: EnumFixtureNode = {
    variation: FixtureNodeVariation.EnumFixtureNode,
    name: node.name.value,
    keys: node.values.map((node) => resolveEnumValueDefinition(node)),
  }

  return result;
}
