import { generateTypes } from '../../../src/generateTypes';
import * as fs from 'fs';

describe('Query', () => {
  it('with only basic object', async () => {
    fs.writeFileSync('./testing/results/union/index.spec.ts', '');

    const result = await generateTypes({
      resolverName: 'getSomething',
      schemaFilePath: './testing/fixtures/union/schema.graphql',
      resolverFilePath: './testing/results/union/index.ts',
      typeFilePath: './testing/fixtures/types.generated.ts',
    });

    expect(result).toMatchSnapshot();
  });
});
