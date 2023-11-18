'use client';

import { styled } from '@/styled-system/jsx';
import { Assign, HTMLStyledProps } from '@/styled-system/types';
import { clamp } from '@/utils/clamp';
import { createContext } from '@/utils/create-context';
import { HTMLArkProps, ark } from '@ark-ui/react';
import { forwardRef, useId, useState } from 'react';
import { useInterval } from 'react-use';

interface UseProgressProps {
  id?: string;
  min?: number;
  max?: number;
  value?: number;
}

type UseProgressReturn = ReturnType<typeof useProgress>;

function useProgress(props: UseProgressProps) {
  const {id, min = 0, max = 100, value = 0} = props;

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

const StyledArkDiv = styled(ark.div);

export type ProgressProps = Assign<
  Assign<HTMLArkProps<'div'>, HTMLStyledProps<'div'>>,
  UseProgressProps
>;

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  function Progress({id, min, max, value, ...props}, ref) {
    const context = useProgress({
      id,
      min,
      max,
      value,
    });

    return (
      <ProgressProvider value={context}>
        <StyledArkDiv
          ref={ref}
          role="progressbar"
          display="flex"
          alignItems="center"
          gap={2}
          aria-valuemin={context.min}
          aria-valuemax={context.max}
          aria-valuenow={context.value}
          aria-labelledby={context.labelId}
          {...props}
        />
      </ProgressProvider>
    );
  },
);

export type ProgressValueProps = Assign<
  Assign<HTMLArkProps<'div'>, HTMLStyledProps<'div'>>,
  UseProgressProps
>;

export const ProgressValue = forwardRef<HTMLDivElement, ProgressValueProps>(
  function ProgressValue({css, style, ...props}, ref) {
    const context = useProgressContext();
    const [progress, setProgress] = useState(0);

    useInterval(
      () => {
        setProgress((n) => {
          if (n >= context.value) {
            return context.value;
          } else {
            return n + 1;
          }
        });
      },
      progress >= context.value ? null : (context.value / 100) * 5,
    );

    const width = clamp(progress, context.min, context.value);

    return (
      <StyledArkDiv
        ref={ref}
        style={{
          ['--progress-value' as string]: `${width}%`,

          ...style,
        }}
        css={{
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

          ...css,
        }}
        {...props}
      />
    );
  },
);

export type ProgressValueTextProps = Assign<
  Assign<HTMLArkProps<'div'>, HTMLStyledProps<'div'>>,
  UseProgressProps
>;

export const ProgressValueText = forwardRef<
  HTMLDivElement,
  ProgressValueTextProps
>(function ProgressValueText(props, ref) {
  const context = useProgressContext();

  return (
    <StyledArkDiv
      ref={ref}
      color="neutral.300"
      fontSize="xs"
      lineHeight="none"
      {...props}
    >
      {context.percentLoaded}%
    </StyledArkDiv>
  );
});

export type ProgressLabelProps = Assign<
  Assign<HTMLArkProps<'div'>, HTMLStyledProps<'div'>>,
  UseProgressProps
>;

export const ProgressLabel = forwardRef<HTMLDivElement, ProgressLabelProps>(
  function ProgressLabel(props, ref) {
    const context = useProgressContext();

    return (
      <StyledArkDiv
        id={context.labelId}
        ref={ref}
        lineHeight="none"
        {...props}
      />
    );
  },
);
