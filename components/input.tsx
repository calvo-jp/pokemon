import {styled} from '@/styled-system/jsx';
import {ark} from '@ark-ui/react';

export const Input = styled(ark.input, {
  base: {
    w: 'full',
    h: 14,
    px: 5,
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
