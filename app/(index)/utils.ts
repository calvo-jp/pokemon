import {graphqlClient} from '@/config/graphql-client';
import {getSdk} from '@/graphql';
import {clamp} from '@/utils/clamp';
import {cache} from 'react';
import {
  Input,
  Output,
  array,
  intersect,
  nullable,
  object,
  optional,
  string,
  transform,
  union,
} from 'valibot';

export const PaginationSchema = object({
  page: transform(optional(nullable(string())), (value) => {
    if (!value) return 1;
    const parsed = parseInt(value);
    return Number.isNaN(parsed) ? 1 : clamp(parsed, 1, Number.MAX_SAFE_INTEGER);
  }),
  size: transform(optional(nullable(string())), (value) => {
    if (!value) return 20;
    const parsed = parseInt(value);
    return Number.isNaN(parsed) ? 20 : clamp(parsed, 20, 100);
  }),
});

const TypeFilterSchema = transform(
  union([optional(nullable(string())), optional(nullable(array(string())))]),
  (value) => {
    return !value ? [] : Array.isArray(value) ? value : [value];
  },
);

export const FilterSchema = transform(
  union([
    object({
      search: optional(nullable(string(), ''), ''),
      types: TypeFilterSchema,
    }),
    object({
      search: optional(nullable(string(), ''), ''),
      type: TypeFilterSchema,
    }),
  ]),
  (value) => {
    if ('type' in value) {
      return {
        ...value,
        types: value.type,
      };
    }

    return value;
  },
);

export type PaginationSchemaOuput = Output<typeof PaginationSchema>;
export type PaginationSchemaInput = Input<typeof PaginationSchema>;
export type FilterSchemaOuput = Output<typeof FilterSchema>;
export type FilterSchemaInput = Input<typeof FilterSchema>;

export const GetPokemonsArgsSchema = transform(
  intersect([PaginationSchema, FilterSchema]),
  (value) => {
    if ('type' in value) {
      return {
        ...value,
        types: value.type,
      };
    }

    return value;
  },
);

export type GetPokemonsArgsSchemaInput = Input<typeof GetPokemonsArgsSchema>;
export type GetPokemonsArgsSchemaOutput = Output<typeof GetPokemonsArgsSchema>;

export const getPokemons = cache(async (input: GetPokemonsArgsSchemaOutput) => {
  const {size, page, search, types} = input;

  return await getSdk(graphqlClient).Pokemons({
    limit: size,
    offset: size * (page - 1),
    where: {
      ...(search && {
        name: {
          _ilike: search,
        },
      }),
      ...(types.length > 0 && {
        pokemon_v2_pokemontypes: {
          pokemon_v2_type: {
            name: {
              _in: types,
            },
          },
        },
      }),
    },
  });
});
