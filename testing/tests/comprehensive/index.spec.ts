import { generateTypes } from '../../../src/generateTypes';
import * as fs from 'fs';

describe('Query', () => {
  it('comprehensive', async () => {
    fs.writeFileSync('./testing/results/comprehensive/index.spec.ts', '');

    const result = await generateTypes({
      resolverName: 'getSomething',
      schemaFilePath: './testing/fixtures/comprehensive/schema.graphql',
      resolverFilePath: './testing/results/comprehensive/index.ts',
      typeFilePath: './testing/fixtures/types.generated.ts',
    });

    expect(result).toMatchSnapshot();
  });
});
