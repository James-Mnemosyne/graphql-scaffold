import { FixtureNode } from '../../types';
import { Defined } from '../../utils/filters';

function extend(arr0: any[][] | undefined, arr1: any[]): any[] {
  if (!arr0?.length) {
    return arr1.map((element1) => [element1]);
  }

  const results: any[] = [];
  arr0.forEach((subArray0) => {
    arr1.forEach((element1) => {
      results.push([...subArray0, element1]);
    });
  });
  return results;
}

export function getVariationProduct(argVariantArray: any[][]): any[][] {
  let results: any[][] | undefined = undefined;
  if (argVariantArray?.length < 1) {
    return [];
  }

  argVariantArray.forEach((argVariants) => {
    results = extend(results, argVariants);
  });

  if (results?.length) {
    const variantLength = results[0]?.length;
    if (results.some((variant) => variant.length !== variantLength)) {
      console.log('getVariationProduct mismatch:', JSON.stringify(argVariantArray, null, 2));
      throw new Error('Variant length mismatch.');
    }
  }

  return results ?? [];
}

export function buildObjectVariants(fieldVariants: Record<string, any[]>): Record<string, any>[] {
  const keys = Object.keys(fieldVariants);
  const variants = getVariationProduct(keys.map((key) => fieldVariants[key]));
  if (variants?.length && variants[0]?.length !== Object.keys(fieldVariants).length) {
    console.log('buildObjectVariants key mismatch:', Object.keys(fieldVariants), JSON.stringify(variants, null, 2));
    throw new Error('buildObjectVariants key mismatch');
  }

  const results: Record<string, any>[] = variants.map((variant) => {
    const newResult: Record<string, any> = {};
    keys.forEach((key, index) => {
      newResult[key] = variant[index];
    });
    return newResult;
  });

  return results ?? [];
}

export function buildListVariants(entryVariants: any[]): any[] {
  if (!entryVariants?.length) {
    return [undefined, null, []];
  }
  return [undefined, null, [], entryVariants];
}

export function filterDefinedIfNotNullable(node: FixtureNode, results: any[]) {
  if (node.defined) {
    return results.filter(Defined);
  }
  return results;
}
