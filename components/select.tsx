'use client';

import {styled} from '@/styled-system/jsx';
import {Select as ArkSelect} from '@ark-ui/react';

export const Select = styled(ArkSelect.Root);
export const SelectClearTrigger = styled(ArkSelect.ClearTrigger, {
  base: {
    color: 'neutral.400',
  },
});

export const SelectContent = styled(ArkSelect.Content, {
  base: {
    py: 2,
    bg: 'neutral.700',
    zIndex: 'modal',
    overflowY: 'auto',
    _focusVisible: {
      outline: '2px solid token(colors.neutral.500)',
      outlineOffset: '3px',
    },
  },
});

export const SelectControl = styled(ArkSelect.Control, {
  base: {
    h: 14,
    w: 'full',
    bg: 'neutral.800',
    display: 'flex',
  },
});

export const SelectIndicator = styled(ArkSelect.Indicator, {
  base: {
    color: 'neutral.400',
    transition: 'transform token(durations.slow)',
    _open: {
      transform: 'rotate(180deg)',
    },
  },
});

export const SelectItem = styled(ArkSelect.Item, {
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

export const SelectItemGroup = styled(ArkSelect.ItemGroup);
export const SelectItemGroupLabel = styled(ArkSelect.ItemGroupLabel);
export const SelectItemIndicator = styled(ArkSelect.ItemIndicator, {
  base: {
    color: 'neutral.400',
  },
});

export const SelectItemText = styled(ArkSelect.ItemText, {
  base: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  },
});

export const SelectLabel = styled(ArkSelect.Label);
export const SelectPositioner = styled(ArkSelect.Positioner);
export const SelectValueText = styled(ArkSelect.ValueText);
export const SelectTrigger = styled(ArkSelect.Trigger, {
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
