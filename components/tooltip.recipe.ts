import {cva} from '@/styled-system/css';

export const trigger = cva({
  base: {
    base: {
      cursor: 'pointer',
    },
  },
});

export const content = cva({
  base: {
    px: 4,
    py: 2,
    bg: 'neutral.600',
    color: 'neutral.300',
    zIndex: 'tooltip',
    rounded: 'md',
    fontSize: 'sm',
  },
});

export const arrow = cva({
  base: {
    '--arrow-size': 'token(sizes.3)',
    '--arrow-background': 'token(colors.neutral.600)',
  },
});
