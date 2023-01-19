#!/usr/bin/env node

import { runAfterCommands } from 'commands/runAfterCommands';
import { runBeforeCommands } from 'commands/runBeforeCommands';
import { generate } from './generate';
import { getConfig } from './getConfig';

async function run() {
  const config = getConfig();
  await runBeforeCommands(config);
  await generate(config);
  await runAfterCommands(config);
}

run()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
