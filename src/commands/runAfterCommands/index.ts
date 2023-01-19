import { runShellCommand } from '../../utils/runShellCommand';
import { Config } from '../../types';

export async function runAfterCommands(config: Config) {
  for (const command of config.afterCommands) {
    await runShellCommand(command);
  }
}
