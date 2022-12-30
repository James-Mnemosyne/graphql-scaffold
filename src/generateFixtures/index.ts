import { FixtureNode, FixtureNodeVariation } from '../types';
import { generateFixturesForEnumFixtureNode } from './generateFixturesForEnumFixtureNode';
import { generateFixturesForFunctionFixtureNode } from './generateFixturesForFunctionFixtureNode';
import { generateFixturesForObjectFixtureNode } from './generateFixturesForObjectFixtureNode';
import { generateFixturesForScalarNode } from './generateFixturesForScalarNode';

export function generateFixtures(node: FixtureNode, fixtureNodes: Record<string, FixtureNode>): any[] {
  console.log('generateFixtures', JSON.stringify(node, null, 2));
  switch (node.variation) {
    case FixtureNodeVariation.ScalarFixtureNode:
      return generateFixturesForScalarNode(node, fixtureNodes);
    case FixtureNodeVariation.FunctionFixtureNode:
      return generateFixturesForFunctionFixtureNode(node, fixtureNodes);
    case FixtureNodeVariation.ObjectFixtureNode:
      return generateFixturesForObjectFixtureNode(node, fixtureNodes);
    case FixtureNodeVariation.EnumFixtureNode:
      return generateFixturesForEnumFixtureNode(node);
    default:
      throw new Error(`Unsupported generic fixture type generation for ${node.variation}.`);
  }
}
