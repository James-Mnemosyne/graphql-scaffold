# graphql-scaffold

Npm package for scaffolding files and tests for resolvers.

This is not completed yet. Rough timeline:

- Invented today.
- Might add other stuff tomorrow.

## Links

### Github

https://github.com/James-Mnemosyne/graphql-scaffold/tree/master

### NPM

https://www.npmjs.com/package/graphql-scaffold

## Overview

Writing tests kind of sucks. Hopefully, this makes it a bit easier to get a comprehensive test setup.

This enables automated generation of smoke tests for a given resolver.

I plan on actively maintaining this. Feel free to contribute.

## Install

You can install this package as a dev dep, or you can install it globally.

### NPM

`npm i --save-dev graphql-scaffold`

### Yarn

`yarn add -D graphql-scaffold`

## Use

Add the following to your package.json scripts:

```
"scaffold": "graphql-scaffold"
```

Assume that you have the following schema:

```
# src/graphql/schemas/queries/getSomething/schema.graphql
type Query {
  getSomething: String
}
```

Running `npm run scaffold -- --schemaFilePath src/graphql/schemas/queries/getSomething/schema.graphql` will generate resolvers, tests, authorizers, and an export chain for all of those and the schema.

## Extended Use

The following flags are now available for convenience:

```
--testType // Used to specify the test extension (e.g. spec|test). Default is spec.
```

Additionally, graphql types should be generated before running this, so it may be convenient to just include the generation in the script.

Example:

```
"scaffold": "npm run generate-graphql-types && graphql-scaffold --testType test"
```

Will regenerate the schema and output test files as index.test.ts
