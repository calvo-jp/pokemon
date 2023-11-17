'use client';

import {styled} from '@/styled-system/jsx';
import image from 'next/image';

export const Image = styled(
  image,
  {},
  {
    shouldForwardProp(key) {
      return [
        'src',
        'alt',
        'height',
        'width',
        'loader',
        'fill',
        'sizes',
        'quality',
        'priority',
        'placeholder',
        'style',
        'onLoadingComplete',
        'onLoad',
        'onError',
        'loading',
        'blurDataURL',
      ].includes(key);
    },
  },
);
