import { generateTypes } from '../src/index';
import * as fs from 'fs';

describe('Query', () => {
  it('with only basic scalars', async () => {
    fs.writeFileSync('./tests/results/scalars.spec.ts', '');

    const result = await generateTypes({
      resolverName: 'getSomething',
      schemaFilePath: './tests/fixtures/scalars.schema.graphql',
      resolverFilePath: './tests/results/scalars.ts',
      typeFilePath: './tests/fixtures/types.generated.ts',
    });

    expect(result).toMatchSnapshot();
  });
});
