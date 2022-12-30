import { buildObjectVariants, filterDefinedIfNotNullable } from '../utils';
import { generateFixtures } from '..';
import { FixtureNode, FixtureNodeVariation, ObjectFixtureNode } from '../../types';

export function generateFixturesForObjectFixtureNode(
  node: ObjectFixtureNode,
  fixtureNodes: Record<string, FixtureNode>,
  maxFixtures: number,
): Record<string, any[]>[] {
  if (node.variation !== FixtureNodeVariation.ObjectFixtureNode) {
    throw new Error(`Cannot use generateFixturesForObjectFixtureNode with type ${node.variation}.`);
  }

  const fieldVariants = {};
  node.fields.forEach((field) => {
    fieldVariants[field.name] = generateFixtures(field, fixtureNodes, maxFixtures);
  });
  const results = buildObjectVariants(fieldVariants);
  return filterDefinedIfNotNullable(node, results);
}
