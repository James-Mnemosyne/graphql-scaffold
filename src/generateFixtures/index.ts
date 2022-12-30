import { FixtureNode, FixtureNodeVariation } from '../types';
import { generateFixturesForEnumFixtureNode } from './generateFixturesForEnumFixtureNode';
import { generateFixturesForFunctionFixtureNode } from './generateFixturesForFunctionFixtureNode';
import { generateFixturesForObjectFixtureNode } from './generateFixturesForObjectFixtureNode';
import { generateFixturesForScalarNode } from './generateFixturesForScalarNode';

function compress(fixtures: any[], maxFixtures: number): any[] {
  if (fixtures.length <= maxFixtures) {
    return fixtures;
  }

  const results: any[] = [];
  for (let index = 0; index < fixtures.length; index += (fixtures.length / (maxFixtures - 1))) {
    const newValue = fixtures[Math.floor(index)];
    results.push(newValue);
  }
  return results;
}

export function generateFixtures(node: FixtureNode, fixtureNodes: Record<string, FixtureNode>, maxFixtures: number): any[] {
  switch (node.variation) {
    case FixtureNodeVariation.ScalarFixtureNode:
      const scalarResults = generateFixturesForScalarNode(node, fixtureNodes, maxFixtures);
      return compress(scalarResults, maxFixtures);
    case FixtureNodeVariation.FunctionFixtureNode:
      const functionResults = generateFixturesForFunctionFixtureNode(node, fixtureNodes, maxFixtures);
      return compress(functionResults, maxFixtures);
    case FixtureNodeVariation.ObjectFixtureNode:
      const objectResults = generateFixturesForObjectFixtureNode(node, fixtureNodes, maxFixtures);
      return compress(objectResults, maxFixtures);
    case FixtureNodeVariation.EnumFixtureNode:
      const enumResults = generateFixturesForEnumFixtureNode(node);
      return compress(enumResults, maxFixtures);
    default:
      throw new Error(`Unsupported generic fixture type generation for ${node.variation}.`);
  }
}
