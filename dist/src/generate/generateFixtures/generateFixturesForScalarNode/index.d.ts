import { FixtureNode, ScalarFixtureNode } from '../../generateFixtures/types';
export declare function generateFixturesForScalarNode(
  node: ScalarFixtureNode,
  fixtureNodes: Record<string, FixtureNode>,
  maxFixtures: number
): any[];
