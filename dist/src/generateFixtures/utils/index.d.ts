import { FixtureNode } from '../../types';
export declare function getVariationProduct(argVariantArray: any[][]): any[][];
export declare function buildObjectVariants(fieldVariants: Record<string, any[]>): Record<string, any>[];
export declare function buildListVariants(entryVariants: any[]): any[];
export declare function filterDefinedIfNotNullable(node: FixtureNode, results: any[]): any[];
export declare function compress(fixtures: any[], maxFixtures: number): any[];
