import { generateTypes } from '../../../src/index';
import * as fs from 'fs';

describe('Query', () => {
  it('with only basic enum', async () => {
    fs.writeFileSync('./testing/results/enum/index.spec.ts', '');

    const result = await generateTypes({
      resolverName: 'getSomething',
      schemaFilePath: './testing/fixtures/enum/schema.graphql',
      resolverFilePath: './testing/results/enum/index.ts',
      typeFilePath: './testing/fixtures/types.generated.ts',
    });

    expect(result).toMatchSnapshot();
  });
});
