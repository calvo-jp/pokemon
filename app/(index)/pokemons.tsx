import {Image} from '@/components/image';
import {Link} from '@/components/link';
import {PokemonsQuery} from '@/graphql';
import {Box, Flex, Grid, styled} from '@/styled-system/jsx';
import {capitalize} from '@/utils/capitalize';
import {GetPokemonsArgsSchemaOutput, getPokemons} from './utils';

export async function Pokemons({
  filter,
}: {
  filter: GetPokemonsArgsSchemaOutput;
}) {
  const data = await getPokemons(filter);

  return (
    <Grid
      gridTemplateColumns={{
        lg: 'repeat(auto-fill,minmax(14rem,1fr))',
      }}
      gap={{
        base: 3,
        lg: 5,
      }}
    >
      {data.pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} data={pokemon} />
      ))}
    </Grid>
  );
}

export function PokemonsLoader({size}: {size: number}) {
  return (
    <Grid
      gridTemplateColumns={{
        lg: 'repeat(auto-fill,minmax(14rem,1fr))',
      }}
      gap={{
        base: 3,
        lg: 5,
      }}
    >
      {Array.from({length: size}).map((_, index) => (
        <PokemonLoader key={index} />
      ))}
    </Grid>
  );
}

interface PokemonProps {
  data: NonNullable<PokemonsQuery['pokemons']>[number];
}

function Pokemon({data}: PokemonProps) {
  const sprite = data.sprites.at(0)?.sprites ?? {};
  const image =
    sprite.other?.dream_world?.front_default ??
    sprite.other?.dream_world?.front_default ??
    '';

  return (
    <Link
      href={`/${data.id}`}
      bg="neutral.800"
      py={6}
      transition="transform token(durations.slow)"
      _active={{
        transform: 'scale(0.95)',
      }}
      _focusVisible={{
        outline: '2px solid token(colors.neutral.500)',
        outlineOffset: '3px',
      }}
    >
      <Box px={6}>
        <Box
          bg="neutral.700"
          w="full"
          px={6}
          rounded="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          aspectRatio={1}
        >
          <Image
            src={image}
            alt=""
            width={400}
            height={400}
            h="auto"
            maxH="full"
            maxW="full"
            fallbackSrc="/pokemon-ball.png"
          />
        </Box>
      </Box>

      <Box px={6} mt={5}>
        <styled.h2 fontSize="2xl" lineHeight="none" truncate>
          {capitalize(data.name, {delimiter: '-'})}
        </styled.h2>

        <styled.ul mt={2} display="flex" gap={2} flexWrap="wrap" fontSize="sm">
          {data.types
            .filter((obj) => obj.type)
            .slice(0, 2)
            .map(({id, type}) => {
              if (!type) return null;

              return (
                <styled.li
                  key={id}
                  bg="neutral.700"
                  px={2.5}
                  py={0.5}
                  rounded="full"
                >
                  {type.name}
                </styled.li>
              );
            })}
        </styled.ul>
      </Box>
    </Link>
  );
}

function PokemonLoader() {
  return (
    <Box bg="neutral.800" p={6}>
      <Box
        bg="neutral.700"
        w="full"
        px={6}
        rounded="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        aspectRatio={1}
        animation="pulse"
      />

      <Flex mt={6} flexDir="column" gap={2}>
        <Box h={6} w="1/2" bg="neutral.700" rounded="full" animation="pulse" />
        <Box h={5} w={16} bg="neutral.700" rounded="full" animation="pulse" />
      </Flex>
    </Box>
  );
}
