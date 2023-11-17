'use client';

import {styled} from '@/styled-system/jsx';
import {Tooltip as parts} from '@ark-ui/react';
import {arrow, content, trigger} from './tooltip.recipe';

export const Tooltip = styled(parts.Root);
export const TooltipTrigger = styled(parts.Trigger, trigger);
export const TooltipPositioner = styled(parts.Positioner);
export const TooltipContent = styled(parts.Content, content);
export const TooltipArrow = styled(parts.Arrow, arrow);
export const TooltipArrowTip = styled(parts.ArrowTip);
