'use client';

import {
  Carousel,
  CarouselItem,
  CarouselItemGroup,
  CarouselPrevTrigger,
  CarouselViewport,
} from '@/components/carousel';
import {IconChevronLeft, IconChevronRight} from '@/components/icons';
import {Image} from '@/components/image';
import {Link} from '@/components/link';
import {PokemonQuery} from '@/graphql';
import {css} from '@/styled-system/css';
import {Box} from '@/styled-system/jsx';
import {arrayChunk} from '@/utils/array-chunk';
import {arrayUnique} from '@/utils/array-unique';
import {CarouselControl, CarouselNextTrigger} from '@ark-ui/react';
import {useEffect} from 'react';
import {useLocalStorage} from 'react-use';

interface RecentlyViewedProps {
  __rsc_data: NonNullable<PokemonQuery['pokemon']>;
}

export function RecentlyViewed(props: RecentlyViewedProps) {
  const [array, setArray] = useLocalStorage<
    NonNullable<PokemonQuery['pokemon']>[]
  >('recently-viewed', [], {
    raw: false,
    serializer(value) {
      return JSON.stringify(arrayUnique(value, (obj) => obj.id));
    },
    deserializer(value) {
      return JSON.parse(value);
    },
  });

  useEffect(() => {
    setArray((current) => {
      return current ? [props.__rsc_data, ...current] : [props.__rsc_data];
    });
  }, [props.__rsc_data, setArray]);

  if (!array || array.length < 0) return null;

  const listExcludingCurrent = array.filter(
    (pokemon) => pokemon.id !== props.__rsc_data.id,
  );

  const chunks = arrayChunk(listExcludingCurrent, 6);

  return (
    <Carousel mt={8} display="flex" alignItems="center" gap={6}>
      <CarouselControl>
        <CarouselPrevTrigger className={button}>
          <IconChevronLeft w={5} h={5} />
        </CarouselPrevTrigger>
      </CarouselControl>

      <CarouselViewport flexGrow={1}>
        <CarouselItemGroup>
          {chunks.map((pokemons, index) => (
            <CarouselItem
              key={index}
              index={1}
              display="grid"
              gridTemplateRows="repeat(2,1fr)"
              gridTemplateColumns="repeat(3,1fr)"
              gap={3}
            >
              {pokemons.map((pokemon) => (
                <Thumbnail key={pokemon.id} data={pokemon} />
              ))}
            </CarouselItem>
          ))}
        </CarouselItemGroup>
      </CarouselViewport>

      <CarouselControl>
        <CarouselNextTrigger className={button}>
          <IconChevronRight w={5} h={5} />
        </CarouselNextTrigger>
      </CarouselControl>
    </Carousel>
  );
}

function Thumbnail({data}: {data: NonNullable<PokemonQuery['pokemon']>}) {
  const sprite = JSON.parse(data.sprites.at(0)?.sprites ?? '{}');
  const image =
    sprite.other?.dream_world?.front_default ??
    sprite.other?.dream_world?.front_default ??
    '';

  return (
    <Link href={`/${data.id}`} display="block" bg="neutral.800" p={2}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        aspectRatio={1}
      >
        <Image
          src={image}
          alt=""
          width={150}
          height={150}
          h="auto"
          maxH="full"
          maxW="full"
        />
      </Box>
    </Link>
  );
}

const button = css({
  w: 8,
  h: 8,
  color: 'neutral.500',
  border: '1px solid token(colors.neutral.500)',
  cursor: 'pointer',
  rounded: 'full',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform token(durations.slow)',
  _active: {
    transform: 'scale(0.95)',
  },
  _disabled: {
    cursor: 'not-allowed',
    _active: {
      transform: 'none',
    },
  },
});
