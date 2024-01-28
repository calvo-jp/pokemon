'use client';

import {cva} from '@/styled-system/css';
import {styled} from '@/styled-system/jsx';
import {Pagination as ArkPagination} from '@ark-ui/react';

export const Pagination = styled(
  ArkPagination.Root,
  {
    base: {
      display: 'flex',
      justifyContent: 'center',
      gap: 2,
    },
  },
  {
    shouldForwardProp(key) {
      return ['page'].includes(key);
    },
  },
);

export const PaginationEllipsis = styled(ArkPagination.Ellipsis, {
  base: {
    h: 12,
    w: 12,
    bg: 'neutral.800',
    color: 'neutral.500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
 *
 *------------------- Buttons Style ---------------------*/

const button = cva({
  base: {
    h: 12,
    w: 12,
    bg: 'neutral.800',
    color: 'neutral.300',
    cursor: 'pointer',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform token(durations.slow)',
    _active: {
      transform: 'scale(0.95)',
    },
    _disabled: {
      color: 'neutral.500',
      cursor: 'not-allowed',
      _active: {
        transform: 'scale(1)',
      },
    },
    _selected: {
      color: 'orange.500',
    },
    _focusVisible: {
      outline: '2px solid token(colors.neutral.500)',
      outlineOffset: '3px',
    },
  },
});

export const PaginationItem = styled(ArkPagination.Item, button);
export const PaginationNextTrigger = styled(ArkPagination.NextTrigger, button);
export const PaginationPrevTrigger = styled(ArkPagination.PrevTrigger, button);
