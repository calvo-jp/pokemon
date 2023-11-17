'use client';

import {styled} from '@/styled-system/jsx';
import {Assign, HTMLStyledProps} from '@/styled-system/types';
import {dataAttr} from '@/utils/dom';
import link, {LinkProps} from 'next/link';
import {usePathname} from 'next/navigation';
import {forwardRef} from 'react';

export const StyledLink = styled(
  link,
  {},
  {
    shouldForwardProp(key) {
      return ['href', 'replace', 'scroll', 'prefetch'].includes(key);
    },
  },
);

export const Link = forwardRef<
  HTMLAnchorElement,
  Assign<HTMLStyledProps<'a'>, LinkProps>
>((props, ref) => {
  const pathname = usePathname();

  return (
    <StyledLink
      ref={ref}
      {...props}
      data-selected={dataAttr(props.href === pathname)}
    />
  );
});

Link.displayName = 'Link';
