# gql-test-generator

Graphql codegen plugin for generating fixtures and tests for smoke tests.

This is not completed yet. Rough timeline:

- Invented yesterday.
- Estimated to enter QA by the new year (currently two days away).
- After that, it will be in alpha.
- Beta should be available somewhere around Jan 5th.

## Links

### Github

https://github.com/James-Mnemosyne/gql-test-generator/tree/master

### NPM

https://www.npmjs.com/package/gql-test-generator

## Overview

Writing tests kind of sucks. Hopefully, this makes it a bit easier to get a comprehensive test setup.

This enables automated generation of smoke tests for a given resolver.

I plan on actively maintaining this. Feel free to contribute.

## Install

You can install this package as a dev dep, or you can install it globally.

### NPM

`npm i --save-dev gql-test-generator`

### Yarn

`yarn add -D gql-test-generator`

## Use

Currently, there is no use. Planning to make this a CLI tool.

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

And run (for npm):

```
npm run gql-test-generator
```

And you should have a newly output suite of fixture tests.
