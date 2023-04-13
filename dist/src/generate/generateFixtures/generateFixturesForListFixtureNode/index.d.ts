import { FixtureNode, ListFixtureNode } from '../../generateFixtures/types';
export declare function generateFixturesForListFixtureNode(
  node: ListFixtureNode,
  fixtureNodes: Record<string, FixtureNode>,
  maxFixtures: number
): Record<string, any[]>[];
