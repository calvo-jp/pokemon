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
import {useEffectOnce} from '@/hooks/use-effect-once';
import {css} from '@/styled-system/css';
import {Box} from '@/styled-system/jsx';
import {arrayChunk} from '@/utils/array-chunk';
import {arrayUnique} from '@/utils/array-unique';
import {CarouselControl, CarouselNextTrigger} from '@ark-ui/react';
import {useEffect, useState} from 'react';

type TPokemon = NonNullable<PokemonQuery['pokemon']>;

interface RecentlyViewedProps {
  __RSC_DATA: TPokemon;
}

export function RecentlyViewed(props: RecentlyViewedProps) {
  const [items, {add}] = useRecentlyViewed();
  const chunks = arrayChunk<TPokemon>(items, 6);

  useEffectOnce(() => {
    add(props.__RSC_DATA);
  });

  if (chunks.length <= 0) return null;

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

const recentlyViewedStorageKey = 'recently-viewed';

function getRecentlyViewed() {
  try {
    const v = localStorage.getItem(recentlyViewedStorageKey);
    const l = v ? JSON.parse(v) : [];

    return Array.isArray(l) ? l : [];
  } catch {
    return [];
  }
}

function useRecentlyViewed() {
  const [state, setState] = useState<TPokemon[]>([]);

  useEffect(() => {
    setState(getRecentlyViewed());
  }, []);

  const add = (v: TPokemon) => {
    const l = arrayUnique([v, ...getRecentlyViewed()], (i) => i.id).slice(
      0,
      18,
    );

    localStorage.setItem(recentlyViewedStorageKey, JSON.stringify(l));
    setState(l);
  };

  return [state, {add}] as const;
}
