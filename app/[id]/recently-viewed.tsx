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
import {css} from '@/styled-system/css';
import {AspectRatio} from '@/styled-system/jsx';
import {CarouselControl, CarouselNextTrigger} from '@ark-ui/react';

export function RecentlyViewed() {
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
            <CarouselItem
              key={idx0}
              index={1}
              display="grid"
              gridTemplateColumns="repeat(3,1fr)"
              gap={3}
            >
              {Array.from({length: 6}).map((_, idx1) => (
                <Link
                  key={`${idx0}:${idx1}`}
                  href="/1"
                  display="block"
                  bg="neutral.800"
                  p={4}
                >
                  <AspectRatio w="full" ratio={1}>
                    <Image
                      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/51.png"
                      alt=""
                      width={150}
                      height={150}
                    />
                  </AspectRatio>
                </Link>
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
