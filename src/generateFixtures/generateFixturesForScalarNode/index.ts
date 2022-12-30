import { filterDefinedIfNotNullable } from '../utils';
import { generateFixtures } from '..';
import { FixtureNode, FixtureNodeVariation, ScalarFixtureNode } from '../../types';

export function generateFixturesForScalarNode(
  node: ScalarFixtureNode,
  fixtureNodes: Record<string, FixtureNode>,
  maxFixtures: number
) {
  if (node.variation !== FixtureNodeVariation.ScalarFixtureNode) {
    throw new Error(`Cannot use generateFixturesForScalarNode with type ${node.variation}.`);
  }

  const lowercaseScalarName = node.scalarName.toLowerCase();
  const lowercaseName = node.name.toLowerCase();
  const results = [undefined, null];
  switch (lowercaseScalarName) {
    case 'string':
      results.push(...['', 'random string']);
      if (lowercaseName.includes('email')) {
        results.push(...['james@bob.edu']);
      }
      if (lowercaseName.includes('url')) {
        results.push(...['http://www.google.com']);
      }
      if (lowercaseName.includes('image') || lowercaseName.includes('picture') || lowercaseName.includes('photo')) {
        results.push(...['http://www.google.com/thing.png']);
      }
      if (lowercaseName.includes('video')) {
        results.push(...['http://www.google.com/thing.mp4']);
      }
      return filterDefinedIfNotNullable(node, results);
    case 'number':
      results.push(...[-1000.5, -1, 0, 1, 2005970.7898]);
      return filterDefinedIfNotNullable(node, results);
    case 'float':
      results.push(...[-1000.5, 0, 2000345.7898]);
      return filterDefinedIfNotNullable(node, results);
    case 'integer':
    case 'int':
      results.push(...[-1000, 0, 1, 2004560]);
      return filterDefinedIfNotNullable(node, results);
    case 'boolean':
      results.push(...[false, true]);
      return filterDefinedIfNotNullable(node, results);
  }

  const scalarName = node.scalarName;

  if (fixtureNodes[scalarName]) {
    return filterDefinedIfNotNullable(node, generateFixtures(fixtureNodes[scalarName], fixtureNodes, maxFixtures));
  }

  throw new Error(`Unable to find existing fixutre node for scalar type ${scalarName}`);
}
