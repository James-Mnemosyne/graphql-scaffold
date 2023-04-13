import { FixtureNode, FixtureNodeVariation } from './types';
import { generateFixturesForEnumFixtureNode } from './generateFixturesForEnumFixtureNode';
import { generateFixturesForFunctionFixtureNode } from './generateFixturesForFunctionFixtureNode';
import { generateFixturesForListFixtureNode } from './generateFixturesForListFixtureNode';
import { generateFixturesForObjectFixtureNode } from './generateFixturesForObjectFixtureNode';
import { generateFixturesForScalarNode } from './generateFixturesForScalarNode';
import { generateFixturesForUnionNode } from './generateFixturesForUnionNode';
import { compress } from './utils';

export function generateFixtures(
  node: FixtureNode,
  fixtureNodes: Record<string, FixtureNode>,
  maxFixtures: number
): any[] {
  switch (node.variation) {
    case FixtureNodeVariation.ScalarFixtureNode:
      const scalarResults = generateFixturesForScalarNode(node, fixtureNodes, maxFixtures);
      return compress(scalarResults, maxFixtures);
    case FixtureNodeVariation.UnionFixtureNode:
      const unionResults = generateFixturesForUnionNode(node, fixtureNodes, maxFixtures);
      return compress(unionResults, maxFixtures);
    case FixtureNodeVariation.FunctionFixtureNode:
      const functionResults = generateFixturesForFunctionFixtureNode(node, fixtureNodes, maxFixtures);
      return compress(functionResults, maxFixtures);
    case FixtureNodeVariation.ObjectFixtureNode:
      const objectResults = generateFixturesForObjectFixtureNode(node, fixtureNodes, maxFixtures);
      return compress(objectResults, maxFixtures);
    case FixtureNodeVariation.EnumFixtureNode:
      const enumResults = generateFixturesForEnumFixtureNode(node);
      return compress(enumResults, maxFixtures);
    case FixtureNodeVariation.ListFixtureNode:
      const listResults = generateFixturesForListFixtureNode(node, fixtureNodes, maxFixtures);
      return compress(listResults, maxFixtures);
    default:
      throw new Error(`Unsupported generic fixture type generation for ${node.variation}.`);
  }
}
