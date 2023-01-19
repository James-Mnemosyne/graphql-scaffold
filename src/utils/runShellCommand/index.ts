import { promisify } from 'util';
import { exec as baseExec } from 'child_process';

const exec = promisify(baseExec);

function getError(command: string, error: string) {
  return `Error:
Command:
  ${command}
Failed with Error:
  ${error}
`;
}

export async function runShellCommand(command: string): Promise<string> {
  const result = await exec(command);
  if (result.stderr) {
    const error = getError(command, result.stderr);
    console.error(error);
  }
  return result.stdout;
}
