'use client';

import {styled} from '@/styled-system/jsx';
import {Progress as ArkProgress} from '@ark-ui/react';

export const Progress = styled(ArkProgress.Root, {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  },
});

export const ProgressLabel = styled(ArkProgress.Label, {
  base: {
    color: 'neutral.400',
  },
});

export const ProgressValueText = styled(ArkProgress.ValueText, {
  base: {
    color: 'neutral.300',
    fontSize: 'xs',
    lineHeight: 'none',
  },
});

export const ProgressTrack = styled(ArkProgress.Track, {
  base: {
    h: 1,
    bg: 'neutral.700',
    pos: 'relative',
    rounded: 'full',
    flexGrow: 1,
  },
});

export const ProgressRange = styled(ArkProgress.Range, {
  base: {
    w: 0,
    h: 'full',
    bg: 'orange.500',
    pos: 'absolute',
    top: '0',
    left: '0',
    rounded: 'full',
    transitionProperty: 'all',
    transitionDuration: 'slow',
  },
});
