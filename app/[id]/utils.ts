import {graphqlClient} from '@/config/graphql-client';
import {getSdk} from '@/graphql';
import {cache} from 'react';

export const getPokemon = cache(async (id: number) => {
  const data = await getSdk(graphqlClient).Pokemon({id});

  return data.pokemon ?? null;
});
