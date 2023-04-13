'use strict';
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
exports.__esModule = true;
exports.compress =
  exports.filterDefinedIfNotNullable =
  exports.buildListVariants =
  exports.buildObjectVariants =
  exports.getVariationProduct =
    void 0;
var filters_1 = require('../../../utils/filters');
function extend(arr0, arr1) {
  if (!(arr0 === null || arr0 === void 0 ? void 0 : arr0.length)) {
    return arr1.map(function (element1) {
      return [element1];
    });
  }
  var results = [];
  arr0.forEach(function (subArray0) {
    arr1.forEach(function (element1) {
      results.push(__spreadArray(__spreadArray([], subArray0, true), [element1], false));
    });
  });
  return results;
}
function getVariationProduct(argVariantArray) {
  var _a;
  var results = undefined;
  if ((argVariantArray === null || argVariantArray === void 0 ? void 0 : argVariantArray.length) < 1) {
    return [];
  }
  argVariantArray.forEach(function (argVariants) {
    results = extend(results, argVariants);
  });
  if (results === null || results === void 0 ? void 0 : results.length) {
    var variantLength_1 = (_a = results[0]) === null || _a === void 0 ? void 0 : _a.length;
    if (
      results.some(function (variant) {
        return variant.length !== variantLength_1;
      })
    ) {
      console.log('getVariationProduct mismatch:', JSON.stringify(argVariantArray, null, 2));
      throw new Error('Variant length mismatch.');
    }
  }
  return results !== null && results !== void 0 ? results : [];
}
exports.getVariationProduct = getVariationProduct;
function buildObjectVariants(fieldVariants) {
  var _a;
  var keys = Object.keys(fieldVariants);
  var variants = getVariationProduct(
    keys.map(function (key) {
      return fieldVariants[key];
    })
  );
  if (
    (variants === null || variants === void 0 ? void 0 : variants.length) &&
    ((_a = variants[0]) === null || _a === void 0 ? void 0 : _a.length) !== Object.keys(fieldVariants).length
  ) {
    console.log('buildObjectVariants key mismatch:', Object.keys(fieldVariants), JSON.stringify(variants, null, 2));
    throw new Error('buildObjectVariants key mismatch');
  }
  var results = variants.map(function (variant) {
    var newResult = {};
    keys.forEach(function (key, index) {
      newResult[key] = variant[index];
    });
    return newResult;
  });
  return results !== null && results !== void 0 ? results : [];
}
exports.buildObjectVariants = buildObjectVariants;
function buildListVariants(entryVariants) {
  if (!(entryVariants === null || entryVariants === void 0 ? void 0 : entryVariants.length)) {
    return [undefined, null, []];
  }
  return [undefined, null, [], entryVariants];
}
exports.buildListVariants = buildListVariants;
function filterDefinedIfNotNullable(node, results) {
  if (node.defined) {
    return results.filter(filters_1.Defined);
  }
  return results;
}
exports.filterDefinedIfNotNullable = filterDefinedIfNotNullable;
function compress(fixtures, maxFixtures) {
  if (fixtures.length <= maxFixtures) {
    return fixtures;
  }
  var results = [];
  for (var index = 0; index < fixtures.length; index += fixtures.length / (maxFixtures - 1)) {
    var newValue = fixtures[Math.floor(index)];
    results.push(newValue);
  }
  return results;
}
exports.compress = compress;
