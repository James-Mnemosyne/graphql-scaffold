import { Config } from '../../types';

export function getTerminationSet(config: Config): Set<string> {
  return new Set<string>([`${config.baseFilePath}`, `${config.baseFilePath}/resolvers`]);
}
