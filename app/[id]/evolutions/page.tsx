import {IconMoveRight} from '@/components/icons';
import {Image} from '@/components/image';
import {Box, HStack, VStack, styled} from '@/styled-system/jsx';
import {capitalize} from '@/utils/capitalize';
import {notFound} from 'next/navigation';
import {Fragment} from 'react';
import {getPokemon, getPokemonIds, getPokemonImage} from '../utils';

export async function generateStaticParams() {
  return (await getPokemonIds()).map(String).map((id) => ({id}));
}

export default async function Evolutions({params}: {params: {id: string}}) {
  const pokemon = await getPokemon(parseInt(params.id));

  if (!pokemon) return notFound();

  const species = pokemon.specy?.evolutionChain?.species ?? [];
  const currentForm = species.find((obj) => obj.id === pokemon.id);
  const previousForm = species.find(
    (obj) => obj.id === currentForm?.evolvesFrom,
  );

  return (
    <Fragment>
      <Box>
        <styled.span>
          There are currently a total of {species.length} Pokémon in the{' '}
          {capitalize(pokemon.name, {delimiter: '-'})} family.
        </styled.span>{' '}
        {previousForm && (
          <styled.span>
            {capitalize(pokemon.name, {delimiter: '-'})} evolves from{' '}
            {capitalize(previousForm.name, {delimiter: '-'})} which
            costs&nbsp;25&nbsp;Candy.
          </styled.span>
        )}
      </Box>
      <VStack
        mt={{
          base: 5,
          lg: 8,
        }}
        bg="neutral.800"
        py={{
          base: 4,
          lg: 16,
        }}
        px={{
          base: 4,
          lg: 24,
        }}
        gap={{
          base: 2,
          lg: 8,
        }}
        alignItems="stretch"
      >
        {species.map((obj) => {
          return (
            <HStack key={obj.id}>
              <Box
                w={{
                  base: 24,
                  lg: 32,
                }}
                h={{
                  base: 24,
                  lg: 32,
                }}
                p={4}
                bg="neutral.700"
              >
                <Box
                  bg="neutral.600"
                  rounded="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  aspectRatio={1}
                >
                  <PokemonImage id={obj.evolvesFrom ?? obj.id} />
                </Box>
              </Box>

              <VStack flexGrow={1} flexShrink={0}>
                <Box fontFamily="mono">
                  {obj.evolutions
                    .map((o) => o.minLevel)
                    .filter(Boolean)
                    .at(0) ?? 0}
                </Box>
                <IconMoveRight w={6} h={6} />
              </VStack>

              <Box
                w={{
                  base: 24,
                  lg: 32,
                }}
                h={{
                  base: 24,
                  lg: 32,
                }}
                p={4}
                bg="neutral.700"
              >
                <Box
                  bg="neutral.600"
                  rounded="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  aspectRatio={1}
                >
                  <PokemonImage id={obj.id} />
                </Box>
              </Box>
            </HStack>
          );
        })}
      </VStack>
    </Fragment>
  );
}

async function PokemonImage({id}: {id: number}) {
  const image = await getPokemonImage(id);

  if (!image) return null;

  return (
    <Image
      src={image}
      alt=""
      width={250}
      height={250}
      h="auto"
      maxH="full"
      maxW="full"
      fallbackSrc="/pokemon-ball.png"
    />
  );
}
