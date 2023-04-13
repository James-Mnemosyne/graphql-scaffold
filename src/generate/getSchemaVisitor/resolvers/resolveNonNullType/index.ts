import { Kind, NonNullTypeNode } from 'graphql';

import { FixtureNode } from '../../../generateFixtures/types';
import { resolve } from '..';

export function resolveNonNullType(node: NonNullTypeNode): FixtureNode {
  if (node.kind !== Kind.NON_NULL_TYPE) {
    throw new Error(`Cannot use resolveNonNullType with type ${node.kind}.`);
  }

  const result = {
    ...resolve(node.type),
    defined: true,
  };

  return result;
}
