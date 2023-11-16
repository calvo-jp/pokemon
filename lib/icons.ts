import {styled} from '@/styled-system/jsx';
import {
  BarChart2Icon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  LightbulbIcon,
  LucideIcon,
  Rotate3DIcon,
  SearchIcon,
  ShieldIcon,
  VideoIcon,
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
export const IconVideo = styledIcon(VideoIcon);
export const IconBarChart2 = styledIcon(BarChart2Icon);
export const IconRotate3D = styledIcon(Rotate3DIcon);
export const IconLightBulb = styledIcon(LightbulbIcon);
export const IconShield = styledIcon(ShieldIcon);
