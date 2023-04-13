import { buildListVariants, filterDefinedIfNotNullable } from '../utils';
import { generateFixtures } from '..';
import { FixtureNode, FixtureNodeVariation, ListFixtureNode } from '../../generateFixtures/types';

export function generateFixturesForListFixtureNode(
  node: ListFixtureNode,
  fixtureNodes: Record<string, FixtureNode>,
  maxFixtures: number
): Record<string, any[]>[] {
  if (node.variation !== FixtureNodeVariation.ListFixtureNode) {
    throw new Error(`Cannot use generateFixturesForListFixtureNode with type ${node.variation}.`);
  }

  console.log('generateFixturesForListFixtureNode', node);

  const entryVariants = generateFixtures(node.child, fixtureNodes, maxFixtures);
  const results = buildListVariants(entryVariants);
  return filterDefinedIfNotNullable(node, results);
}
