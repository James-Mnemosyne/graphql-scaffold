import { ASTNode } from 'graphql';
import { FixtureNode } from '../generateFixtures/types';
export declare function getNewResolve(result: Record<string, FixtureNode>):
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly value: any;
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly definitions: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly operation: any;
        readonly name?: any;
        readonly variableDefinitions?: readonly any[];
        readonly directives?: readonly any[];
        readonly selectionSet: any;
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly variable: any;
        readonly type: any;
        readonly defaultValue?: any;
        readonly directives?: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        kind: any;
        loc?: any;
        selections: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly alias?: any;
        readonly name: any;
        readonly arguments?: readonly any[];
        readonly directives?: readonly any[];
        readonly selectionSet?: any;
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly name: any;
        readonly value: any;
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly name: any;
        readonly directives?: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly typeCondition?: any;
        readonly directives?: readonly any[];
        readonly selectionSet: any;
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly name: any;
        readonly variableDefinitions?: readonly any[];
        readonly typeCondition: any;
        readonly directives?: readonly any[];
        readonly selectionSet: any;
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly name: any;
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly value: any;
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly value: any;
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly value: any;
        readonly block?: any;
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly value: any;
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly value: any;
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly values: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly fields: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly name: any;
        readonly value: any;
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly name: any;
        readonly arguments?: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly name: any;
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly type: any;
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly type: any;
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly description?: any;
        readonly directives?: readonly any[];
        readonly operationTypes: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly operation: any;
        readonly type: any;
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly description?: any;
        readonly name: any;
        readonly directives?: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly description?: any;
        readonly name: any;
        readonly interfaces?: readonly any[];
        readonly directives?: readonly any[];
        readonly fields?: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly description?: any;
        readonly name: any;
        readonly arguments?: readonly any[];
        readonly type: any;
        readonly directives?: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly description?: any;
        readonly name: any;
        readonly type: any;
        readonly defaultValue?: any;
        readonly directives?: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly description?: any;
        readonly name: any;
        readonly interfaces?: readonly any[];
        readonly directives?: readonly any[];
        readonly fields?: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly description?: any;
        readonly name: any;
        readonly directives?: readonly any[];
        readonly types?: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly description?: any;
        readonly name: any;
        readonly directives?: readonly any[];
        readonly values?: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly description?: any;
        readonly name: any;
        readonly directives?: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly description?: any;
        readonly name: any;
        readonly directives?: readonly any[];
        readonly fields?: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly description?: any;
        readonly name: any;
        readonly arguments?: readonly any[];
        readonly repeatable: any;
        readonly locations: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly directives?: readonly any[];
        readonly operationTypes?: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly name: any;
        readonly directives?: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly name: any;
        readonly interfaces?: readonly any[];
        readonly directives?: readonly any[];
        readonly fields?: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly name: any;
        readonly interfaces?: readonly any[];
        readonly directives?: readonly any[];
        readonly fields?: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly name: any;
        readonly directives?: readonly any[];
        readonly types?: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly name: any;
        readonly directives?: readonly any[];
        readonly values?: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any)
  | ((
      node: {
        readonly kind: any;
        readonly loc?: any;
        readonly name: any;
        readonly directives?: readonly any[];
        readonly fields?: readonly any[];
      },
      key: string | number,
      parent: ASTNode | readonly ASTNode[],
      path: readonly (string | number)[],
      ancestors: readonly (ASTNode | readonly ASTNode[])[]
    ) => any);
