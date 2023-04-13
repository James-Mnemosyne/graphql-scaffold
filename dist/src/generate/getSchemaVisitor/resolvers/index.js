'use strict';
exports.__esModule = true;
exports.resolve = void 0;
var graphql_1 = require('graphql');
var resolveFieldDefinition_1 = require('./resolveFieldDefinition');
var resolveScalarTypeDefinition_1 = require('./resolveScalarTypeDefinition');
var resolveObjectTypeDefinition_1 = require('./resolveObjectTypeDefinition');
var resolveInterfaceTypeDefinition_1 = require('./resolveInterfaceTypeDefinition');
var resolveUnionTypeDefinition_1 = require('./resolveUnionTypeDefinition');
var resolveEnumTypeDefinition_1 = require('./resolveEnumTypeDefinition');
var resolveInputObjectTypeDefinition_1 = require('./resolveInputObjectTypeDefinition');
var resolveNamedType_1 = require('./resolveNamedType');
var resolveNonNullType_1 = require('./resolveNonNullType');
var resolveListType_1 = require('./resolveListType');
var resolveName_1 = require('./resolveName');
var resolveOperationTypeDefinition_1 = require('./resolveOperationTypeDefinition');
var resolveInputValueDefinition_1 = require('./resolveInputValueDefinition');
function resolve(node) {
  switch (node.kind) {
    case graphql_1.Kind.FIELD_DEFINITION:
      return (0, resolveFieldDefinition_1.resolveFieldDefinition)(node);
    case graphql_1.Kind.OBJECT_TYPE_DEFINITION:
      return (0, resolveObjectTypeDefinition_1.resolveObjectTypeDefinition)(node);
    case graphql_1.Kind.INTERFACE_TYPE_DEFINITION:
      return (0, resolveInterfaceTypeDefinition_1.resolveInterfaceTypeDefinition)(node);
    case graphql_1.Kind.UNION_TYPE_DEFINITION:
      return (0, resolveUnionTypeDefinition_1.resolveUnionTypeDefinition)(node);
    case graphql_1.Kind.ENUM_TYPE_DEFINITION:
      return (0, resolveEnumTypeDefinition_1.resolveEnumTypeDefinition)(node);
    case graphql_1.Kind.INPUT_OBJECT_TYPE_DEFINITION:
      return (0, resolveInputObjectTypeDefinition_1.resolveInputObjectTypeDefinition)(node);
    case graphql_1.Kind.INPUT_VALUE_DEFINITION:
      return (0, resolveInputValueDefinition_1.resolveInputValueDefinition)(node);
    case graphql_1.Kind.NON_NULL_TYPE:
      return (0, resolveNonNullType_1.resolveNonNullType)(node);
    case graphql_1.Kind.LIST_TYPE:
      return (0, resolveListType_1.resolveListType)(node);
    case graphql_1.Kind.OPERATION_TYPE_DEFINITION:
      return (0, resolveOperationTypeDefinition_1.resolveOperationTypeDefinition)(node);
    // Terminating
    case graphql_1.Kind.SCALAR_TYPE_DEFINITION:
      return (0, resolveScalarTypeDefinition_1.resolveScalarTypeDefinition)(node);
    case graphql_1.Kind.NAMED_TYPE:
      return (0, resolveNamedType_1.resolveNamedType)(node);
    case graphql_1.Kind.NAME:
      return (0, resolveName_1.resolveName)(node);
    default:
      throw new Error('Generic unsupported '.concat(node.kind, '.'));
  }
}
exports.resolve = resolve;
