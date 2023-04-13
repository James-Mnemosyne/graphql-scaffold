import { FixtureNode, ObjectFixtureNode } from '../../generateFixtures/types';
export declare function generateFixturesForObjectFixtureNode(
  node: ObjectFixtureNode,
  fixtureNodes: Record<string, FixtureNode>,
  maxFixtures: number
): Record<string, any[]>[];
