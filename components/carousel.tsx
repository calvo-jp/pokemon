'use client';

import {styled} from '@/styled-system/jsx';
import {Carousel as ArkCarousel} from '@ark-ui/react';

export const Carousel = styled(ArkCarousel.Root);
export const CarouselControl = styled(ArkCarousel.Control);
export const CarouselIndicator = styled(ArkCarousel.Indicator);
export const CarouselIndicatorGroup = styled(ArkCarousel.IndicatorGroup);
export const CarouselItem = styled(ArkCarousel.Item);
export const CarouselItemGroup = styled(ArkCarousel.ItemGroup);
export const CarouselNextTrigger = styled(ArkCarousel.NextTrigger);
export const CarouselPrevTrigger = styled(ArkCarousel.PrevTrigger);
export const CarouselViewport = styled(ArkCarousel.Viewport, {
  base: {
    pos: 'relative',
    overflowX: 'hidden',
  },
});
