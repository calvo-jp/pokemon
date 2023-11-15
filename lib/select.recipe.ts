import {cva} from '@/styled-system/css';

export const control = cva({
  base: {
    h: 14,
    w: 'full',
    bg: 'neutral.800',
    display: 'flex',
  },
});

export const trigger = cva({
  base: {
    h: 'full',
    px: 5,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    flexGrow: 1,
    _focus: {
      outline: '2px solid token(colors.neutral.500)',
      outlineOffset: '3px',
    },
  },
});

export const clearTrigger = cva({
  base: {
    color: 'neutral.400',
  },
});

export const content = cva({
  base: {
    py: 2,
    bg: 'neutral.700',
    overflowY: 'auto',
    _focusVisible: {
      outline: '2px solid token(colors.neutral.400)',
      outlineOffset: '3px',
    },
  },
});

export const item = cva({
  base: {
    px: 4,
    py: 2,
    cursor: 'default',
    display: 'flex',
    alignItems: 'center',
    transition: 'background token(durations.slow)',
    _highlighted: {
      bg: 'neutral.600',
    },
  },
});

export const itemText = cva({
  base: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  },
});

export const indicator = cva({
  base: {
    color: 'neutral.400',
    transition: 'transform token(durations.slow)',
    _open: {
      transform: 'rotate(180deg)',
    },
  },
});
