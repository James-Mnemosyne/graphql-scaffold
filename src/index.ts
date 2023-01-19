#!/usr/bin/env node

import { generate } from './generate';
import { getConfig } from './getConfig';

async function run() {
  const config = await getConfig();
  await generate(config);
}

run()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
