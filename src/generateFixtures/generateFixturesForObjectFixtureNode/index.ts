import { buildObjectVariants, filterDefinedIfNotNullable } from '../utils';
import { generateFixtures } from '..';
import { FixtureNode, FixtureNodeVariation, ObjectFixtureNode } from '../../types';

export function generateFixturesForObjectFixtureNode(
  node: ObjectFixtureNode,
  fixtureNodes: Record<string, FixtureNode>
): Record<string, any[]>[] {
  if (node.variation !== FixtureNodeVariation.ObjectFixtureNode) {
    throw new Error(`Cannot use generateFixturesForObjectFixtureNode with type ${node.variation}.`);
  }

  const fieldVariants = {};
  node.fields.forEach((field) => {
    fieldVariants[field.name] = generateFixtures(field, fixtureNodes);
  });
  console.log('generateFixturesForObjectFixtureNode0', fieldVariants);
  const results = buildObjectVariants(fieldVariants);
  console.log('generateFixturesForObjectFixtureNode1', results);
  return filterDefinedIfNotNullable(node, results);
}
