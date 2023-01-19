export enum ResolverType {
  Query = 'Query',
  Mutation = 'Mutation',
  Field = 'Field',
  Unknown = 'Unknown',
}

export interface Config {
  baseFilePath: string;
  resolverFilePath: string;
  resolverTestFilePath: string;
  authorizerFilePath: string;
  resolverType: string;
  resolverName: string;
  schemaIndexFilePath: string;
  schemaFilePath: string;
}

export enum FixtureNodeVariation {
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

type FixtureAttributes = {
  name: string;
  defined?: boolean;
};

export type BaseFixtureNode = FixtureAttributes & {
  variation: FixtureNodeVariation.BaseFixtureNode;
  fieldVariations: any;
  resolved: boolean;
};

export type ScalarFixtureNode = FixtureAttributes & {
  variation: FixtureNodeVariation.ScalarFixtureNode;
  scalarName: string;
};

export type ListFixtureNode = FixtureAttributes & {
  variation: FixtureNodeVariation.ListFixtureNode;
  child: FixtureNode;
};

export type ObjectFixtureNode = FixtureAttributes & {
  variation: FixtureNodeVariation.ObjectFixtureNode;
  fields: FixtureNode[];
};

export type EnumFixtureNode = FixtureAttributes & {
  variation: FixtureNodeVariation.EnumFixtureNode;
  keys: string[];
};

export type UnionFixtureNode = FixtureAttributes & {
  variation: FixtureNodeVariation.UnionFixtureNode;
  elements: FixtureNode[];
};

export type FunctionFixtureNode = FixtureAttributes & {
  variation: FixtureNodeVariation.FunctionFixtureNode;
  inputs: FixtureNode[];
  response: FixtureNode;
};

export type RootFixtureNode = FixtureAttributes & {
  variation: FixtureNodeVariation.RootFixtureNode;
  self: FixtureNode;
};

export type UnknownFixtureNode = FixtureAttributes & {
  variation: FixtureNodeVariation.UnknownFixtureNode;
  location: string;
};

export type FixtureNode =
  | BaseFixtureNode
  | EnumFixtureNode
  | ListFixtureNode
  | ObjectFixtureNode
  | ScalarFixtureNode
  | UnionFixtureNode
  | FunctionFixtureNode
  | UnknownFixtureNode;
