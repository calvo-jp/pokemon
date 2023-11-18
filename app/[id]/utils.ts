import {graphqlClient} from '@/config/graphql-client';
import {getSdk} from '@/graphql';
import {cache} from 'react';

export const getPokemon = cache(async (id: number) => {
  const data = await getSdk(graphqlClient).Pokemon({id});

  return data.pokemon ?? null;
});

export const getPokemonImage = cache(
  async (id: number): Promise<string | null> => {
    const data = await getSdk(graphqlClient).PokemonSprites({id});
    const item = data.sprites.at(0);

    if (!item) return null;

    const parsed = JSON.parse(item.sprite) as {[key: string]: any};
    const image =
      parsed.other?.dream_world?.front_default ??
      parsed.other?.dream_world?.front_default ??
      null;

    return image;
  },
);
