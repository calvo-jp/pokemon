'use client';

import {useInterval} from '@/hooks/use-interval';
import {cx} from '@/styled-system/css';
import {styled} from '@/styled-system/jsx';
import {Assign, HTMLStyledProps} from '@/styled-system/types';
import {clamp} from '@/utils/number';
import {createContext} from '@/utils/react';
import {forwardRef, useId, useState} from 'react';
import {Variants, recipe} from './progress.recipe';

interface UseProgressProps extends Variants {
  id?: string;
  min?: number;
  max?: number;
  value?: number;
}

type UseProgressReturn = ReturnType<typeof useProgress>;

function useProgress(props: UseProgressProps) {
  const {id, min = 0, max = 100, value = 0, ...variants} = props;

  const uid = useId();
  const rootId = id ?? uid;
  const labelId = `${rootId}:label`;

  const range = max - min;
  const diff = value - min;

  let percentLoaded: number;

  percentLoaded = (diff / range) * 100;
  percentLoaded = Math.min(100, Math.max(0, percentLoaded));
  percentLoaded = Math.floor(percentLoaded);

  return {
    min,
    max,
    value,
    percentLoaded,
    rootId,
    labelId,
  };
}

const [ProgressProvider, useProgressContext] = createContext<UseProgressReturn>(
  {
    name: 'ProgressContext',
    hookName: 'useProgressContext',
    providerName: 'ProgressProvider',
  },
);

interface UseProgressStylesProps extends Variants {}

type UseProgressStylesReturn = ReturnType<typeof useProgressStyles>;

function useProgressStyles(props: Variants) {
  return recipe(props);
}

const [ProgressStylesProvider, useProgressStylesContext] =
  createContext<UseProgressStylesReturn>({
    name: 'ProgressStylesContext',
    hookName: 'useProgressStylesContext',
    providerName: 'ProgressStylesProvider',
  });

interface ProgressProps
  extends Assign<
    Assign<HTMLStyledProps<'div'>, UseProgressProps>,
    UseProgressStylesProps
  > {}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({id, min, max, value, className, ...props}, ref) => {
    const [variants, others] = recipe.splitVariantProps(props);

    const styles = useProgressStyles(variants);
    const context = useProgress({
      id,
      min,
      max,
      value,
    });

    return (
      <ProgressStylesProvider value={styles}>
        <ProgressProvider value={context}>
          <styled.div
            ref={ref}
            role="progressbar"
            className={cx(styles.root, className)}
            aria-valuemin={context.min}
            aria-valuemax={context.max}
            aria-valuenow={context.value}
            aria-labelledby={context.labelId}
            {...others}
          />
        </ProgressProvider>
      </ProgressStylesProvider>
    );
  },
);

export const ProgressValue = forwardRef<HTMLDivElement, HTMLStyledProps<'div'>>(
  ({className, ...props}, ref) => {
    const context = useProgressContext();
    const styles = useProgressStylesContext();

    const [state, setState] = useState(0);

    useInterval(
      () => {
        setState((n) => {
          if (n >= context.value) {
            return context.value;
          } else {
            return n + 1;
          }
        });
      },
      state >= context.value ? null : (context.value / 100) * 5,
    );

    const width = clamp(state, context.min, context.value);

    return (
      <styled.div
        ref={ref}
        className={cx(styles.value, className)}
        style={{
          ['--progress-value' as string]: `${width}%`,
        }}
        {...props}
      />
    );
  },
);

export const ProgressValueText = forwardRef<
  HTMLDivElement,
  HTMLStyledProps<'div'>
>(({className, ...props}, ref) => {
  const context = useProgressContext();
  const styles = useProgressStylesContext();

  return (
    <styled.div
      ref={ref}
      className={cx(styles.valueText, className)}
      {...props}
    >
      {context.percentLoaded}%
    </styled.div>
  );
});

export const ProgressLabel = forwardRef<HTMLDivElement, HTMLStyledProps<'div'>>(
  ({className, ...props}, ref) => {
    const context = useProgressContext();
    const styles = useProgressStylesContext();

    return (
      <styled.div
        id={context.labelId}
        ref={ref}
        className={cx(styles.label, className)}
        {...props}
      />
    );
  },
);

Progress.displayName = 'Progress';
ProgressLabel.displayName = 'ProgressLabel';
ProgressValue.displayName = 'ProgressValue';
ProgressValueText.displayName = 'ProgressValueText';
