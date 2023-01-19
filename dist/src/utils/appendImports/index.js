'use strict';
exports.__esModule = true;
exports.appendImports = void 0;
var fs = require('fs');
var getTerminationSet_1 = require('../getTerminationSet');
function getImport(previousName) {
  return "export * from './".concat(previousName, "';\n");
}
function appendImport(splitFilePath, previousName, terminationSet) {
  var currentName = splitFilePath[splitFilePath.length - 1];
  if (previousName === undefined) {
    return appendImport(splitFilePath.slice(0, -1), currentName, terminationSet);
  }
  if (terminationSet.has(splitFilePath.join('/'))) {
    return;
  }
  fs.mkdirSync(splitFilePath.join('/'), { recursive: true });
  var fileName = ''.concat(splitFilePath.join('/'), '/index.ts');
  var importLine = getImport(previousName);
  var exists = fs.existsSync(fileName);
  var existing = exists ? fs.readFileSync(fileName).toString() : '';
  var newFileContents = ''.concat(existing).concat(existing.includes(importLine) ? '' : ''.concat(importLine));
  fs.writeFileSync(fileName, newFileContents);
  return appendImport(splitFilePath.slice(0, -1), currentName, terminationSet);
}
function appendImports(filePath, config) {
  appendImport(filePath.split('/'), undefined, (0, getTerminationSet_1.getTerminationSet)(config));
}
exports.appendImports = appendImports;
