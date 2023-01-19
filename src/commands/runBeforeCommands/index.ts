import { runShellCommand } from '../../utils/runShellCommand';
import { Config } from '../../types';

export async function runBeforeCommands(config: Config) {
  for (const command of config.beforeCommands) {
    await runShellCommand(command);
  }
}
