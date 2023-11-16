import {cva} from '@/styled-system/css';

export const group = cva({
  base: {
    pos: 'relative',
  },
});

export const input = cva({
  base: {
    w: 'full',
    h: 14,
    pl: 5,
    pr: 14,
    bg: 'neutral.800',
    display: 'block',
    fontSize: 'lg',
    _focus: {
      outline: '2px solid token(colors.neutral.500)',
      outlineOffset: '3px',
    },
    _placeholder: {
      color: 'neutral.600',
    },
  },
});

export const icon = cva({
  base: {
    w: 6,
    h: 6,
    pos: 'absolute',
    top: '1/2',
    right: 5,
    color: 'neutral.500',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
  },
});
