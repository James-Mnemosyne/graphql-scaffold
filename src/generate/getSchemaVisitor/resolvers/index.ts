import { ASTNode, Kind } from 'graphql';

import { resolveFieldDefinition } from './resolveFieldDefinition';
import { resolveScalarTypeDefinition } from './resolveScalarTypeDefinition';
import { resolveObjectTypeDefinition } from './resolveObjectTypeDefinition';
import { resolveInterfaceTypeDefinition } from './resolveInterfaceTypeDefinition';
import { resolveUnionTypeDefinition } from './resolveUnionTypeDefinition';
import { resolveEnumTypeDefinition } from './resolveEnumTypeDefinition';
import { resolveInputObjectTypeDefinition } from './resolveInputObjectTypeDefinition';
import { resolveNamedType } from './resolveNamedType';
import { resolveNonNullType } from './resolveNonNullType';
import { resolveListType } from './resolveListType';
import { resolveName } from './resolveName';
import { FixtureNode } from 'types';
import { resolveOperationTypeDefinition } from './resolveOperationTypeDefinition';
import { resolveInputValueDefinition } from './resolveInputValueDefinition';

export function resolve(node: ASTNode): FixtureNode {
  switch (node.kind) {
    case Kind.FIELD_DEFINITION:
      return resolveFieldDefinition(node);
    case Kind.OBJECT_TYPE_DEFINITION:
      return resolveObjectTypeDefinition(node);
    case Kind.INTERFACE_TYPE_DEFINITION:
      return resolveInterfaceTypeDefinition(node);
    case Kind.UNION_TYPE_DEFINITION:
      return resolveUnionTypeDefinition(node);
    case Kind.ENUM_TYPE_DEFINITION:
      return resolveEnumTypeDefinition(node);
    case Kind.INPUT_OBJECT_TYPE_DEFINITION:
      return resolveInputObjectTypeDefinition(node);
    case Kind.INPUT_VALUE_DEFINITION:
      return resolveInputValueDefinition(node);
    case Kind.NON_NULL_TYPE:
      return resolveNonNullType(node);
    case Kind.LIST_TYPE:
      return resolveListType(node);
    case Kind.OPERATION_TYPE_DEFINITION:
      return resolveOperationTypeDefinition(node);

    // Terminating
    case Kind.SCALAR_TYPE_DEFINITION:
      return resolveScalarTypeDefinition(node);
    case Kind.NAMED_TYPE:
      return resolveNamedType(node);
    case Kind.NAME:
      return resolveName(node);
    default:
      throw new Error(`Generic unsupported ${node.kind}.`);
  }
}
