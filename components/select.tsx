'use client';

import {styled} from '@/styled-system/jsx';
import {Select as parts} from '@ark-ui/react';
import {
  clearTrigger,
  content,
  control,
  indicator,
  item,
  itemIndicator,
  itemText,
  trigger,
} from './select.recipe';

export const Select = styled(parts.Root);
export const SelectClearTrigger = styled(parts.ClearTrigger, clearTrigger);
export const SelectContent = styled(parts.Content, content);
export const SelectControl = styled(parts.Control, control);
export const SelectIndicator = styled(parts.Indicator, indicator);
export const SelectItem = styled(parts.Item, item);
export const SelectItemGroup = styled(parts.ItemGroup);
export const SelectItemGroupLabel = styled(parts.ItemGroupLabel);
export const SelectItemIndicator = styled(parts.ItemIndicator, itemIndicator);
export const SelectItemText = styled(parts.ItemText, itemText);
export const SelectLabel = styled(parts.Label);
export const SelectPositioner = styled(parts.Positioner);
export const SelectTrigger = styled(parts.Trigger, trigger);
export const SelectValueText = styled(parts.ValueText);
