import {styled} from '@/styled-system/jsx';
import {ark} from '@ark-ui/react';

export const Button = styled(
  ark.button,
  {
    base: {
      h: 14,
      bg: 'neutral.800',
      minW: 14,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform token(durations.slow)',
      _focusVisible: {
        outline: '2px solid token(colors.neutral.500)',
        outlineOffset: '3px',
      },
      _active: {
        transform: 'scale(0.95)',
      },
    },
  },
  {
    defaultProps: {
      type: 'button',
    },
  },
);
