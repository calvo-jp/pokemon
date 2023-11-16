import {cva} from '@/styled-system/css';

export const root = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: 3,
  },
});

export const item = cva({
  base: {
    lineHeight: 'none',
  },
  variants: {
    currentPage: {
      true: {
        color: 'orange.400',
      },
    },
  },
});

export const link = cva({
  base: {
    color: 'neutral.300',

    '&[href]': {
      _hover: {
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
      },
    },
  },
  variants: {
    currentPage: {
      true: {
        color: 'orange.400',
      },
    },
  },
});

export const separator = cva({
  base: {
    color: 'neutral.600',
  },
});
