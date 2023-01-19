import * as fs from 'fs';
import { FileConfig } from '../../types';

const configFilePath = '.gqlScaffold.json';

const defaultFileConfig: FileConfig = {
  beforeCommands: [],
  afterCommands: [],
  testType: 'spec',
};

export function getFileConfig(): FileConfig {
  const exists = fs.existsSync(configFilePath);

  if (!exists) {
    return defaultFileConfig;
  }

  const overrides = JSON.parse(fs.readFileSync(configFilePath).toString()) as Partial<FileConfig>;

  return {
    ...defaultFileConfig,
    ...overrides,
  };
}
