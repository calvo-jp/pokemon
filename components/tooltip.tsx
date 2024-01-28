'use client';

import {styled} from '@/styled-system/jsx';
import {Tooltip as ArkTooltip} from '@ark-ui/react';

export const Tooltip = styled(ArkTooltip.Root);
export const TooltipTrigger = styled(ArkTooltip.Trigger, {
  base: {
    cursor: 'pointer',
  },
});
export const TooltipPositioner = styled(ArkTooltip.Positioner);
export const TooltipContent = styled(ArkTooltip.Content, {
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
export const TooltipArrow = styled(ArkTooltip.Arrow, {
  base: {
    '--arrow-size': 'token(sizes.3)',
    '--arrow-background': 'token(colors.neutral.600)',
  },
});
export const TooltipArrowTip = styled(ArkTooltip.ArrowTip);
