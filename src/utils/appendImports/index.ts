import * as fs from 'fs';
import { getTerminationSet } from '../getTerminationSet';
import { Config } from '../../types';

function getImport(previousName) {
  return `export * from './${previousName}';\n`;
}

function appendImport(splitFilePath: string[], previousName: string | undefined, terminationSet: Set<string>) {
  const currentName = splitFilePath[splitFilePath.length - 1];
  if (previousName === undefined) {
    return appendImport(splitFilePath.slice(0, -1), currentName, terminationSet);
  }
  if (terminationSet.has(splitFilePath.join('/'))) {
    return;
  }

  fs.mkdirSync(splitFilePath.join('/'), { recursive: true });

  const fileName = `${splitFilePath.join('/')}/index.ts`;

  const importLine = getImport(previousName);
  const exists = fs.existsSync(fileName);
  const existing = exists ? fs.readFileSync(fileName).toString() : '';
  const newFileContents = `${existing}${existing.includes(importLine) ? '' : `${importLine}`}`;
  fs.writeFileSync(fileName, newFileContents);

  return appendImport(splitFilePath.slice(0, -1), currentName, terminationSet);
}

export function appendImports(filePath: string, config: Config): void {
  appendImport(filePath.split('/'), undefined, getTerminationSet(config));
}
