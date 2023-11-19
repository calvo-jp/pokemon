import {graphqlClient} from '@/config/graphql-client';
import {getSdk} from '@/graphql';
import {Box, Divider, HStack} from '@/styled-system/jsx';
import {capitalize} from '@/utils/capitalize';
import {notFound} from 'next/navigation';
import {Fragment} from 'react';
import {getPokemon} from './utils';

export async function generateStaticParams() {
  const {pokemons} = await getSdk(graphqlClient).Pokemons({limit: 100});

  return pokemons.map((pokemon) => ({id: `${pokemon.id}`}));
}

export default async function Pokemon({params}: {params: {id: string}}) {
  const pokemon = await getPokemon(parseInt(params.id));

  if (!pokemon) return notFound();

  return (
    <Fragment>
      <Box>
        {pokemon.specy?.flavorTexts.map((obj) => obj.flavorText).join()}
      </Box>

      <HStack mt={8} w="fit" bg="neutral.800" px={8} py={6} gap={8}>
        <Box>
          <Box fontSize="xs" color="neutral.400">
            Weight
          </Box>
          <Box>{pokemon.weight ?? 0} KG</Box>
        </Box>
        <Divider orientation="vertical" h={8} color="neutral.700" />
        <Box>
          <Box fontSize="xs" color="neutral.400">
            Height
          </Box>
          <Box>{pokemon.height ?? 0} M</Box>
        </Box>
      </HStack>

      <HStack w="fit" mt={8} bg="neutral.800" px={8} py={6} gap={8}>
        <Box>
          <Box fontSize="xs" color="neutral.400">
            Gender
          </Box>
          <Box>
            {(pokemon.specy?.genderRate ?? 0) * 10}%{' '}
            {getGender(pokemon.specy?.genderRate ?? 0)}
          </Box>
        </Box>
        <Divider orientation="vertical" h={8} color="neutral.700" />
        <Box>
          <Box fontSize="xs" color="neutral.400">
            Egg Group
          </Box>
          <HStack gap={1}>
            {pokemon.specy?.eggroups
              .map((group) => group.egggroup?.name)
              .map((name) => capitalize(name ?? ''))
              .filter(Boolean)
              .join(', ')}
          </HStack>
        </Box>
        <Divider orientation="vertical" h={8} color="neutral.700" />
        <Box>
          <Box fontSize="xs" color="neutral.400">
            Egg Cycle
          </Box>
          <Box>{pokemon.specy?.hatchCounter ?? 0}</Box>
        </Box>
      </HStack>
    </Fragment>
  );
}

function getGender(genderRate: number) {
  if (genderRate >= 8) return 'Female';
  if (genderRate >= 1) return 'Male';
  return 'Genderless';
}
