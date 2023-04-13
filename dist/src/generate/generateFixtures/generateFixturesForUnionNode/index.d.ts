import { FixtureNode, UnionFixtureNode } from '../../generateFixtures/types';
export declare function generateFixturesForUnionNode(
  node: UnionFixtureNode,
  fixtureNodes: Record<string, FixtureNode>,
  maxFixtures: number
): any[];
