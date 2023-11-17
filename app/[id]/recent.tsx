import {
  Carousel,
  CarouselItem,
  CarouselItemGroup,
  CarouselPrevTrigger,
  CarouselViewport,
} from '@/components/carousel';
import {IconChevronLeft, IconChevronRight} from '@/components/icons';
import {css} from '@/styled-system/css';
import {AspectRatio, Grid, GridItem} from '@/styled-system/jsx';
import {CarouselControl, CarouselNextTrigger} from '@ark-ui/react';
import Image from 'next/image';

export function Recent() {
  return (
    <Carousel mt={8} display="flex" alignItems="center" gap={6}>
      <CarouselControl>
        <CarouselPrevTrigger className={button}>
          <IconChevronLeft w={5} h={5} />
        </CarouselPrevTrigger>
      </CarouselControl>

      <CarouselViewport flexGrow={1}>
        <CarouselItemGroup>
          {Array.from({length: 3}).map((_, idx0) => (
            <CarouselItem index={1} key={`0:${idx0}`}>
              <Grid columns={3} flexGrow={1}>
                {Array.from({length: 6}).map((_, idx1) => (
                  <GridItem key={`1:${idx1}`} p={4} bg="neutral.800">
                    <AspectRatio w="full" ratio={1}>
                      <Image
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/51.png"
                        alt=""
                        width={150}
                        height={150}
                      />
                    </AspectRatio>
                  </GridItem>
                ))}
              </Grid>
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
