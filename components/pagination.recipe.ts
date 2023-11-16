import {cva} from '@/styled-system/css';

export const root = cva({
  base: {
    display: 'flex',
    justifyContent: 'center',
    gap: 2,
  },
});

export const item = cva({
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

export const nextTrigger = item;
export const prevTrigger = item;

export const ellipsis = cva({
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
