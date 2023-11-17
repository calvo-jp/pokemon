import {
  Carousel,
  CarouselItem,
  CarouselItemGroup,
  CarouselPrevTrigger,
  CarouselViewport,
} from '@/components/carousel';
import {IconChevronLeft, IconChevronRight} from '@/components/icons';
import {AspectRatio, Grid, GridItem} from '@/styled-system/jsx';
import {CarouselControl, CarouselNextTrigger} from '@ark-ui/react';
import Image from 'next/image';

export function Recent() {
  return (
    <Carousel mt={8} display="flex" alignItems="center" gap={4}>
      <CarouselControl>
        <CarouselPrevTrigger>
          <IconChevronLeft w={6} h={6} />
        </CarouselPrevTrigger>
      </CarouselControl>

      <CarouselViewport flexGrow={1}>
        <CarouselItemGroup>
          <CarouselItem index={1}>
            <Grid columns={3} flexGrow={1}>
              {Array.from({length: 6}).map((_, index) => (
                <GridItem key={index} p={4} bg="neutral.800">
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
        </CarouselItemGroup>
      </CarouselViewport>

      <CarouselControl>
        <CarouselNextTrigger>
          <IconChevronRight w={6} h={6} />
        </CarouselNextTrigger>
      </CarouselControl>
    </Carousel>
  );
}
