import * as fs from 'fs';

export function writeFileWithRecursiveDirCreation(filePath: string, contents: string) {
  const splitFilePath: string[] = filePath.split('/');
  const dirName = (splitFilePath?.slice(0, -1) ?? []).join('/');

  fs.mkdirSync(dirName, { recursive: true });
  fs.writeFileSync(filePath, contents);
}
