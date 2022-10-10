import { filterDefinedIfNotNullable } from '../utils';
import { generateFixtures } from '..';
import { FixtureNode, FixtureNodeVariation, ScalarFixtureNode } from '../../types';

export function generateFixturesForScalarNode(node: ScalarFixtureNode, fixtureNodes: Record<string, FixtureNode>) {
  if (node.variation !== FixtureNodeVariation.ScalarFixtureNode) {
    throw new Error(`Cannot use generateFixturesForScalarNode with type ${node.variation}.`);
  }

  const lowercaseName = node.scalarName.toLowerCase();
  const results = [undefined, null];
  switch (lowercaseName) {
    case 'string':
      results.push(...['', 'random string']);
      if (lowercaseName.includes('email')) {
        results.push(...['james@bob.edu']);
      }
      if (
        lowercaseName.includes('url') ||
        lowercaseName.includes('image') ||
        lowercaseName.includes('picture') ||
        lowercaseName.includes('photo') ||
        lowercaseName.includes('video')
      ) {
        results.push(
          ...['http://www.google.com', 'http://www.google.com/thing.png', 'http://www.google.com/thing.mp4']
        );
      }
      return filterDefinedIfNotNullable(node, results);
    case 'number':
    case 'float':
    case 'integer':
    case 'int':
      results.push(...[-1000.5, -1, 0, 1, 2000000.7898]);
      return filterDefinedIfNotNullable(node, results);
    case 'boolean':
      results.push(...[false, true]);
      return filterDefinedIfNotNullable(node, results);
  }

  const name = node.name;

  if (fixtureNodes[name]) {
    return filterDefinedIfNotNullable(node, generateFixtures(fixtureNodes[name], fixtureNodes));
  }

  throw new Error(`Unable to find existing fixutre node for scalar type ${name}`);
}
