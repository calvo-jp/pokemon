'use client';

import {styled} from '@/styled-system/jsx';
import {Assign, HTMLStyledProps} from '@/styled-system/types';
import {ariaAttr} from '@/utils/aria-attr';
import {HTMLArkProps, ark} from '@ark-ui/react';
import {ChevronRightIcon} from 'lucide-react';
import {
  Children,
  Fragment,
  cloneElement,
  forwardRef,
  isValidElement,
} from 'react';
import {Icon} from './icon';

const StyledArkNav = styled(ark.nav);
const StyledArkOl = styled(ark.ol);
const StyledArkLi = styled(ark.li);
const StyledArkA = styled(ark.a);

export type BreadcrumbsProps = Assign<
  HTMLArkProps<'nav'>,
  HTMLStyledProps<'nav'>
>;

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  function BreadcrumbItem(props, ref) {
    return <StyledArkNav ref={ref} aria-label="Breadcrumb" {...props} />;
  },
);

export type BreadcrumbItemsProps = Assign<
  HTMLArkProps<'ol'>,
  HTMLStyledProps<'ol'>
>;

export const BreadcrumbItems = forwardRef<
  HTMLOListElement,
  BreadcrumbItemsProps
>(function BreadcrumbItem({children, ...props}, ref) {
  const clones = Children.map(children, (child) => {
    return isValidElement(child) ? cloneElement(child) : null;
  });

  return (
    <StyledArkOl
      ref={ref}
      display="flex"
      alignItems="center"
      listStyle="none"
      gap={3}
      {...props}
    >
      {clones?.map((clone, index, list) => (
        <Fragment key={index}>
          {clone}
          {index + 1 < list.length && (
            <Icon color="neutral.600" asChild>
              <ChevronRightIcon />
            </Icon>
          )}
        </Fragment>
      ))}
    </StyledArkOl>
  );
});

export type BreadcrumbItemProps = Assign<
  HTMLArkProps<'li'>,
  HTMLStyledProps<'li'>
>;

export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  function BreadcrumbItem(props, ref) {
    return (
      <StyledArkLi
        ref={ref}
        display="flex"
        alignItems="center"
        lineHeight="none"
        gap={3}
        {...props}
      />
    );
  },
);

export type BreadcrumbLinkProps = Assign<
  HTMLArkProps<'a'>,
  HTMLStyledProps<'a'>
> & {
  currentPage?: boolean;
};

export const BreadcrumbLink = forwardRef<
  HTMLAnchorElement,
  BreadcrumbLinkProps
>(function BreadcrumbLink({currentPage, css, ...props}, ref) {
  return (
    <StyledArkA
      ref={ref}
      color="neutral.300"
      css={{
        '&[href]': {
          _hover: {
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
          },
        },

        ...css,
      }}
      _currentPage={{
        color: 'orange.400',
      }}
      aria-current={ariaAttr(currentPage, 'page')}
      {...props}
    />
  );
});
