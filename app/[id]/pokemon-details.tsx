import {Box, Flex, styled} from '@/styled-system/jsx';
import {capitalize} from '@/utils/capitalize';
import {getPokemon} from './utils';

export async function PokemonDetails({id}: {id: number}) {
  const pokemon = await getPokemon(id);

  if (!pokemon) return null;

  return (
    <>
      <Heading>{capitalize(pokemon.name, {delimiter: '-'})}</Heading>

      <Flex mt={4} gap={3}>
        {pokemon.types
          .filter((obj) => Boolean(obj.type))
          .map((obj) => (
            <Badge key={obj.id}>{obj.type?.name}</Badge>
          ))}
      </Flex>
    </>
  );
}

export function PokemonDetailsLoader() {
  return (
    <>
      <Heading>Pokemon</Heading>
      <Box mt={4}>
        <Badge>Unknown</Badge>
      </Box>
    </>
  );
}

const Heading = styled('h1', {
  base: {
    fontSize: {
      base: '3xl',
      lg: '4xl',
    },
    fontWeight: 'bold',
    lineHeight: 'none',
  },
});

const Badge = styled(Box, {
  base: {
    bg: 'neutral.800',
    px: 4,
    py: 1,
    display: 'inline-block',
    rounded: 'full',
  },
});
