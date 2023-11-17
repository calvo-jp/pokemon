'use client';

import {styled} from '@/styled-system/jsx';
import {Tooltip as parts} from '@ark-ui/react';

export const Tooltip = styled(parts.Root);
export const TooltipTrigger = styled(parts.Trigger, {
  base: {
    cursor: 'pointer',
  },
});
export const TooltipPositioner = styled(parts.Positioner);
export const TooltipContent = styled(parts.Content, {
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
export const TooltipArrow = styled(parts.Arrow, {
  base: {
    '--arrow-size': 'token(sizes.3)',
    '--arrow-background': 'token(colors.neutral.600)',
  },
});
export const TooltipArrowTip = styled(parts.ArrowTip);
