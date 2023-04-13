import { filterDefinedIfNotNullable } from '../utils';
import { generateFixtures } from '..';
import { FixtureNode, FixtureNodeVariation, UnionFixtureNode } from '../../generateFixtures/types';

export function generateFixturesForUnionNode(
  node: UnionFixtureNode,
  fixtureNodes: Record<string, FixtureNode>,
  maxFixtures: number
) {
  if (node.variation !== FixtureNodeVariation.UnionFixtureNode) {
    throw new Error(`Cannot use generateFixturesForUnionNode with type ${node.variation}.`);
  }

  const elements = node.elements;
  const results = [undefined, null];
  elements.forEach((element) => {
    const elementResults = generateFixtures(element, fixtureNodes, maxFixtures);
    results.push(...elementResults);
  });

  return filterDefinedIfNotNullable(node, results);
}
