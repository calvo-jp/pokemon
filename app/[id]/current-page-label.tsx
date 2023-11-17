'use client';

import {capitalize} from '@/utils/capitalize';
import {useSelectedLayoutSegment} from 'next/navigation';
import {Fragment} from 'react';

export function CurrentPageLabel() {
  const segment = useSelectedLayoutSegment();

  return <Fragment>{capitalize(segment ?? 'about')}</Fragment>;
}
