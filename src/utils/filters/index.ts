import { FixtureNode, FixtureNodeVariation, ObjectFixtureNode } from '../../types';

export function Truthy<T>(x: T | null | false | undefined): x is T {
  return Boolean(x);
}

function IsObjectFixtureNode(item: FixtureNode): item is ObjectFixtureNode {
  return item?.variation === FixtureNodeVariation.ObjectFixtureNode;
}

export function IsObjectFixtureNodeOrUndefined(item: FixtureNode | undefined): item is ObjectFixtureNode | undefined {
  return !Defined(item) || IsObjectFixtureNode(item);
}

export function Defined<T = never>(item: T | undefined | null): item is T {
  return NotUndefined(item) && NonNull(item);
}

function NotUndefined<T = never>(item: T | undefined): item is T {
  return item !== undefined;
}

function NonNull<T = never>(item: T | null): item is T {
  return item !== null;
}
