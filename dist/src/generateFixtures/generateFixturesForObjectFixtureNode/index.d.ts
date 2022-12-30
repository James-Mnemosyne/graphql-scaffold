import { FixtureNode, ObjectFixtureNode } from '../../types';
export declare function generateFixturesForObjectFixtureNode(
  node: ObjectFixtureNode,
  fixtureNodes: Record<string, FixtureNode>,
  maxFixtures: number
): Record<string, any[]>[];
