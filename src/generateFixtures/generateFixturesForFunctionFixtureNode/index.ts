import { buildObjectVariants, filterDefinedIfNotNullable } from '../utils';
import { generateFixtures } from '..';
import { FixtureNode, FixtureNodeVariation, FunctionFixtureNode } from '../../types';

export function generateFixturesForFunctionFixtureNode(
  node: FunctionFixtureNode,
  fixtureNodes: Record<string, FixtureNode>,
  maxFixtures: number,
) {
  if (node.variation !== FixtureNodeVariation.FunctionFixtureNode) {
    throw new Error(`Cannot use generateFixturesForFunctionFixtureNode with type ${node.variation}.`);
  }

  const fieldVariants = {};
  node.inputs.forEach((input) => {
    fieldVariants[input.name] = generateFixtures(input, fixtureNodes, maxFixtures);
  });
  const results = buildObjectVariants(fieldVariants);

  return filterDefinedIfNotNullable(node, results);
}
