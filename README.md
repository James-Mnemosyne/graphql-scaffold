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

It can be difficult maintaining a graphql system that with consistent structure and shape. Code standards and organizational patterns can become complex. This produces everything in a fixed organizational structure, which should help make things a bit better.

## Install

You can install this package as a dev dep, or you can install it globally.

### NPM

`npm i --save-dev graphql-scaffold`

### Yarn

`yarn add -D graphql-scaffold`

## Use

Add the following to your package.json scripts:

```
"scaffold": "graphql-scaffold --resolver"
```

Assume that you have the following schema:

```
# src/graphql/schemas/queries/getSomething/schema.graphql
type Query {
  getSomething: String
}
```

Running `npm run scaffold getSomething` will generate resolvers, tests, authorizers, and an export chain for all of those and the schema.

## Extended Use

The following flags are now available for convenience, by adding a top level .gqlScaffold.json file.

```
{
  "beforeCommands": ["npm run generate-graphql-types"],   # default: []
  "afterCommands": ["npm run prettier-diff"],             # default: []
  "baseFilePath": "src/graphql-retail",                   # default: '.'
  "testType": "test"                                      # default: 'spec'
}

```

This can be useful if, for example, you need to ensure that graphql typing is up to date prior to execution.
