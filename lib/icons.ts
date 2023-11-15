import {styled} from '@/styled-system/jsx';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  LucideIcon,
  SearchIcon,
  XIcon,
} from 'lucide-react';

function styledIcon(icon: LucideIcon) {
  return styled(
    icon,
    {
      base: {
        w: 4,
        h: 4,
      },
    },
    {
      defaultProps: {
        strokeWidth: 1.66667,
        absoluteStrokeWidth: true,
      },
      shouldForwardProp(key) {
        return ['size', 'strokeWidth', 'absoluteStrokeWidth'].includes(key);
      },
    },
  );
}

export const IconSearch = styledIcon(SearchIcon);
export const IconChevronLeft = styledIcon(ChevronLeftIcon);
export const IconChevronRight = styledIcon(ChevronRightIcon);
export const IconChevronDown = styledIcon(ChevronDownIcon);
export const IconX = styledIcon(XIcon);
export const IconCheck = styledIcon(CheckIcon);
