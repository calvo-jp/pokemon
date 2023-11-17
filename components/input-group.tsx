import {styled} from '@/styled-system/jsx';
import {ark} from '@ark-ui/react';

export const InputGroup = styled(ark.div, {
  base: {
    pos: 'relative',
  },
});

export const Input = styled(ark.input, {
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

export const InputIcon = styled(ark.svg, {
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
