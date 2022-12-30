import { generateTypes } from '../../../src/index';
import * as fs from 'fs';

describe('Query', () => {
  it('with only basic scalars', async () => {
    fs.writeFileSync('./testing/results/scalar/index.spec.ts', '');

    const result = await generateTypes({
      resolverName: 'getSomething',
      schemaFilePath: './testing/fixtures/scalar/schema.graphql',
      resolverFilePath: './testing/results/scalar/index.ts',
      typeFilePath: './testing/fixtures/types.generated.ts',
    });

    expect(result).toMatchSnapshot();
  });
});
