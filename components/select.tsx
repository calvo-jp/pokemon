'use client';

import {styled} from '@/styled-system/jsx';
import {Select as parts} from '@ark-ui/react';

export const Select = styled(parts.Root);
export const SelectClearTrigger = styled(parts.ClearTrigger, {
  base: {
    color: 'neutral.400',
  },
});

export const SelectContent = styled(parts.Content, {
  base: {
    py: 2,
    bg: 'neutral.700',
    overflowY: 'auto',
    _focusVisible: {
      outline: '2px solid token(colors.neutral.500)',
      outlineOffset: '3px',
    },
  },
});

export const SelectControl = styled(parts.Control, {
  base: {
    h: 14,
    w: 'full',
    bg: 'neutral.800',
    display: 'flex',
  },
});

export const SelectIndicator = styled(parts.Indicator, {
  base: {
    color: 'neutral.400',
    transition: 'transform token(durations.slow)',
    _open: {
      transform: 'rotate(180deg)',
    },
  },
});

export const SelectItem = styled(parts.Item, {
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

export const SelectItemGroup = styled(parts.ItemGroup);
export const SelectItemGroupLabel = styled(parts.ItemGroupLabel);
export const SelectItemIndicator = styled(parts.ItemIndicator, {
  base: {
    color: 'neutral.400',
  },
});

export const SelectItemText = styled(parts.ItemText, {
  base: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  },
});

export const SelectLabel = styled(parts.Label);
export const SelectPositioner = styled(parts.Positioner);
export const SelectValueText = styled(parts.ValueText);
export const SelectTrigger = styled(parts.Trigger, {
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
