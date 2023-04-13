import { ASTNode, Kind, TypeDefinitionNode } from 'graphql';

import { FixtureNode } from '../generateFixtures/types';
import { resolve } from './resolvers';
import { ASTReducer } from 'graphql/language/visitor';

type ResolverFn = ASTReducer<any>[Kind]['leave'];

const typeDefinitionNodes: Set<TypeDefinitionNode['kind']> = new Set<TypeDefinitionNode['kind']>([
  Kind.SCALAR_TYPE_DEFINITION,
  Kind.OBJECT_TYPE_DEFINITION,
  Kind.INTERFACE_TYPE_DEFINITION,
  Kind.ENUM_TYPE_DEFINITION,
  Kind.UNION_TYPE_DEFINITION,
  Kind.INPUT_OBJECT_TYPE_DEFINITION,
]);

export function getNewResolve(result: Record<string, FixtureNode>) {
  const newResolve: ResolverFn = (node: ASTNode) => {
    if (typeDefinitionNodes.has(node.kind as TypeDefinitionNode['kind'])) {
      const typedNode = node as TypeDefinitionNode;
      result[typedNode.name.value] = resolve(node);
    }
    return node;
  };

  return newResolve;
}
