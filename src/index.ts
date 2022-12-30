#!/usr/bin/env node

import { generateTypes } from './generateTypes';
import { getConfig } from './getConfig';

async function run() {
  const config = getConfig();
  await generateTypes(config);
}

run()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
