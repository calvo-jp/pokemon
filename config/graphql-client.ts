import {GraphQLClient} from 'graphql-request';
import invariant from 'tiny-invariant';

invariant(
  process.env.NEXT_PUBLIC_POKEAPI,
  "'NEXT_PUBLIC_POKEAPI' is undefined",
);

export const graphqlClient = new GraphQLClient(process.env.NEXT_PUBLIC_POKEAPI);
