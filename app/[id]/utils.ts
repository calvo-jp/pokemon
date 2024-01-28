import {graphqlClient} from '@/config/graphql-client';
import {getSdk} from '@/graphql';
import {uniqBy} from '@/utils/uniqBy';

export async function getPokemon(id: number) {
  const data = await getSdk(graphqlClient).Pokemon({id});

  return data.pokemon ?? null;
}

export async function getPokemonIds(limit = 1) {
  const {pokemons} = await getSdk(graphqlClient).Pokemons({limit});
  return pokemons.map((pokemon) => pokemon.id);
}

export async function getPokemonImage(id: number): Promise<string | null> {
  const data = await getSdk(graphqlClient).PokemonSprites({id});
  const item = data.sprites.at(0);

  if (!item) return null;

  const parsed = item.sprite;
  const image = parsed.other?.dream_world?.front_default ?? null;

  return image;
}

export async function getPokemonResistanceAndWeakness(types: number[]) {
  const promises = types.map(async (type) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await response.json();

      return {
        resistance: [
          ...data.damage_relations.double_damage_to,
          ...data.damage_relations.half_damage_from,
          ...data.damage_relations.no_damage_from,
        ],
        weaknesses: [
          ...data.damage_relations.double_damage_from,
          ...data.damage_relations.half_damage_to,
          ...data.damage_relations.no_damage_to,
        ],
      };
    } catch (error) {
      return {
        resistance: [],
        weaknesses: [],
      };
    }
  });

  const responses = await Promise.allSettled(promises);

  const resistanceAndWeaknesses = responses.reduce<{
    resistance: {name: string; url: string}[];
    weaknesses: {name: string; url: string}[];
  }>(
    (obj, res) => {
      if (res.status === 'rejected') return obj;

      return {
        resistance: [...obj.resistance, ...res.value.resistance],
        weaknesses: [...obj.weaknesses, ...res.value.weaknesses],
      };
    },
    {
      resistance: [],
      weaknesses: [],
    },
  );

  return {
    resistance: uniqBy(resistanceAndWeaknesses.resistance, (v) => v.name),
    weaknesses: uniqBy(resistanceAndWeaknesses.weaknesses, (v) => v.name),
  };
}
