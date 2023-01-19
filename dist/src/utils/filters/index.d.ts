import { FixtureNode, ObjectFixtureNode } from '../../types';
export declare function Truthy<T>(x: T | null | false | undefined): x is T;
export declare function IsObjectFixtureNodeOrUndefined(
  item: FixtureNode | undefined
): item is ObjectFixtureNode | undefined;
export declare function Defined<T = never>(item: T | undefined | null): item is T;
