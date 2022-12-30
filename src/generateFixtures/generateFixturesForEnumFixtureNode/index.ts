import { EnumFixtureNode, FixtureNodeVariation } from '../../types';

export function generateFixturesForEnumFixtureNode(node: EnumFixtureNode): any[] {
  if (node.variation !== FixtureNodeVariation.EnumFixtureNode) {
    throw new Error(`Cannot use generateFixturesForEnumFixtureNode with type ${node.variation}.`);
  }

  return node.keys.map((key) => {
    return `123GeneratedEnumStart-${node.name}.${key}-321GeneratedEnumEnd`;
  });
}
