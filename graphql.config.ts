import {CodegenConfig} from '@graphql-codegen/cli';
import dotenv from 'dotenv';

dotenv.config({
  path: '.env.local',
  debug: true,
});

const config: CodegenConfig = {
  debug: true,
  verbose: true,
  schema: process.env.NEXT_PUBLIC_POKEAPI,
  documents: 'graphql/**/*.gql',
  overwrite: true,
  ignoreNoDocuments: true,
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  generates: {
    'graphql/index.ts': {
      plugins: [
        {
          add: {
            content: [
              '/* eslint-disable */',
              '// @ts-nocheck',
              '// Generated file',
              '// Last modified: ' + new Date().toUTCString(),
            ],
          },
        },
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        gqlImport: 'graphql-request#gql',
        skipTypename: true,
        enumsAsTypes: true,
        declarationKind: 'interface',
        defaultScalarType: 'unknown',
        onlyOperationTypes: true,
        disableDescriptions: true,
        namingConvention: {
          typeNames: 'change-case-all#pascalCase',
          transformUnderscore: true,
        },
        scalars: {
          jsonb: '{[key:string]:any}',
        },
      },
    },
  },
};

export default config;
