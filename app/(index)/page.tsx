import {Image} from '@/components/image';
import {Link} from '@/components/link';
import {PokemonsQuery} from '@/graphql';
import {Box, Grid, styled} from '@/styled-system/jsx';
import {capitalize} from '@/utils/capitalize';
import {clamp} from '@/utils/clamp';
import {Fragment} from 'react';
import {parse} from 'valibot';
import {Filter} from './filter';
import {PageNav} from './page-nav';
import {GetPokemonsArgsSchema, getPokemons} from './utils';

interface PokemonsProps {
  searchParams: {[key: string]: unknown};
}

export default async function Pokemons(props: PokemonsProps) {
  const params = parse(GetPokemonsArgsSchema, {
    ...props.searchParams,
    types: props.searchParams.type,
  });

  const data = await getPokemons(params);

  const count = data.details.aggregate?.count ?? 0;
  const start = 1 + (params.page - 1) * params.size;
  const until = clamp(params.page * params.size, params.size, count);

  return (
    <Fragment>
      <Filter />
      <Box
        mt={{
          base: 4,
          lg: 12,
        }}
        color="neutral.300"
        fontSize="sm"
        fontStyle="italic"
      >
        Showing {start}-{until} of {count}
      </Box>
      <Grid
        gridTemplateColumns={{
          lg: 'repeat(auto-fill,minmax(14rem,1fr))',
        }}
        mt={4}
        gap={{
          base: 3,
          lg: 5,
        }}
      >
        {data.pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} data={pokemon} />
        ))}
      </Grid>
      <PageNav __RSC_DATA={data} />
    </Fragment>
  );
}

interface PokemonProps {
  data: NonNullable<PokemonsQuery['pokemons']>[number];
}

function Pokemon({data}: PokemonProps) {
  const sprite = JSON.parse(data.sprites.at(0)?.sprites ?? '{}');
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
        <styled.h2 fontSize="2xl" truncate>
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
