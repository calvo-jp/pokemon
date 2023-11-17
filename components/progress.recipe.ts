import {sva} from '@/styled-system/css';
import {RecipeVariantProps} from '@/styled-system/types';

export const recipe = sva({
  slots: ['root', 'label', 'value', 'valueText'],
  base: {
    root: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
    },
    label: {
      lineHeight: 'none',
    },
    value: {
      '--progress-value': 0,
      '--progress-color': 'colors.orange.500',

      h: 1,
      bg: 'neutral.700',
      pos: 'relative',
      rounded: 'full',
      flexGrow: 1,

      _after: {
        h: 'full',
        w: 'var(--progress-value)',
        bg: 'var(--progress-color)',
        pos: 'absolute',
        top: 0,
        left: 0,
        rounded: 'full',
        content: "''",
        transition: 'all token(durations.normal)',
      },
    },
    valueText: {
      color: 'neutral.300',
      fontSize: 'xs',
      lineHeight: 'none',
    },
  },
});

export type Variants = NonNullable<RecipeVariantProps<typeof recipe>>;
