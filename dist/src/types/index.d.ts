export declare enum ResolverType {
  Query = 'Query',
  Mutation = 'Mutation',
  Field = 'Field',
  Unknown = 'Unknown',
}
export interface FileConfig {
  beforeCommands: string[];
  afterCommands: string[];
  testType: string;
}
export declare type Config = FileConfig & {
  baseFilePath: string;
  resolverFilePath: string;
  resolverTestFilePath: string;
  authorizerFilePath: string;
  resolverType: string;
  resolverName: string;
  schemaIndexFilePath: string;
  schemaFilePath: string;
};
export declare enum FixtureNodeVariation {
  BaseFixtureNode = 'BaseFixtureNode',
  EnumFixtureNode = 'EnumFixtureNode',
  ListFixtureNode = 'ListFixtureNode',
  FunctionFixtureNode = 'FunctionFixtureNode',
  NonNullNode = 'NonNullNode',
  ObjectFixtureNode = 'ObjectFixtureNode',
  RootFixtureNode = 'RootFixtureNode',
  ScalarFixtureNode = 'ScalarFixtureNode',
  UnionFixtureNode = 'UnionFixtureNode',
  UnknownFixtureNode = 'UnknownFixtureNode',
}
declare type FixtureAttributes = {
  name: string;
  defined?: boolean;
};
export declare type BaseFixtureNode = FixtureAttributes & {
  variation: FixtureNodeVariation.BaseFixtureNode;
  fieldVariations: any;
  resolved: boolean;
};
export declare type ScalarFixtureNode = FixtureAttributes & {
  variation: FixtureNodeVariation.ScalarFixtureNode;
  scalarName: string;
};
export declare type ListFixtureNode = FixtureAttributes & {
  variation: FixtureNodeVariation.ListFixtureNode;
  child: FixtureNode;
};
export declare type ObjectFixtureNode = FixtureAttributes & {
  variation: FixtureNodeVariation.ObjectFixtureNode;
  fields: FixtureNode[];
};
export declare type EnumFixtureNode = FixtureAttributes & {
  variation: FixtureNodeVariation.EnumFixtureNode;
  keys: string[];
};
export declare type UnionFixtureNode = FixtureAttributes & {
  variation: FixtureNodeVariation.UnionFixtureNode;
  elements: FixtureNode[];
};
export declare type FunctionFixtureNode = FixtureAttributes & {
  variation: FixtureNodeVariation.FunctionFixtureNode;
  inputs: FixtureNode[];
  response: FixtureNode;
};
export declare type RootFixtureNode = FixtureAttributes & {
  variation: FixtureNodeVariation.RootFixtureNode;
  self: FixtureNode;
};
export declare type UnknownFixtureNode = FixtureAttributes & {
  variation: FixtureNodeVariation.UnknownFixtureNode;
  location: string;
};
export declare type FixtureNode =
  | BaseFixtureNode
  | EnumFixtureNode
  | ListFixtureNode
  | ObjectFixtureNode
  | ScalarFixtureNode
  | UnionFixtureNode
  | FunctionFixtureNode
  | UnknownFixtureNode;
export {};
