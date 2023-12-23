import {styled} from '@/styled-system/jsx';
import {ark} from '@ark-ui/react';

export const Icon = styled(
  ark.svg,
  {
    base: {
      w: 4,
      h: 4,
    },
  },
  {
    defaultProps: {
      strokeWidth: 1.66667,
    },
    shouldForwardProp(key) {
      return ['strokeWidth'].includes(key);
    },
  },
);
