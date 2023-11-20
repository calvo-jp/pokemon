import {
  Progress,
  ProgressLabel,
  ProgressValue,
  ProgressValueText,
} from '@/components/progress';
import {Box, VStack, styled} from '@/styled-system/jsx';
import {capitalize} from '@/utils/capitalize';
import {notFound} from 'next/navigation';
import {Fragment} from 'react';
import {
  getPokemon,
  getPokemonIds,
  getPokemonResistanceAndWeakness,
} from '../utils';

export async function generateStaticParams() {
  return (await getPokemonIds()).map(String).map((id) => ({id}));
}

export default async function Statistics({params}: {params: {id: string}}) {
  const pokemon = await getPokemon(parseInt(params.id));

  if (!pokemon) return notFound();

  const elements = pokemon.types
    .map((obj) => obj.type?.id)
    .filter(Boolean) as number[];

  const {resistance, weaknesses} =
    await getPokemonResistanceAndWeakness(elements);

  return (
    <Fragment>
      <VStack
        alignItems="stretch"
        gap={3}
        bg="neutral.800"
        p={{
          base: 5,
          lg: 8,
        }}
      >
        {pokemon.stats.map((obj) => {
          if (!obj.stat) return null;

          return (
            <Progress key={obj.id} value={obj.base}>
              <ProgressLabel w={12}>{formatStat(obj.stat.name)}</ProgressLabel>
              <ProgressValue />
              <ProgressValueText w={8} textAlign="right" color="neutral.400" />
            </Progress>
          );
        })}
      </VStack>

      <Box
        mt={{
          base: 4,
          lg: 10,
        }}
        bg="neutral.800"
        p={{
          base: 5,
          lg: 8,
        }}
      >
        <Box>Weakness</Box>

        <styled.ul mt={4} display="flex" flexWrap="wrap" gap={2}>
          {weaknesses.map(({name}) => (
            <styled.li
              key={name}
              px={3}
              py={1}
              bg="neutral.700"
              fontSize="sm"
              rounded="full"
            >
              {capitalize(name)}
            </styled.li>
          ))}
        </styled.ul>
      </Box>

      <Box
        mt={{
          base: 4,
          lg: 10,
        }}
        bg="neutral.800"
        p={8}
      >
        <Box>Resistance</Box>

        <styled.ul mt={4} display="flex" flexWrap="wrap" gap={2}>
          {resistance.map(({name}) => (
            <styled.li
              key={name}
              px={3}
              py={1}
              bg="neutral.700"
              fontSize="sm"
              rounded="full"
            >
              {capitalize(name)}
            </styled.li>
          ))}
        </styled.ul>
      </Box>
    </Fragment>
  );
}

function formatStat(stat: string) {
  switch (stat) {
    case 'hp':
      return 'HP';
    case 'attack':
      return 'ATK';
    case 'defense':
      return 'DEF';
    case 'special-attack':
      return 'SATK';
    case 'special-defense':
      return 'SDEF';
    case 'speed':
      return 'SPD';
    default:
      return stat;
  }
}
