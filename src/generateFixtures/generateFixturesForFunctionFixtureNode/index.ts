import { buildObjectVariants, filterDefinedIfNotNullable } from '../utils';
import { generateFixtures } from '..';
import { FixtureNode, FixtureNodeVariation, FunctionFixtureNode } from '../../types';

export function generateFixturesForFunctionFixtureNode(
  node: FunctionFixtureNode,
  fixtureNodes: Record<string, FixtureNode>
) {
  if (node.variation !== FixtureNodeVariation.FunctionFixtureNode) {
    throw new Error(`Cannot use generateFixturesForFunctionFixtureNode with type ${node.variation}.`);
  }

  const fieldVariants = {};
  node.inputs.forEach((input) => {
    fieldVariants[input.name] = generateFixtures(input, fixtureNodes);
  });
  console.log('generateFixturesForFunctionFixtureNode0', fieldVariants);
  const results = buildObjectVariants(fieldVariants);
  console.log('generateFixturesForFunctionFixtureNode1', results.length);
  console.log('generateFixturesForFunctionFixtureNode2', results);

  return filterDefinedIfNotNullable(node, results);
}
