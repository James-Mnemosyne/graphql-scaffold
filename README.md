# gql-scaffold

Npm package for scaffolding files and smoke tests for resolvers.

This is not completed yet. Rough timeline:

- Invented today.

## Links

### Github

https://github.com/James-Mnemosyne/gql-scaffold/tree/master

### NPM

https://www.npmjs.com/package/gql-scaffold

## Overview

Writing tests kind of sucks. Hopefully, this makes it a bit easier to get a comprehensive test setup.

This enables automated generation of smoke tests for a given resolver.

I plan on actively maintaining this. Feel free to contribute.

## Install

You can install this package as a dev dep, or you can install it globally.

### NPM

`npm i --save-dev gql-scaffold`

### Yarn

`yarn add -D gql-scaffold`

## Use

Assume that you have the following schema:

```
enum SomethingEnum {
  Something0
  Something1
  Something2
}

input SomethingInput {
  value0: SomethingEnum
  value1: String
  value2: Int
  value3: Float
  value4Email: String!
}

type SomethingResult {
  str: String!
}

type Query {
  getSomething(input0: SomethingInput!, input1: SomethingInput): SomethingResult
}
```

add a .gqlTestGenerator.json file, containing the following

```
{
  "resolverName": "getSomething",
  "schemaFilePath": "./ohLookADirectory/**/*.graphql",
  "resolverFilePath": "./directoryOfResolver/resolverFile.ts",
  "typeFilePath": "./generatedTypesPath/types.generated.ts",
}
```

Add a script to your package.json:

```
  "generateTests": "gql-test-generator",
```

And run (for npm):

```
npm run generateTests
```

And you should have a newly output suite of fixture tests, such as:

```

import { GraphQLResolveInfo } from 'graphql';
import { getSomething } from './directoryOfResolver/resolverFile.ts';
import { SomethingEnum } from './generatedTypesPath/types.generated.ts';

...

describe('getSomething smoke tests', () => {
  beforeAll(() => {
    // Do something here.
  });

  beforeEach(() => {
    // Do something here.
  });


  it('case0', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value4Email":""},"input1":{"value0":SomethingEnum.Something0,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });



  it('case1', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value3":0,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something0,"value3":0,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });



  it('case2', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value2":null,"value3":-1000.5,"value4Email":""},"input1":{"value0":SomethingEnum.Something0,"value2":null,"value3":-1000.5,"value4Email":""}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });



  it('case3', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value2":-1000,"value4Email":"james@bob.edu"},"input1":{"value0":SomethingEnum.Something0,"value2":-1000,"value4Email":"james@bob.edu"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });



  it('case4', async () => {
    const params = {"input0":{"value0":SomethingEnum.Something0,"value2":-1000,"value3":2000345.7898,"value4Email":"random string"},"input1":{"value0":SomethingEnum.Something0,"value2":-1000,"value3":2000345.7898,"value4Email":"random string"}};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });

...

});

```

## Extended Use

The following flags are now available for convenience:

```
--config // Used to specify a configuation file.
```

Example:

```
npm run generateTests -- --config configFiles/graphql/generateTests.json
```
