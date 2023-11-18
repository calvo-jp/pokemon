'use client';

import {IconChevronLeft, IconChevronRight} from '@/components/icons';
import {
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from '@/components/pagination';
import {PokemonsQuery} from '@/graphql';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import {Fragment} from 'react';
import {parse} from 'valibot';
import {PaginationSchema} from './utils';

interface PageNavProps {
  __RSC_DATA: PokemonsQuery;
}

export function PageNav(props: PageNavProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pagination = parse(PaginationSchema, {
    page: searchParams.get('page'),
    size: searchParams.get('size'),
  });

  return (
    <Pagination
      mt={12}
      /* @ts-expect-error */
      page={pagination.page}
      pageSize={pagination.size}
      count={props.__RSC_DATA.details.aggregate?.count ?? 0}
      onPageChange={(o) => {
        const s = new URLSearchParams(searchParams);

        s.set('page', `${o.page}`);
        s.set('size', `${o.pageSize}`);

        router.push(`${pathname}?${s.toString()}`);
      }}
    >
      {(ctx) => (
        <Fragment>
          <PaginationPrevTrigger>
            <IconChevronLeft w={5} h={5} />
          </PaginationPrevTrigger>

          {ctx.pages.map((page, index) => {
            if (page.type === 'page') {
              return (
                <PaginationItem key={index} {...page}>
                  {page.value}
                </PaginationItem>
              );
            }

            return (
              <PaginationEllipsis key={index} index={index}>
                ...
              </PaginationEllipsis>
            );
          })}

          <PaginationNextTrigger>
            <IconChevronRight w={5} h={5} />
          </PaginationNextTrigger>
        </Fragment>
      )}
    </Pagination>
  );
}
